const getInterval = (arr, from, to) => {
	argValidate(arr, from, to);
	let startInterval;
	let endInterval;
	startInterval = from < to ? from : to;
	endInterval = from < to ? to : from;
	let sortedArr = [];
	for (let key = startInterval; key < endInterval + 1; key++) {
		if (arr.includes(key)) {
			sortedArr.push(key);
		}
	}
	return sortedArr;
};

const argValidate = (arr, from, to) => {
	const errorMessage = {
		arrError: 'Параметр arr должен содержать только числовые значения',
		fromError: 'Параметр from должен быть числом',
		toError: 'Параметр to должен быть числом',
	};
	for (const value of arr) {
		if (typeof value !== 'number' || Number.isNaN(+value)) {
			throw new Error(errorMessage.arrError);
		}
	}
	if (typeof from !== 'number' || Number.isNaN(+from)) {
		throw new Error(errorMessage.fromError);
	}
	if (typeof to !== 'number' || Number.isNaN(+to)) {
		throw new Error(errorMessage.toError);
	}
};
