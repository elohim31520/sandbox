// In a deck of cards, each card has an integer written on it.

// Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

// Each group has exactly X cards.
// All the cards in each group have the same integer.
 

// Example 1:

// Input: [1,2,3,4,4,3,2,1]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[3,3],[4,4]
// Example 2:

// Input: [1,1,1,2,2,2,3,3]
// Output: false
// Explanation: No possible partition.
// Example 3:

// Input: [1]
// Output: false
// Explanation: No possible partition.
// Example 4:

// Input: [1,1]
// Output: true
// Explanation: Possible partition [1,1]
// Example 5:

// Input: [1,1,2,2,2,2]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[2,2]

// var hasGroupsSizeX = function(deck) {
//     deck = deck.sort((a,b)=> a-b)
//     // console.log(deck)
//     let arr =[]
//     if(deck.length % 2 !=0) return false
//     for(let i = 0 ; i< (deck.length / 2); i++){
//         if(deck[2*i] != deck[2*i+1]){
//             arr.push(deck[2*i],deck[2*i +1])
//         }
//     }
//     return arr.length == 0
// };

// console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1]))

// var hasGroupsSizeX = function(deck) {
//     let KeyVal = {};
    
//     for (let index = 0; index < deck.length; index++) {
//         let element = deck[index];
//         if(KeyVal[element])
//         {
//             KeyVal[element]++;
//         }else
//         {
//             KeyVal[element] = 1;
//         }
        
//     }

//     KeyVal.forEach(element => {
        
//     });

// }
var hasGroupsSizeX = function(deck) {
    if(deck.length<2) return false
    let obj= {}
    deck.map(el=>{
        if(obj[el]) obj[el]+=1
        else obj[el] = 1
    })
    let arr = Object.values(obj)
    arr = arr.sort()
    let flag = true
    arr.map(el => {
        if(el % arr[0] != 0) flag = false  
    });
    return flag
}
console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3,3]))
// console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1,3,3]))
// console.log(hasGroupsSizeX([0,0,0,1,1,1,2,2,2]))