const entriesPage = 10;
const entriesGroup = 'comments';
let activePage = location.search.substring(17);

const wrap = document.getElementById('pagination__buttons-page');
const buttonNext = document.querySelector('.pagination__button-next');
const buttonBack = document.querySelector('.pagination__button-back');
const wrapperContent = document.querySelector('.wrapper__content');

const createContent = (data) => {
  data.map((item) => {
    const cardContent = document.createElement('div');
    const id = document.createElement('p');
    const name = document.createElement('h2');
    const email = document.createElement('p');
    const body = document.createElement('p');

    cardContent.classList.add('content-card');
    id.classList.add('card-id');
    name.classList.add('card-name');
    name.classList.add('card-name-full');
    email.classList.add('card-email');
    body.classList.add('card-body');

    id.textContent = `Id: ${item.id}`;
    name.textContent = `Name: ${item.name}`;
    email.textContent = `Email: ${item.email}`;
    body.textContent = `Body: ${item.body}`;

    wrapperContent.append(cardContent);

    cardContent.append(name);
    cardContent.append(email);
    cardContent.append(body);
    cardContent.append(id);

    name.addEventListener('click', () => {
      name.classList.toggle('card-name-full');
    });
  });
};

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

buttonNext.addEventListener('click', () => {
  if (!location.search.length) activePage = 1;
  activePage++;
  onClickGetRequest(-1);
});

buttonBack.addEventListener('click', () => {
  if (!location.search.length) activePage = 1;
  activePage--;
  onClickGetRequest(+1);
});

const onClickGetRequest = (action) => {
  getPosts(`https://jsonplaceholder.typicode.com/${entriesGroup}?_limit=${entriesPage}&_page=${activePage}`).then(
    (result) => {
      if (activePage > result.total / entriesPage || activePage == 0) {
        activePage = activePage + action;
      } else {
        while (wrapperContent.firstChild) {
          wrapperContent.removeChild(wrapperContent.firstChild);
        }
        createContent(result.data);
        onClickPageActive(activePage);
        saveParamsUrl(activePage);
      }
    }
  );
};

const errorConnection = () => {
  const error = document.createElement('p');
  error.textContent = 'Сервер недоступен 😔';
  wrap.append(error);
};

const createPagination = (result) => {
  if (result.total) {
    const pagesAmount = Math.ceil(result.total / entriesPage);

    for (let i = 1; i <= pagesAmount; i++) {
      const numPage = document.createElement('button');
      if (!location.search.length && i == 1) numPage.classList.add('page_active');
      if (i == activePage) numPage.classList.add('page_active');
      numPage.classList.add('button__pagination');
      numPage.textContent = i;
      wrap.append(numPage);

      numPage.addEventListener('click', () => {
        getPosts(
          `https://jsonplaceholder.typicode.com/${entriesGroup}?_limit=${entriesPage}&_page=${numPage.textContent}`
        ).then((result) => {
          while (wrapperContent.firstChild) {
            wrapperContent.removeChild(wrapperContent.firstChild);
          }
          createContent(result.data);
          activePage = i;
          onClickPageActive(numPage.textContent);
          saveParamsUrl(numPage.textContent);
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
  const pages = document.querySelectorAll('.button__pagination');
  for (let page of pages) {
    numPage == page.textContent ? page.classList.add('page_active') : page.classList.remove('page_active');
  }
};

const saveParamsUrl = (activePage) => {
  history.replaceState(null, null, `?_limit=${entriesPage}&_page=${activePage}`);
};

if (!location.search.length) location.search = `?_limit=${entriesPage}&_page=${1}`;

getPosts(`https://jsonplaceholder.typicode.com/${entriesGroup}${location.search}`).then((result) => {
  createContent(result.data);
  createPagination(result);
});
