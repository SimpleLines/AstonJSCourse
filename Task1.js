const deepCopyObject = (input) => {
  if (typeof input !== 'object') {
    return input;
  }
  let copy = Array.isArray(input) ? [] : {};

  for (const key in input) {
    const value = input[key];
    copy[key] = deepCopyObject(value);
  }

  return copy;
};
