const sum = (a, b) => {
  if (isNaN(a) || isNaN(b)){
    throw Error('Неккоректные числа')
  }
  else {
    return Math.floor(+a + (+b)*1000)/1000 
  }
}
