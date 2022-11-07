const deepCopyObject = (obj) => {
	let result = Array.isArray(obj) ? [] : {};
	let value;
	for (const key in obj) {
		value = obj[key];
		result[key] = typeof value === 'object' ? deepCopyObject(value) : value;
	}
	return result;
};
