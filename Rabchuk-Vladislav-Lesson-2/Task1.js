function deepCopyObject(obj) {
  const newObject = {};
  for (const key in obj) {
    newObject[key] = obj[key];
  }
  return newObject;
}
