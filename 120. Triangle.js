// Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

// For example, given the following triangle

// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

// Note:

// Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

// Accepted

let min = 0
let total = 0

function paddingLeft(str,length){
    if(str.length >= length) {
      // str = str.split('')
      // for (let i = 0; i < length; i++) {
      //   if(str[i] - 0 > i) {
      //     str[i - 1] += 1
      //     str[i] -=1
      //   }
      // }
      return str;
    }
    else return paddingLeft("0" +str,length);
}



var miniTotal = function(triangle) {
    for (let k = 0; k < triangle.length; k++) {
      min += triangle[k][0]
    }
    
    let combination = 1
    // let arr =[]
    // arr.length = triangle.length
    // for (let i = 0; i < triangle.length; i++) {
    //     arr[i] = 0
    // }
    //排列組合
    for (let o = 1; o < triangle.length + 1; o++) {
      combination *= o
    }
    for (let i = 1; i <= combination; i++) {
      // console.log(i)
      total = 0
      // 0000 0001 0002 ...
      let x
      x = i.toString(triangle.length)
      x = paddingLeft(x,triangle.length)
      console.log(x)
      // triangle[0][x[0]] + triangle[1][x[1]] + triangle[2][x[2]] + triangle[3][x[3]]
      for (let j = 0; j < triangle.length; j++) {
        total += triangle[j][x[j]]
      }
      // console.log(total)
      if(total < min) min = total
    };
    return min
}

var minimumTotal = function(triangle) {
  for (let i = 0; i < triangle.length; i++) {
    if(triangle[i].length > 1){
      triangle[i] = triangle[i].sort((a,b)=> a - b)
    }
    total += triangle[i][0]
  }
  return total
}

// console.log('min : ',miniTotal([
//          [2],
//         [3,4],
//        [6,5,7],
//       [4,1,8,3]
//     ]))

console.log('min : ',minimumTotal([[-10]]))