function CreatePerson(name, skills = []) {
	this.name = name;
	this.skills = skills;
}

CreatePerson.prototype.addSkill = function (skill) {
	this.skills.push(skill);
	const uniqueSkills = new Set([...this.skills]);
	this.skills = [...uniqueSkills];
	return this;
};
CreatePerson.prototype.removeSkill = function (skill) {
	const newSkills = this.skills.filter(item => item !== skill);
	this.skills = newSkills;
	return this;
};
CreatePerson.prototype.setName = function (name) {
	this.name = name;
	return this;
};

