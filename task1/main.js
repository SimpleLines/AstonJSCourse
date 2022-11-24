const entriesPage = 10;
const wrap = document.getElementById('wrapper');

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

//постараться разбить на функции
//задать стили всему
//пересмотреть названия функций
//обязательно сделать правильную пагинацию
const createPagination = (result) => {
  if (result.total) {
    const pagesAmount = result.total / 10;

    for (let i = 1; i <= pagesAmount; i++) {
      const numPage = document.createElement('button');
      numPage.textContent = i;
      wrap.append(numPage);

      numPage.addEventListener('click', () => {
        getPosts(`https://jsonplaceholder.typicode.com/photos?_limit=${entriesPage}&_page=${numPage.textContent}`).then(
          (result) => {
            console.log(result.data);
          }
        );
      });
    }
  } else {
    const notEntries = document.createElement('p');
    notEntries.textContent = 'Записи не найдены 😔';
    wrap.append(notEntries);
  }
};

getPosts('https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1').then((result) => {
  createPagination(result);
});
