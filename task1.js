class Staff {
	name = 'Unknown Name';
	surname = 'Unknown Surname';
	#wage = 850;
	#specialty = 'worker';
	#workDays = 30;
	#experience = 0;

	constructor({ name, surname, wage, specialty, workDays, experience } = {}) {
		this.name = name || this.name;
		this.surname = surname || this.surname;
		this.#wage = +wage || this.#wage;
		this.#specialty = specialty || this.#specialty;
		this.#workDays = +workDays || this.#workDays;
		this.#experience = +experience || this.#experience;
	}

	isString(value) {
		if (!typeof value === 'string') {
			throw new Error(`Невалидный аргумент`);
		}
	}

	isNumber(value) {
		if (!Number.isInteger(+value) || value == '') {
			throw new Error(`Невалидный аргумент`);
		}
	}

	set name(val) {
		this.isString(val);
		return (this.name = val);
	}

	set surname(val) {
		this.isString(val);
		return (this.surname = val);
	}

	get wage() {
		return this.#wage;
	}
	set wage(val) {
		this.isNumber(val);
		if (typeof value !== 'number') {
			throw new Error('dsf');
		}

		return (this.#wage = val);
	}

	get specialty() {
		return this.#specialty;
	}
	set specialty(val) {
		this.isString(val);
		return (this.#specialty = val);
	}

	get workDays() {
		return this.#workDays;
	}
	set workDays(val) {
		this.isNumber(val);
		return (this.#workDays = val);
	}

	get experience() {
		return this.#experience;
	}
	set experience(val) {
		this.isNumber(val);
		return (this.#experience = val);
	}

	get info() {
		if (
			typeof +this.#experience !== 'number' ||
			Number.isNaN(+this.#experience) ||
			typeof +this.#wage !== 'number' ||
			Number.isNaN(+this.#wage) ||
			!Number.isInteger(+this.#workDays) ||
			typeof this.#specialty !== 'string'
		) {
			throw TypeError('Присутствуют невалидные аргументы.');
		}
		return {
			fullName: `${this.name} ${this.surname}`,
			experience: this.experience,
			specialty: this.specialty,
			salary: this.wage * this.workDays,
		};
	}
}

class Developer extends Staff {
	constructor({ name, surname, wage, specialty, workDays, experience } = {}) {
		super({
			name: name || 'Unknown name',
			surname: surname || 'Unknown Surname',
			wage: wage || 1200,
			specialty: specialty || 'developer',
			workDays: workDays || 30,
			experience: experience || 0,
		});
	}

	get info() {
		if (
			typeof +this.experience !== 'number' ||
			Number.isNaN(+this.experience) ||
			typeof +this.wage !== 'number' ||
			Number.isNaN(+this.wage) ||
			!Number.isInteger(+this.workDays) ||
			typeof this.specialty !== 'string'
		) {
			throw Error('Присутствуют невалидные аргументы.');
		}
		const info = super.info;
		let k;
		if (this.experience <= 0.5) {
			k = 0.05;
		} else if (0.5 < this.experience && this.experience <= 1) {
			k = 0.1;
		} else if (1 < this.experience && this.experience <= 3) {
			k = 0.2;
		} else {
			k = 0.4;
		}
		const gradeValue =
			this.experience <= 0.5
				? 'trainee'
				: this.experience <= 1
				? 'junior'
				: this.experience <= 3
				? 'middle'
				: 'senior';

		info.salary = this.wage * this.workDays + this.wage * this.workDays * k;
		info.specialty = `${gradeValue} ${this.specialty}`;
		return info;
	}
}
