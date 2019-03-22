let arr = [{},'1',3,'somesting',[1,2],'1',1,{},[1,2],'somesting',3]

// let newArr = [...new Set(arr)]

// console.log(newArr)

let s = new Set(arr)

// s.delete('somesting')
// s.add('adding')
// console.log(s)

console.log(s.entries())
