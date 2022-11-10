function deepCopyObject(obj) {
  let obj2 = Object.assign({}, obj);
  return obj2;
}
deepCopyObject({});
