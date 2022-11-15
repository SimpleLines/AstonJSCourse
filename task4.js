function getUniqArray(arr) {
   arr.forEach((el) => {
        if(typeof el !== 'number' || typeof el === 'boolean'){
            throw Error('В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел');        
        }
    });
    return Array.from(new Set(arr));
}
