'use strict';

const listElement = document.getElementById('list');
const headElement = document.getElementById('head');
const paginationElement = document.getElementById('pagination');
const date = document.querySelector('.date');
const now = new Date();
const locale = navigator.language;
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  weekday: 'long',
};
const rows = 10;
let currentPage = 1;

date.textContent = new Intl.DateTimeFormat(locale, options).format(now);

function DisplayList(items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = '';
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i];

    let idElement = document.createElement('div');
    idElement.classList.add('item');
    idElement.classList.add('bold');
    idElement.innerText = item.id;
    wrapper.appendChild(idElement);

    let title = document.createElement('div');
    title.classList.add('item');
    title.innerText = item.title;
    wrapper.appendChild(title);

    let bodyElement = document.createElement('div');
    bodyElement.classList.add('item');
    bodyElement.innerText = item.body;
    wrapper.appendChild(bodyElement);
  }
}

function SetupPagination(items, wrapper, rows_per_page) {
  let pageCount = items.length / rows_per_page;
  for (let i = 1; i <= pageCount; i++) {
    let btn = PaginationButton(i);
    wrapper.appendChild(btn);
  }
}

function PaginationButton(page) {
  let button = document.createElement('button');
  button.innerText = page;

  if (currentPage === page) button.classList.add('active');

  button.addEventListener('click', function () {
    currentPage = page;
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => DisplayList(json, listElement, rows, currentPage));

    let currentBtn = document.querySelector('.pagenumbers button.active');
    currentBtn.classList.remove('active');

    button.classList.add('active');
  });

  return button;
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => DisplayList(json, listElement, rows, currentPage));

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => SetupPagination(json, paginationElement, rows));
