function* getFibonacci() {
	let a = 0;
	let b = 1;
	while (true) {
		let current = a;
		a = b;
		b = current + a;
		yield current;
	}
}

const fib = getFibonacci();
console.log(fib.next().value);
