const url = 'https://jsonplaceholder.typicode.com/posts';

async function getPost () {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function main(){
    //отрисовывать данные которые нам нужны
    const dataPost = await getPost();
    let currentPage = 1;
    let rows = 10;
    

    function displayList(arrData, rowPerPage, page) {
    const postsEl = document.querySelector('.posts');
    postsEl.innerHTML = '';
    page--;

    const start = rowPerPage * page;
    const end = start + rowPerPage ;
    const paginatedData = arrData.slice(start, end);
    
    paginatedData.forEach((el) => {
        const postEl = document.createElement('div');
        postEl.classList.add('post');
        postEl.innerText = `${el.body}`;
        postsEl.appendChild(postEl);
    })
}

    function displayPagination(arrData, rowPerPage) {
        const paginationEl = document.querySelector('.pagination');
        const pagesCount = Math.ceil(arrData.length / rowPerPage);
        const ulEl = document.createElement('ul');
        ulEl.classList.add('pagination-list');

        for (let i = 0; i < pagesCount; i++) {
            const liEl = displayPaginationBtn(i + 1); 
            ulEl.appendChild(liEl);
            
        }
        paginationEl.appendChild(ulEl);
    }

    function displayPaginationBtn(page) {
        const liEl = document.createElement("li");
        liEl.classList.add('pagination-item');
        liEl.innerText = page;
        if (currentPage == page) {
            liEl.classList.add('pagination-item-active');
        }
        liEl.addEventListener('click', () =>{
            currentPage = page;
            displayList(dataPost, rows, currentPage);
            let currentItemLink = document.querySelector('li.pagination-item-active');
            currentItemLink.classList.remove('pagination-item-active');

            liEl.classList.add('pagination-item-active');
        })
        return liEl; 
    }

    displayList(dataPost, rows, currentPage);
    displayPagination(dataPost, rows)
}

main();