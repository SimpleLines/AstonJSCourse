function createPerson(name, skills) {
  return {
    name,
    skills: [],
    addSkill(skill) {
      const arr = this.skills;
      if (!arr.includes(skill)) {
        arr.push(skill);
      }
      return this;
    },
    removeSkill(skill) {
      if (skill) {
        const i = this.skills.indexOf(skill);
        this.skills.splice(i, 1);
      } else {
        this.skills.pop();
      }
      return this;
    },
    setName(name) {
      this.name = name;
      return this;
    },
  };
}

1;
