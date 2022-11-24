async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function main() {
  const postsData = await getData(`https://jsonplaceholder.typicode.com/posts`);
  let currentPage = 1;
  let LIMIT = 10;

  function displayList(arrData, rowPerPage, page) {
    const postsEl = document.querySelector('.posts');
    postsEl.innerHTML = '';
    page--;

    const start = rowPerPage * page;
    const end = start + rowPerPage;
    const paginatedData = arrData.slice(start, end);

    paginatedData.forEach((element) => {
      const postEl = document.createElement('div');
      postEl.classList.add('post');
      postEl.innerText = `${element.title}`;
      postsEl.appendChild(postEl);
    });
  }

  function displayPagination(arrData, rowPerPage) {
    const paginationEl = document.querySelector('.pagination');
    const pagesCount = Math.ceil(arrData.length / rowPerPage);
    const ul = document.createElement('ul');
    ul.classList.add('pagination__list');

    for (let i = 0; i < pagesCount; i++) {
      const li = displayPadinationBtn(i + 1);
      ul.appendChild(li);
    }
    paginationEl.appendChild(ul);
  }

  function displayPadinationBtn(page) {
    const li = document.createElement('li');
    li.classList.add('pagination__item');
    li.innerText = page;

    if (currentPage === page) {
      li.classList.add('pagination__item--active');
    }

    li.addEventListener('click', () => {
      currentPage = page;
      displayList(postsData, LIMIT, currentPage);

      let currentItemLi = document.querySelector('li.pagination__item--active');
      currentItemLi.classList.remove('pagination__item--active');

      li.classList.add('pagination__item--active');
    });
    return li;
  }

  displayList(postsData, LIMIT, currentPage);
  displayPagination(postsData, LIMIT);
}

main();
