class Staff {
  #wage;
  #specialty;
  #workDays;
  #experience;

  constructor(name = 'Unknown Name', surname = 'Unknown Surname', wage = 850, specialty = 'worker', workDays = 30, experience = 0) {
    this.name = name;
    this.surname = surname;
    this.#wage = +wage;
    this.#specialty = specialty;
    this.#workDays = +workDays;
    this.#experience = +experience;
  }

  errorString(val) {
    if (!typeof val === 'string' || !val instanceof String || val == '') {
      throw Error(`Argument of your value is not assignable to parameter of type 'string'.`);
    }
  }

  errorNumber(val) {
    if (!Number.isInteger(+val) || val == '') {
      throw Error(`Argument of your value is not assignable to parameter of type 'number'.`);
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this.errorString(newName);
    this._name = newName;
  }

  get wage() {
    return this.#wage;
  }

  set wage(newWage) {
    this.errorNumber(newWage);
    if (+newWage < 0) {
      throw Error('Value must be greater than zero');
    }
    this.#wage = +newWage;
  }

  get specialty() {
    return this.#specialty;
  }

  set specialty(newSpecialty) {
    this.errorString(newSpecialty);
    this.#specialty = newSpecialty;
  }

  get workDays() {
    return this.#workDays;
  }

  set workDays(newWorkDays) {
    this.errorNumber(newWorkDays);
    if (+newWorkDays < 0) {
      throw Error('Value must be greater than zero');
    }
    this.#workDays = +newWorkDays;
  }

  get experience() {
    return this.#experience;
  }

  set experience(newExperience) {
    this.errorNumber(newExperience);
    if (+newExperience < 0) {
      throw Error('Value must be greater than zero');
    }
    this.#experience = +newExperience;
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
      throw TypeError('Entered values are of the wrong type. Expected type "string" or "number".');
    }
    return {
      fullName: `${this.name} ${this.surname}`,
      experience: this.#experience,
      specialty: this.#specialty,
      salary: this.#wage * this.#workDays,
    };
  }
}

class Developer extends Staff {
  constructor() {
    super('Unknown Name', 'Unknown surname', 1200, 'developer', 'as', '0');
  }

  setSpecialty() {
    let gradeValue;
    gradeValue =
      this.experience <= 0.5
        ? 'trainee'
        : this.experience <= 1
        ? 'junior'
        : this.experience <= 3
        ? 'middle'
        : 'senior';

    return (this._specialty = `${gradeValue} ${this.specialty}`);
  }

  totalSalary() {
    let k;
    k =
      this.experience <= 0.5
        ? (k = 0.05)
        : this.experience <= 1
        ? (k = 0.1)
        : this.experience <= 3
        ? (k = 0.2)
        : 0.4;

    return (this._salary = this.wage * this.workDays + this.wage * this.workDays * k);
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
      throw Error('The entered values are of the wrong type. Expected type "string" or "number".');
    }
    return {
      fullName: `${this.name} ${this.surname}`,
      experience: +this.experience,
      specialty: this.setSpecialty(),
      salary: this.totalSalary(),
    };
  }
}

