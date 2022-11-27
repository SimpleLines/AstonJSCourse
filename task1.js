Array.prototype.filterArray = function (cb, thisArg) {
	const filtered = [];
	for (let i = 0; i < this.length; i++) {
		if (cb.call(thisArg, this[i], i, this)) {
			filtered.push(this[i]);
		}
	}
	return filtered;
};

