//let arr = [40, 34, 6, 789, 21, 12, 1]
//let arr01 = arr.sort( (a,b) => a - b);  // >0 | <0 | 0
//let arr02 = arr.sort((a, b) => b - a);

var members = [
    {id : 200 , name: 'zopeye'},
    {id : 100 , name: 'tolive'},
    {id : 70 , name: 'gelbert'},
]

let result = members.sort((a, b) => {
    if (a.name > b.name) {
        return -1
    } else {
        return 1
    }
 })

console.log(result)







//1
//-1 
// 0
//a - b  // >0
//a - b // <0
//a == b // 0



//console.log(arr01)