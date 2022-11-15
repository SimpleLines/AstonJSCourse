class Staff {
  #wage;
  #specialty;
  #workDays;
  #experience;

  constructor(
    name = 'Unknown name',
    surname = 'Unknown surname',
    wage = 850,
    specialty = 'worker',
    workDays = 30,
    experience = 0
  ) {
    this.name = name;
    this.surname = surname;
    this.#wage = wage;
    this.#specialty = specialty;
    this.#workDays = workDays;
    this.#experience = experience;
  }

  checkString(value) {
    if (typeof value === 'string' && this.isCorrectString(value)) {
      return true;
    }
    throw new TypeError(
      'Невалидное значение. Передаваемое значение не должно начинаться с пробела и должно быть непустой строкой.'
    );
  }

  checkNumber(value) {
    if (typeof value === 'number' && !isNaN(value) && value > 0) {
      return true;
    }
    throw new TypeError('Невалидное значение. Передаваемое значение должно быть числом');
  }

  isCorrectString(string) {
    for (let char of string) {
      if (char === ' ' || char === '') {
        return false;
      }
      return true;
    }
  }
  set name(value) {
    this.checkString(value);
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set surname(value) {
    this.checkString(value);
    this._surname = value;
  }

  get surname() {
    return this._surname;
  }

  set wage(value) {
    this.checkNumber(value);
    this.#wage = value;
  }

  get wage() {
    return this.#wage;
  }

  set specialty(value) {
    this.checkString(value);
    this.#specialty = value;
  }

  get specialty() {
    return this.#specialty;
  }

  set workDays(value) {
    this.checkNumber(+value);
    this.#workDays = +value;
  }

  get workDays() {
    return this.#workDays;
  }

  set experience(value) {
    this.checkNumber(+value);
    this.#experience = value;
  }

  get experience() {
    return this.#experience;
  }

  get info() {
    return {
      fullName: `${this.name} ${this.surname}`,
      experience: this.experience,
      specialty: this.specialty,
      salary: this.#wage * this.#workDays,
    };
  }
}

class Developer extends Staff {
  constructor() {
    super('Unknown Name', 'Unknown Surname', 1200, 'developer', 30, 0);
  }

  get info() {
    let k = 0.05;
    let gradeValue = 'trainee';
    const specialtyValue = this.specialty;

    let workDays = super.workDays;
    let wage = super.wage;

    this.experience > 3
      ? ((k = 0.4), (gradeValue = 'senior'))
      : this.experience > 1
      ? ((k = 0.2), (gradeValue = 'middle'))
      : this.experience > 0.5
      ? ((k = 0.1), (gradeValue = 'junior'))
      : (k, gradeValue);

    return {
      fullName: super.info.fullName,
      experience: super.experience,
      specialty: `${gradeValue} ${specialtyValue}`,
      salary: wage * workDays + wage * workDays * k,
    };
  }
}
