const getInterval = (arr, from, to) => {
	argValidate(arr, from, to);
	if (from > to) {
		return arr.slice(to - 1, from);
	}
	return arr.slice(from - 1, to);
};

const argValidate = (arr, from, to) => {
	const errorMessage = {
		arrError: 'Параметр arr должен содержать только числовые значения',
		fromError: 'Параметр from должен быть числом',
		toError: 'Параметр to должен быть числом',
	};
	for (const value of arr) {
		if (typeof value !== 'number') {
			throw new Error(errorMessage.arrError);
		}
	}
	if (typeof from !== 'number') {
		throw new Error(errorMessage.fromError);
	}
	if (typeof to !== 'number') {
		throw new Error(errorMessage.toError);
	}
};

console.log(getInterval([1, 10, 11, 3, 837, 32, 77, 90], 7, 3));
