function createPerson(name,skills) {
    return {
    name,
    skills,
    addSkill(param) {
        this.skills.push(param);
        this.skills = [...new Set(this.skills)];
        return this;
    },
    removeSkill(param){
        this.skills.splice(this.skills.indexOf(param), 1);
        return this;
    },
    setName(param){
        this.name = param;
        return this;
    }
    
    };
}
