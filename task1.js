class Staff {
  #wage;
  #specialty;
  #workDays;
  #experience;
  constructor(name = "Unknown Name", surname = "Unknown Surname") {
    this.name = name;
    this.surname = surname;
    this.#wage = 850;
    this.#specialty = "worker";
    this.#workDays = 30;
    this.#experience = 0;
  }
  get firstName() {
    return this.name;
  }
  set firstName(data) {
    if (typeof data === "string") {
      this.name = data;
    } else {
      console.log("incorrect data type");
    }
  }
  get secondName() {
    return this.surname;
  }
  set secondName(data) {
    if (typeof data === "string") {
      this.surname = data;
    } else {
      console.log("incorrect data type");
    }
  }
  get privateValue() {
    return `${this.#wage} ${this.#specialty} ${this.#workDays} ${
      this.#experience
    }`;
  }
  set privateValue([wage, specialty, workDays, experience]) {
    if (typeof wage === "number"&& typeof specialty ==="string" && typeof workDays ==="number"&& typeof experience ==="number"){
    this.#wage = wage;
    this.#specialty = specialty;
    this.#workDays = workDays;
    this.#experience = experience; 
    }
    else {console.log("incorrect data type");}
 
  }
  salary() {
    return this.#wage * this.#workDays;
  }

  get info() {
    return {
      fullName: `${this.firstName} ${this.secondName}`,
      experience: this.#experience,
      specialty: this.#specialty,
      salary: this.salary(),
    };
  }
}
const newStaff = new Staff();
newStaff.privateValue = [1, 1, 1, 1];
console.log(newStaff);
class Developer extends Staff {
  #workDays;
  #experience;
  #specialtyValue;
  #wage;
  constructor(name, surname, experience) {
    super(name, surname, experience);
    this.#specialtyValue = "developer";
    this.#wage = 1200;
    this.#workDays = 30;
    this.#experience = 0;
  }
  get gradeValue() {
    if (this.#experience == 0 || this.#experience <= 0.5) {
      return "trainee";
    } else if (this.#experience > 0.5 || this.#experience <= 1) {
      return "junior";
    } else if (this.#experience > 1 || this.#experience <= 3) {
      return "middle";
    } else if (this.#experience > 3) {
      return "senior";
    }
  }
  salary(k) {
    if (this.#experience == 0 || this.#experience <= 0.5) {
      k = 0.05;
    } else if (this.#experience > 0.5 || this.#experience <= 1) {
      k = 0.1;
    } else if (this.#experience > 1 || this.#experience <= 3) {
      k = 0.2;
    } else if (this.#experience > 3) {
      k = 0.4;
    }
    return this.#wage * this.#workDays + this.#wage * this.#workDays * k;
  }
}
const newDev = new Developer();
console.log(newDev.info);
console.log(newDev);
