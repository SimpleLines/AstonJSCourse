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
    this.typeErrorString(name);
    this.typeErrorString(surname);
    this.typeErrorNumber(wage);
    this.typeErrorString(specialty);
    this.typeErrorNumber(workDays);
    this.typeErrorNumber(experience);

    this.name = name;
    this.surname = surname;
    this.#wage = +wage;
    this.#specialty = specialty;
    this.#workDays = +workDays;
    this.#experience = +experience;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this.typeErrorString(value);
    this._name = value;
  }

  get surname() {
    return this._surname;
  }

  set surname(value) {
    this.typeErrorString(value);
    this._surname = value;
  }

  get wage() {
    return this.#wage;
  }

  set wage(value) {
    this.typeErrorNumber(value);
    this.#wage = +value;
  }

  get specialty() {
    return this.#specialty;
  }

  set specialty(value) {
    this.typeErrorString(value);
    this.#specialty = value;
  }

  get workDays() {
    return this.#workDays;
  }

  set workDays(value) {
    this.typeErrorNumber(value);
    this.#workDays = +value;
  }

  get experience() {
    return this.#experience;
  }

  set experience(value) {
    this.typeErrorNumber(value);
    this.#experience = +value;
  }

  get info() {
    return {
      fullName: `${this.name} ${this.surname}`,
      experience: this.#experience,
      specialty: this.#specialty,
      salary: this.#wage * this.#workDays,
    };
  }

  typeErrorNumber(value) {
    if (!Number.isFinite(+value) || value < 0 || value.length === 0)
      throw TypeError(`The 'experience' field is 'number' only, cannot be empty and greater than 0`);
  }

  typeErrorString(value) {
    if (typeof value !== 'string' || value.length === 0)
      throw TypeError(`The 'specialty' field is only 'string' and cannot be empty`);
  }
}

class Developer extends Staff {
  constructor() {
    super('Unknown Name', 'Unknown Surame', 1200, 'developer', 30, 0);
  }

  get info() {
    let k = 0.05;
    let gradeValue = 'trainee';
    const experienceYear = super.experience;

    experienceYear > 3 ? (k = 0.4) : experienceYear > 1 ? (k = 0.2) : experienceYear > 0.5 ? (k = 0.1) : k;
    experienceYear > 3
      ? (gradeValue = 'senior')
      : experienceYear > 1
      ? (gradeValue = 'middle')
      : experienceYear > 0.5
      ? (gradeValue = 'junior')
      : gradeValue;

    return {
      fullName: super.info.fullName,
      experience: super.info.experience,
      specialty: `${gradeValue} ${super.info.specialty}`,
      salary: super.info.salary + super.info.salary * k,
    };
  }
}
