class Staff {
  #wage; 
  #specialty;
  #workDays;
  #experience;
  constructor(name = 'Unknown Name',
    surname = 'Unknown Surname',
    wage = 850,
    specialty = 'worker',
    workDays = 30,
    experience = 0) {
    this.name = name;
    this.surname = surname;
    this.#wage = wage; 
    this.#specialty = specialty;
    this.#workDays = workDays; 
    this.#experience = experience; 
  } 
  get name() {
    return this._name;
  }
  set name(value) {
    this.strError(value);
    this._name = value;
  }  
  get surname() {
    return this._surname
  }
  set surname(value) {
    this.strError(value);
    this._surname = value;
  }  
  get wage() {
    return this.#wage;
  }
  set wage(value) {
    this.numError(value);
    this.#wage = value;
  }
  get specialty() {
    return this.#specialty;
  }
  set specialty(value) {
    this.strError(value);
    this.#specialty = value;
  }
  get workDays() {
    return this.#workDays;
  }
  set workDays(value) {
    this.numError(value);
    this.#workDays = value;
  }
  get experience() {
    return this.#experience;
  }
  set experience(value) {
    this.numError(value);
    this.#experience = value;
  }
  strError(value) {
    if (typeof value !== 'string' || value =='') 
      throw TypeError(`Неккоректное значение ${value}, должна быть строкой`);
  }
  numError(value) {
    if (typeof value !== 'number' || +value < 0) 
      throw TypeError(`Неккоректное значение ${value}, должно быть числом`);
  }
  get info() {
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
  get info() {
    const exp = super.experience;
    let k = 0.05;
    let gradeValue = 'trainee';
    exp > 3 ? (k = 0.4) : exp > 1 ? (k = 0.2) : exp > 0.5 ? (k = 0.1) : k;
    exp > 3 ? (gradeValue = 'senior'): exp > 1? (gradeValue = 'middle'): exp > 0.5? (gradeValue = 'junior'): gradeValue;
    return {
      fullName: super.info.fullName,
      experience: super.info.experience,
      specialty: `${gradeValue} ${super.info.specialty}`,
      salary: super.info.salary + super.info.salary * k,
    };
  }
} 
