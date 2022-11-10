function deepCopyObject(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let cloneObject = Array.isArray(obj) ? [] : {};

  for (const i in obj) {
    cloneObject[i] = deepCopyObject(obj[i]);
  }

  return cloneObject;
}
