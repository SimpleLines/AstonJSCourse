function createPerson(name, skills) {
  let obj = {
    name,
    skills,
    setName(param) {
      this.name = param;
      return this;
    },
    addSkills(param) {
      this.skills.push(param);
      this.skills = [...new Set(this.skills)];
      return this;
    },
    removeSkill(param) {
      let index = this.skills.indexOf(param);
      skills.splice(index, 1);
      return this;
    },
  };
  return obj;
}
