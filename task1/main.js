const getPosts = async (page = 1) => {
	try {
		const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
		const response = await fetch(`${baseUrl}?_limit=10&_page=${page}`);
		const headers = new Map(response.headers);
		const data = await response.json();
		return {
			data,
			total: headers.get('x-total-count') || null,
		};
	} catch (error) {
        document.querySelector('.cards').textContent = error.message
    }
};

async function main() {
	let currentPage = 1;
	const displayList = async (page) => {
		const { data, total } = await getPosts(page);
		const cardsElem = document.querySelector('.cards');
		cardsElem.innerHTML = '';
		data.forEach(el => {
			const cardEl = document.createElement('div');
			cardEl.classList.add('card');
			cardEl.innerHTML = `
            <div class="card-image">
              <img src="https://avatars.mds.yandex.net/i?id=8af3fcc3f9bf9eb93d1f96bcbabbc80c-2398611-images-thumbs&n=13&exp=1">
              <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
              </div>
              <div class="card-content">
              <span class="card-title">${el.title.slice(0, 15)}...</span>
              <p>${el.body}</p>
            </div>
     
            `;
			cardsElem.append(cardEl);
		});
	};
	displayList();

	async function displayPagination(page = 1) {
		const { data, total } = await getPosts(page);
		const paginationEl = document.querySelector('.paginationBlock');
		const pagesCount = total / data.length;
		const ulEl = document.createElement('ul');
		ulEl.classList.add('paginationUl');
		paginationEl.append(ulEl);
		for (let i = 1; i < pagesCount + 1; i++) {
			const liEl = await displayPaginationBtn(i);
			ulEl.append(liEl);
		}
	}
	displayPagination();

	async function displayPaginationBtn(page) {
		const liEl = document.createElement('li');
		liEl.classList.add('paginationLi');
		liEl.textContent = page;
		if (currentPage === page) {
			liEl.classList.add('active');
		}
		liEl.addEventListener('click', () => {
			currentPage = page;
			displayList(currentPage);
			let currentItemLi = document.querySelector('li.active');
			currentItemLi.classList.remove('active');
			liEl.classList.add('active');
		});
		return liEl;
	}
}
main();
