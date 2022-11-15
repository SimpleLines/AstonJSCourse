Array.prototype.filterArray = function(cb, thisArg) {
    const newArray = [];
    for (let index = 0; index < this.length; index++){
        let element = this[index];
        let check = cb.call(thisArg, element, index, this);
        if (check) {
            newArray.push(element);
        }
    }
    return newArray;
};
