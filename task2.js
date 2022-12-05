function createPerson(name, skills) {
  let newSkills = Array.from(new Set(skills));
  let person = {
    name,
    skills: newSkills,
    setName,
    addSkill,
    removeSkill,
  }
  function setName(anotherName) {
    person.name = anotherName;
    return this;
  } 
  function addSkill(skill) {
    let addSkillArray = newSkills;
    addSkillArray = !addSkillArray.includes(skill) ? addSkillArray.push(skill) : addSkillArray;
    return this;
  }
  function removeSkill(skill) {
    let removeSkillArray = newSkills;
    let index = removeSkillArray.indexOf(skill);
    removeSkillArray =  removeSkillArray.includes(skill) ? removeSkillArray.splice(index, 1) : removeSkillArray;   
    return this;
  } 
	return person;
} 
