const CreatePerson = function (name, skills) {
  this.name = name;
  this.skills = skills;
};

CreatePerson.prototype.addSkill = function (skill) {
  const arr = this.skills;
  if (!arr.includes(skill)) {
    arr.push(skill);
  }
};

CreatePerson.prototype.removeSkill = function (skill) {
  if (skill) {
    const i = this.skills.indexOf(skill);
    this.skills.splice(i, 1);
  } else {
    this.skills.pop();
  }
};

CreatePerson.prototype.setName = function (name) {
  this.name = name;
};
