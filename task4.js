function getUniqArray(arr){
  let res = Array.from(new Set(arr));
  res.forEach((i) =>{
    if (typeof i !== 'number' || typeof i == Infinity || typeof i == NaN){
      throw Error('В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел');
    }
    })
    return res;
}
