  const getPosts = async (url) => {
    const response = await fetch(url);
    const headers = new Map(response.headers);
    const data = await response.json();
    return {
        data,
        total: headers.get('x-total-count') || null
    };
};

let _limit = 10;
let _page = 1;

getPosts(`https://jsonplaceholder.typicode.com/posts?${_limit}&${_page}`)
    .then((result) => {
      const {data} = result;
          
      function displayList(arrData, limitPerPage, page) {
        const postsElements = document.querySelector('.posts');
        postsElements.innerHTML = "";
        page--;
    
        const start = limitPerPage * page;
        const end = start + limitPerPage;
        const paginatedData = arrData.slice(start, end);
    
        paginatedData.forEach((elem) => {
          const postElement = document.createElement('div');
          postElement.classList.add('post');
          postElement.innerHTML = `<span class="post-title">${elem.title}</span>
                                    <br>
                                    <span class="post-body">${elem.body}</span>`;
          postsElements.appendChild(postElement);
        })
      }
    
      function displayPagination(arrData, limitPerPage) {
        const paginationElement = document.querySelector('.pagination');
        const pagesCount = Math.ceil(arrData.length / limitPerPage);
        const ulElement = document.createElement('ul');
        ulElement.classList.add('pagination__list');
    
        for (let i = 0; i < pagesCount; i++) {
          const liEl = displayPaginationBtn(i + 1);
          ulElement.appendChild(liEl);
        }
        paginationElement.appendChild(ulElement);
      }
    
      function displayPaginationBtn(page) {
        const liElement = document.createElement('li');
        liElement.classList.add('pagination__item');
        liElement.innerText = page;
    
        if (_page == page) liElement.classList.add('pagination__item--active');
    
        liElement.addEventListener('click', () => {
          _page = page;
          displayList(data, _limit, _page);
    
          let currentItemLi = document.querySelector('li.pagination__item--active');
          currentItemLi.classList.remove('pagination__item--active');
    
          liElement.classList.add('pagination__item--active');
        })
    
        return liElement;
      }

      displayList(data, _limit, _page);
      displayPagination(data, _limit);
    }); 
 