const getUniqArray = (arr) => {
	for (const value of arr) {
		if (Number.isNaN(+value) || typeof value !== 'number') {
			throw new Error(
				'В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел'
			);
		}
	}
	const uniqueValues = new Set(arr);
	return [...uniqueValues];
};
