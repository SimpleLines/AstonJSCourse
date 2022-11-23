const LIMIT = 10;
const posts = document.querySelector('.posts');
const btns = document.querySelector('.btns');
let page = 1;
let currentPage;
const getPosts = async (url) => {
  const response = await fetch(url);
  const headers = new Map(response.headers);
  const data = await response.json();
  return {
    data,
    total: headers.get('x-total-count') || null,
  };
};
const createList = (arr) => {
  posts.innerHTML = '';
  for (let i of arr) {
    let li = document.createElement('li');
    li.innerHTML = JSON.stringify(i);
    posts.appendChild(li);
  }
};
getPosts(`https://jsonplaceholder.typicode.com/posts?_limit=${LIMIT}&_page=${page}`)
  .then((result) => {
    let count = Math.ceil(+result.total / LIMIT);
    currentPage = 1;
    createList(result.data);
    return count;
  })
  .then((count) => {
    let prev = document.getElementById('firstBtn');
    let next = document.getElementById('nextBtn');
    prev.onclick = function () {
      if (+currentPage > 1) {
        getPosts(
          `https://jsonplaceholder.typicode.com/posts?_limit=${LIMIT}&_page=${currentPage - 1}`,
        ).then((result) => {
          createList(result.data);
        });
        currentPage--;
      }
      else {
        prev.setAttribute('disabled', true);
      }
      return;
    };
    next.onclick = function () {
      if (+currentPage < 10) {
        getPosts(
          `https://jsonplaceholder.typicode.com/posts?_limit=${LIMIT}&_page=${currentPage + 1}`,
        ).then((result) => {
          createList(result.data);
        });
        currentPage++;
      }
      else {
        next.setAttribute('disabled', true);
      }
      return;
    };
    btns.append(prev);
    for (let i = 1; i <= count; i++) {
      let num = document.createElement('a');
      num.innerHTML = i;
      num.onclick = function () {
        if (+this.innerHTML !== currentPage) {
          getPosts(`https://jsonplaceholder.typicode.com/posts?_limit=${LIMIT}&_page=${i}`).then(
            (result) => {
              createList(result.data);
            },
          );
          currentPage = +this.innerHTML;
        }
        if (+this.innerHTML === currentPage) {
          return;
        }
      };
      btns.append(num);
    }
    btns.append(next);
  });