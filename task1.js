class Staff {
  #wage;
  #specialty;
  #workDays;
  #experience;

  constructor(
    name = 'Unknown Name',
    surname = 'Unknown Surname',
    wage = 850,
    specialty = 'worker',
    workDays = 30,
    experience = 0
  ) {
    this.name = name;
    this.surname = surname;
    this.#wage = +wage;
    this.#specialty = specialty;
    this.#workDays = +workDays;
    this.#experience = +experience;
  }

  checkString(str) {
    if (
      typeof str !== 'string' ||
      Number.isInteger(Number.parseInt(+str)) ||
      str === ''
    ) {
      throw Error`Passed value is not a string`;
    }
  }

  checkNumber(n) {
    if (!Number.isInteger(Number.parseInt(n)) || n === NaN || n < 0) {
      throw Error`Passed value is not a valid number`;
    }
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this.checkString(val);
    this._name = val;
  }

  get surname() {
    return this._surname;
  }

  set surname(val) {
    this.checkString(val);
    this._surname = val;
  }

  get wage() {
    return this.#wage;
  }

  set wage(val) {
    this.checkNumber(val);
    this.#wage = Number.parseFloat(val);
  }

  get specialty() {
    return this.#specialty;
  }

  set specialty(val) {
    this.checkString(val);
    this.#specialty = val;
  }

  get workDays() {
    return this.#workDays;
  }

  set workDays(val) {
    this.checkNumber(val);
    this.#workDays = Number.parseFloat(val);
  }

  get experience() {
    return this.#experience;
  }

  set experience(val) {
    this.checkNumber(val);
    this.#experience = Number.parseFloat(val);
  }

  get info() {
    return {
      fullName: `${this.name} ${this.surname}`,
      experience: this.#experience,
      specialty: this.#specialty,
      salary: (this.wage * this.workDays).toFixed(0),
    };
  }
}

class Developer extends Staff {
  constructor() {
    super('Unknown Name', 'Unknown Surname', 1200, 'developer');
  }

  get info() {
    const exp = this.experience;
    let specialtyValue = this.specialty;
    let gradeValue =
      exp <= 0.5
        ? 'trainee'
        : exp > 0.5 && exp <= 1
        ? 'junior'
        : exp > 1 && exp <= 3
        ? 'middle'
        : 'senior';

    let k =
      exp <= 0.5
        ? 0.05
        : exp > 0.5 && exp <= 1
        ? 0.1
        : exp > 1 && exp <= 3
        ? 0.2
        : 0.4;

    return {
      fullName: `${this.name} ${this.surname}`,
      experience: super.experience,
      specialty: `${gradeValue} ${specialtyValue}`,
      salary: (
        this.wage * this.workDays +
        this.wage * this.workDays * k
      ).toFixed(0),
    };
  }
}
