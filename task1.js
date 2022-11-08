const deepCopyObject = (obj) => {
  const cloneObj = {};
  for (let prop in obj) {
    if (obj[prop] === null) {
      cloneObj[prop] = obj[prop];
    } else if (typeof obj[prop] === 'object') {
      cloneObj[prop] = deepCopyObject1(obj[prop]);
    } else {
      cloneObj[prop] = obj[prop];
    }
  }
  return cloneObj;
};
