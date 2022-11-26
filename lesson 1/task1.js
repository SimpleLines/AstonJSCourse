function sum(a, b) {
  if (typeof a == "string") {
    a = Number(a);
  }
  if (typeof b == "string") {
    b = Number(b);
  }
  return (a + b).toFixed(3);
}
sum(a,b);
