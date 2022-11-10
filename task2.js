function createPerson(name, skills) {
  return {
    name,
    skills,
    setName(meaning){
      this.name = meaning;
      return this;
    },
    addSkill(meaning) {
      this.skills.push(meaning);
      this.skills = Array.from(new Set(this.skills))
      return this;
    },
    removeSkill(meaning) {
      this.skills.filter((item, index) => {
        if (item === meaning) { 
          this.skills.splice(index, 1)
        }
      });
      return this;
    }
  }
}

