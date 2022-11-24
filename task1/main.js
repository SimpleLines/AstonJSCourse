const entriesPage = 10;
const entriesGroup = 'todos';
const wrap = document.getElementById('wrapper');
const buttonNext = document.querySelector('.button__next');
const buttonBack = document.querySelector('.button__back');
let activePage = 1;

buttonNext.addEventListener('click', () => {
  activePage++;

  getPosts(
    `https://jsonplaceholder.typicode.com/${entriesGroup}?_limit=${entriesPage}&_page=${activePage}`
  ).then((result) => {
    if (result.total / entriesPage < activePage) {
      activePage--;
    } else {
      console.log(result.data);
      onClickPageActive(activePage);
    }
  });
});

buttonBack.addEventListener('click', () => {
  activePage == 1 ? activePage : activePage--;
  onClickPageActive(activePage);

  getPosts(
    `https://jsonplaceholder.typicode.com/${entriesGroup}?_limit=${entriesPage}&_page=${activePage}`
  ).then((result) => {
    //написать как и на кнопке некст
    console.log(result.data);
  });
});

const getPosts = async (url) => {
  try {
    const response = await fetch(url);
    const headers = new Map(response.headers);
    const data = await response.json();
    return {
      data,
      total: headers.get('x-total-count') || null,
    };
  } catch (error) {
    errorConnection();
  }
};

const errorConnection = () => {
  const error = document.createElement('p');
  error.textContent = 'Сервер недоступен 😔';
  wrap.append(error);
};

const createPagination = (result) => {
  if (result.total) {
    const pagesAmount = result.total / 10;

    for (let i = 1; i <= pagesAmount; i++) {
      const numPage = document.createElement('button');
      if (i === 1) numPage.classList.add('page_active');
      numPage.classList.add('button__pagination');
      numPage.textContent = i;
      wrap.append(numPage);

      numPage.addEventListener('click', () => {
        getPosts(
          `https://jsonplaceholder.typicode.com/${entriesGroup}?_limit=${entriesPage}&_page=${numPage.textContent}`
        ).then((result) => {
          console.log(result.data); //вывод данных при клике на пагинации
          activePage = i;
          onClickPageActive(numPage.textContent);
        });
      });
    }
  } else {
    const notEntries = document.createElement('p');
    notEntries.textContent = 'Записи не найдены 😔';
    wrap.append(notEntries);
  }
};

const onClickPageActive = (numPage) => {
  console.log(numPage);
  const pages = document.querySelectorAll('.button__pagination');
  for (let page of pages) {
    numPage == page.textContent
      ? page.classList.add('page_active')
      : page.classList.remove('page_active'); //исправить активную страницу
  }
};

getPosts(
  `https://jsonplaceholder.typicode.com/${entriesGroup}?_limit=${entriesPage}&_page=1`
).then((result) => {
  console.log(result.data); //вывод данных при первом рендере
  createPagination(result);
});
