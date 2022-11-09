'use strict';

const CreatePerson = function (name, skills) {
  this.name = name;
  this.skills = skills;

  // Never put a method here because this makes every object carry this function. Instead we're gonna add this method to the prototype
  // this.description = function() {
  //   console.log(`${name} `);
  // }
};

const harry = new CreatePerson('Harry Potter', [
  'farting',
  'wizardry',
  'kindness',
]);

// 1 New {} is created
// 2 function is called and its this is set to {}
// 3 {} is linked to prototype
// 4 function automatically returns {}

// Prototypes
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
