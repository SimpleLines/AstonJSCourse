class Staff {
#wage;
#specialty;
#workDays;
#experience;

    constructor(name = 'Unknown Name', surname = 'Unknown Surname', wage = 850, specialty = 'worker', workDays = 30, experience = 0){
        this.name = name;
        this.surname = surname;
        this.wage = +wage;
        this.specialty = specialty;
        this.workDays = +workDays;
        this.experience = +experience;
    }
    errorString(param){
        if (typeof param !== 'string' || typeof param === 'boolean' || !param instanceof String || param == '' ) {
            throw Error(`Argument ${param} is not string type.`);
        }
    }
    errorNumber(param){
        if (typeof param !== 'number' || typeof param === 'boolean' || !param instanceof Number) {
            throw Error(`Argument ${param} is not number type.`);
        }
        if (param < 0) {
            throw Error(`Argument ${param} less than 0`);
        }
    }
    get name(){
        return this._name;
    }
    set name(value){
        this.errorString(value);
        this._name = value;
    }

    get surname(){
        return this._surname;
    }
    set surname(value){
        this.errorString(value);
        this._surname = value;
    }

    get wage(){
        return this.#wage;
    }
    set wage(value){
        this.errorNumber(value);
        this.#wage = value;
    }

    get specialty(){
        return this.#specialty;
    }
    set specialty(value){
        this.errorString(value);
        this.#specialty = value;
    }

    get workDays(){
        return this.#workDays;

    }
    set workDays(value){
        this.errorNumber(value)
        this.#workDays = value;
    }

    get experience(){
        return this.#experience;
    }
    set experience(value){
        this.errorNumber(value);
        this.#experience = value;
    }
    
    get info(){
        return {
            fullName: `${this.name} ${this.surname}`,
            experience: this.#experience,
            specialty: this.#specialty,
            salary: this.#wage * this.#workDays
        }
    }

}


class Developer extends Staff{
    constructor(){
        super('Unknown Name', 'Unknown Surname', 1200, 'Developer', 30, 0)
    }
    countSalary(){
       let k; 
       k = this.experience <= 0.5 ? (k = 0.05) : this.experience <= 1 ? (k = 0.1) : this.experience <= 3 ? ( k = 0.2) : 0.4;
       let result = this.wage * this.workDays + (this.wage * this.workDays * k);
       return  result;
    }
    addSpeciality(){
        let gradeValue = this.experience <= 0.5 ? 'trainee' : this.experience <= 1 ? 'junior' : this.experience <= 3 ? 'middle' : 'senior';
        return (this._speciality = `${gradeValue} ${this.specialty}`);
    }
    get info(){
        return {
            fullName: `${this.name} ${this.surname}`,
            experience: +this.experience,
            specialty: this.addSpeciality(),
            salary: this.countSalary()
        }
    }
}
