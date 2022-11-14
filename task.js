class Staff {
  #wage; 
  #specialty;
  #workDays;
  #experience;

  constructor(name = 'Unknown Name', surname = 'Unknown Surname', wage = 850, specialty = 'worker', workDays = 30, experience = 0) {
    this.name = name;
    this.surname = surname;
    this.#wage = wage; 
    this.#specialty = specialty;
    this.#workDays = workDays; 
    this.#experience = experience; 
  }

  getErrorString(value) {
    if (typeof value !== 'string') 
      throw TypeError(`Value ${value} has incorrect type. Type 'string' have been expected.`);
  }
  getErrorNumber(value) {
    if (typeof value !== 'number') 
      throw TypeError(`Value ${value} has incorrect type. Type 'number' have been expected.`);
  }

  get name() {
    this.getErrorString(this._name);
    return this._name;
  }
  set name(value) {
    this.getErrorString(value);
    this._name = value;
  }  

  get surname() {
    this.getErrorString(this._surname);
    return this._surname
  }
  set surname(value) {
    this.getErrorString(value);
    this._surname = value;
  }  

  get wage() {
    this.getErrorNumber(this.#wage);
    return this.#wage;
  }
  set wage(value) {
    this.getErrorNumber(value);
    this.#wage = value;
  }

  get specialty() {
    this.getErrorString(this.#specialty);
    return this.#specialty;
  }
  set specialty(value) {
    this.getErrorString(value);
    this.#specialty = value;
  }

  get workDays() {
    this.getErrorNumber(this.#workDays);
    return this.#workDays;
  }
  set workDays(value) {
    this.getErrorNumber(value);
    this.#workDays = value;
  }

  get experience() {
    this.getErrorNumber(this.#experience);
    return this.#experience;
  }
  set experience(value) {
    this.getErrorNumber(value);
    this.#experience = value;
  }

  get info() {
    if (typeof this.#experience !== 'number' || typeof this.#wage !== 'number' || typeof this.#workDays !== 'number' || typeof this.#specialty !== 'string') {
      throw TypeError('One or more of the entered values has incorrect type. Type "string" or "number" have been expected.');
    }  
    return {
      fullName: `${this.name} ${this.surname}`,
      experience: this.#experience,
      specialty: this.#specialty,
      salary: this.#wage * this.#workDays
    }  
  }
}

class Developer extends Staff {
  constructor() {
    super('Unknown Name', 'Unknown Surname', 1200, 'developer', 30, 0);
  }
  
  setSalary() {
    let k = 0;
    k = this.experience <= 0.5 ? 0.05 : this.experience > 0.5 && this.experience <= 1 ? 0.1 : this.experience > 1 && this.experience <= 3 ? 0.2 : this.experience > 3 ? 0.5 : k;  
    return this._salary = this.wage * this.workDays + (this.wage * this.workDays * k);
  }

  setSpecialty() {
    let gradeValue = '';
    return gradeValue = this.experience <= 0.5 ? 'trainee' : this.experience > 0.5 && this.experience <= 1 ? 'junior' : this.experience > 1 && this.experience <= 3 ? 'middle' : this.experience > 3 ? 'senior' : gradeValue;
  }

  get info() {
    return {
      fullName: `${this.name} ${this.surname}`,
      experience: this.experience,
      specialty: `${this.setSpecialty()} ${this.specialty}`,
      salary: this.setSalary()
    }  
  }
} 
