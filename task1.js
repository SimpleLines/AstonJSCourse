function deepCopyObject(obj) {
  let copyObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if ((typeof obj[key] === 'object') && (obj[key] !== null)) {
      copyObj[key] = deepCopyObject(obj[key]);
    }
    copyObj[key] = obj[key];
  }
  return copyObj; 
}