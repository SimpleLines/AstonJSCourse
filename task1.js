const deepCopyObject = (obj) =>{
  let clone = {};  
  for (let value in obj){
    if (obj[value] === null){
        clone[value] = obj[value];
    }
    else if (typeof obj[value] === 'object'){
        clone[value] = deepCopyObject(obj[value]);
    }
    else {
        clone[value] = obj[value];
    }
  }  
  return clone;
}
