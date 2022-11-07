const getNumberRadix = (value, radix) => {
	const num = parseInt(value);
	const radixToNum = parseInt(radix);
	if (radix > 16 || radix < 2 || !radixToNum || !num) {
		throw new Error(
			'Функция getNumberRadix была вызвана с некорректными параметрами'
		);
	}
	return num.toString(radix);
};
