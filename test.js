function Member(id, name , age = 100) {
    this.id = id;
    this.name = name;
    this.age = age;
}

Member.prototype.toHTML = function (a, b) {
    return `<div>${this.id} - ${this.name}</div>`
}

Member.prototype.toString = function () {
    return `Member: ${this.id} - ${this.name}`
}

Member.prototype.school = "JB"

var x1 = new Member(600 , 'loki' )
var x2 = new Member(700 , 'thor' )


console.log('OK')


// var m1 = new Member(1000 , 'uuu' )
// var m2 = new Member(1010 , 'vvv' )
// var m3 = new Member(1100 , 'ooo' )

// console.dir(m1.toString())
// console.dir(m2.toString())
// console.dir(m3.toString())