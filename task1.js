const staff = {
  name: 'Alex',
  age: 20,
  skills: [
    {
      id: 1,
      value: 'html',
    },
    {
      id: 2,
      value: 'js',
    },
    {
      id: 3,
      value: 'css',
    },
  ],
  cost: undefined,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...',
  knowledge: [
    {
      label: 'React JS',
      score: 7,
    },
    {
      label: 'JS',
      score: 7,
    },
    {
      label: 'CSS',
      score: 9,
    },
    {
      label: 'HTML',
      score: 10,
    },
  ],
  avatar: null,
};

//method №1
const deepCopyObject1 = (obj) => {
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

//method #2
const deepCopyObject2 = (obj) => {
  return structuredClone(obj);
};
