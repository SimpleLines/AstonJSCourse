function deepCopyObject(obj) {
  const cloneObject = {};
  for (const i in obj) {
    if (obj[i] instanceof Object) {
      cloneObject[i] = deepCopyObject(obj[i]);
      continue;
    }
    cloneObject[i] = obj[i];
  }
  return cloneObject;
}
