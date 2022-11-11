function createPerson(name, skills) {
  if (typeof name !== 'string') {
    throw new Error(
      `Значение аргумента 'name' не может иметь тип '${typeof name}'. Значение аргумента должно иметь тип 'string'.`
    );
  }

  if (createPerson.length > 1 && !Array.isArray(skills) && skills !== undefined) {
    throw new Error(
      `Значение аргумента 'skills' не может иметь тип '${typeof skills}'. Второй аргумент должен быть массивом строк`
    );
  }

  if (createPerson.length === 2 && Array.isArray(skills)) {
    let isArrayOfStrings = skills.every((element) => {
      return typeof element === 'string';
    });

    if (!isArrayOfStrings) {
      throw new Error('Некорретный аргумент skills. Второй аргумент должен быть массивом строк');
    }
  }

  let person = {
    name: name,
    skills: skills,

    addSkill(skill) {
      if (!this.skills) {
        this.skills = [skill];
      }
      if (!this.skills.includes(skill)) {
        this.skills.push(skill);
      }
      return this;
    },

    removeSkill(skill) {
      let index = this.skills.indexOf(skill);
      if (index !== -1) {
        this.skills.splice(index, 1);
      }
      return this;
    },

    setName(name) {
      if (typeof name === 'string') {
        this.name = name;
      }
      return this;
    },
  };

  if (createPerson.length < 2) {
    person.skills = [];
  }

  return person;
}
