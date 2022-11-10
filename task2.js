function createPerson(name, skills) {
  return {
    name,
    skills,
    addSkill(value) {
      this.skills.push(value);
      this.skills = [...new Set(this.skills)];
      return this;
    },
    removeSkill(value) {
      this.skills.filter((item, i) => {
        if (item === value) this.skills.splice(i, 1);
      });
      return this;
    },
    setName(value) {
      this.name = value;
      return this;
    },
  };
}
