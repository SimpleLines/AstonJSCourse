function createPerson(name, skills) {
  return {
    name,
    skills,
    setName(newName) {
      this.name = newName;
      return this;
    },
    addSkill(skill) {
      this.skills.push(skill);
      this.skills = Array.from(new Set(this.skills));
      return this;
    },
    removeSkill(skill) {
      this.skills.findIndex((item, index) => {
        if (item == skill) {
          this.skills.splice(index, 1);
        }
      });
      return this;
    },
  };
}

