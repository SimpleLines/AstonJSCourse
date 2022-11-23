const LIMIT = 10;
const list = document.querySelector('.list');
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
  list.innerHTML = '';
  for (let val of arr) {
    let li = document.createElement('li');
    li.innerHTML = JSON.stringify(val);
    list.appendChild(li);
  }
};

getPosts(`https://jsonplaceholder.typicode.com/posts?_limit=${LIMIT}&_page=${page}`)
  .then((result) => {
    let totalPages = Math.ceil(+result.total / LIMIT);
    currentPage = 1;

    createList(result.data);
    return totalPages;
  })
  .then((totalPages) => {
    let previous = document.createElement('a');
    let next = document.createElement('a');

    previous.innerHTML = 'предыдущая';
    next.innerHTML = 'следующая';

    previous.onclick = function () {
      if (+currentPage > 1) {
        getPosts(
          `https://jsonplaceholder.typicode.com/posts?_limit=${LIMIT}&_page=${currentPage - 1}`,
        ).then((result) => {
          createList(result.data);
        });
        currentPage--;
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
      return;
    };

    btns.append(previous);

    for (let i = 1; i <= totalPages; i++) {
      let a = document.createElement('a');
      a.innerHTML = i;

      a.onclick = function () {
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

      btns.append(a);
    }

    btns.append(next);
  });

