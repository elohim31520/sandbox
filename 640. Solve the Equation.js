// Solve a given equation and return the value of x in the form of string "x=#value". The equation contains only '+', '-' operation, the variable x and its coefficient.

// If there is no solution for the equation, return "No solution".

// If there are infinite solutions for the equation, return "Infinite solutions".

// If there is exactly one solution for the equation, we ensure that the value of x is an integer.

// Example 1:
// Input: "x+5-3+x=6+x-2"
// Output: "x=2"
// Example 2:
// Input: "x=x"
// Output: "Infinite solutions"
// Example 3:
// Input: "2x=x"
// Output: "x=0"
// Example 4:
// Input: "2x+3x-6x=x+2"
// Output: "x=-1"
// Example 5:
// Input: "x=x+2"
// Output: "No solution"

















// bad solution
// var solveEquation = function(equation) {
//     let arr = equation.split('=')
//     let leftX = 0
//     let leftNum = 0
//     let rightX = 0
//     let rightNum = 0
//     // 左邊運算式處理
//     arr[0].split('').forEach((el,i) =>{
//         // 指判數字
//         if (el !== 'x' && el !== '+' && el !== '-'){
//             // 數字後是X
//             if(arr[0][i + 1] == 'x'){
//                 // 數字前是否為 + or -
                
//                 if(arr[0][i - 1] == '+' || arr[0][i - 1] == undefined) leftX += el - 0
//                 if(arr[0][i - 1] == '-' ) leftX -= el - 0
//             }
//             // 數字後不是X，所以數字+-
//             else{
//                 //數字前是否為 + or -
//                 if ( (arr[0][i - 1] === '+' || arr[0][i - 1] === undefined)) leftNum += el - 0
//                 if ( arr[0][i - 1] === '-') leftNum -= el - 0
//             }
//         }
//         if(el === 'x' &&  arr[0][i - 1] == '+' || arr[0][i - 1] == '-' || arr[0][i - 1] == undefined) {
//             if( arr[0][i - 1] == '-') leftX -=1
//             else leftX +=1
//         }
//     });
//     console.log(leftX,leftNum)
    // 右邊運算式處理

    // return Math.floor(rightNum - leftNum / (leftX - rightX))
// };

// console.log(solveEquation("x+5-3+x=6+x-2"))
console.log(solveEquation("x+2x+3x-6x=x+2"))