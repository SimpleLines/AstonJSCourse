const getPosts = async (url) => {
  const response = await fetch(url);
  const headers = new Map(response.headers);
  const data = await response.json();
  return {
    data,
    total: headers.get('x-total-count') || null
  };
};

let limit = 10;
let page = 1;

getPosts(`https://jsonplaceholder.typicode.com/posts?_${limit}&_${page}`)
  .then((result) => {
    const {data} = result;
    const postsElements = document.querySelector('.paginated-list');

    function displayList(arrData) {
      const paginatedData = arrData;
      paginatedData.forEach((elem) => {
        const postElement = document.createElement('li');
        postElement.innerHTML = ` <a href="https://jsonplaceholder.typicode.com/posts/${elem.id}">
                                    <div class="post-element">
                                      <span class="post-element__title">${elem.title}</span>
                                      <br>
                                      <span class="post-element__body">${elem.body}</span>
                                    </div>
                                  </a>
                                `;
        postsElements.appendChild(postElement);
      })
    }
    displayList(data);

    let li = document.querySelectorAll('li');
    let paginationNumber = document.querySelector('.pagination-numbers');
    let buttonCount = Math.ceil(li.length / limit);

    for (let i = 1; i <= buttonCount; i++) {
      let button = document.createElement('button');
      button.innerHTML = i;
      paginationNumber.appendChild(button);
    }

    document.getElementById('next-button').addEventListener('click', next);
    document.getElementById('prev-button').addEventListener('click', prev);
    document.getElementById('prev-button').setAttribute('disabled', true);

    function main(pageNum) {
      let nextPage = limit * pageNum;
      let prevPage = limit * (pageNum - 1);
      for (let i = 0; i < li.length; i++) {
        li[i].style.display = 'none';
        if (i < nextPage && i >= prevPage) {
          li[i].style.display = 'block';
        }
      }
    }
    main(page);

    let buttnNumbers = paginationNumber.querySelectorAll('button');
    for (let i = 0; i < buttnNumbers.length; i++) {
      buttnNumbers[i].addEventListener('click', buttonClick);
    }
    buttnNumbers[page - 1].classList.add('active');

    function buttonClick() {
      buttnNumbers[page - 1].classList.remove('active');
      if (this.innerHTML == buttonCount) {
        document.getElementById('next-button').setAttribute('disabled', true);
        document.getElementById('prev-button').removeAttribute('disabled');
      }
      else if (this.innerHTML == 1) {
        document.getElementById('prev-button').setAttribute('disabled', true);
        document.getElementById('next-button').removeAttribute('disabled');
      }
      else {
        document.getElementById('next-button').removeAttribute('disabled');
        document.getElementById('prev-button').removeAttribute('disabled');
      }
      page = this.innerHTML;
      main(page);
      this.classList.add('active');
    }

    function next() {
      document.getElementById('prev-button').removeAttribute('disabled');
      if (page !== buttonCount) {
        buttnNumbers[page - 1].classList.remove('active');
        buttnNumbers[page].classList.add('active');
        page++;
      }
      if (page === buttonCount) {
        document.getElementById('next-button').setAttribute('disabled', true);
      }
      main(page);
    }

    function prev() {
      buttnNumbers[page - 1].classList.remove('active');
      buttnNumbers[page - 2].classList.add('active');
      document.getElementById('next-button').removeAttribute('disabled');
      if (page !== 1) {
        page--;
      }
      if (page === 1) {
        document.getElementById('prev-button').setAttribute('disabled', true);
      }
      main(page);
    }
}); 
