const getNumberRadix = (value, radix) => {
	const regexp = /^\d+$/gi;
	if (
		!regexp.test(value) ||
		typeof radix !== 'number' ||
		radix > 16 ||
		radix < 2
	) {
		throw new Error(
			'Функция getNumberRadix была вызвана с некорректными параметрами'
		);
	} 
	return value.toString(radix);
};
