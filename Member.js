function Member(id, name , age = 100) {
    this.id = id;
    this.name = name;
    this.age = age;
}

Member.prototype.school = "JB"

Member.prototype.toHTML = function (a, b) {
    return `<div>${this.id} - ${this.name}</div>`
}

var m = new Member()








// state 







