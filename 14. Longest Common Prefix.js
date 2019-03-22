// 14. Longest Common Prefix
// Easy

// 1142

// 1163

// Favorite

// Share
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

// var longestCommonPrefix = function(strs) {
//     let word = ''
//     let isAllMatched = true 
//     strs[0].split('').map(alphabet =>{
//         for (let i = 0; i < strs.length; i++) {
//             let ch
//             if(word == '') {
//                 ch = new RegExp(alphabet,'g')
//                 if(!ch.test(strs[i])) isAllMatched = false
//             }
//             else{
//                 ch = new RegExp(word,'g')
//                 if(!ch.test(strs[i])) isAllMatched = false
//             }
//         }
//         if(isAllMatched) word += alphabet 
//     })
//     return word
// };

// var longestCommonPrefix = function(strs) {
//     if(strs.length == 0) return ''
//     let word = ''
//     let isAllMatched = true 
//     strs[0].split('').map(alphabet =>{
//         let ch
//         strs.map(str=>{
//             if(word == '') {
//                 if(!new RegExp(alphabet,'g').test(str)) isAllMatched = false
//             }
//             else{
//                 if(!new RegExp(word,'g').test(str)) isAllMatched = false
//                 // console.log(ch,str,!ch.test(str)) 
//             }
//         })
//         // console.log(isAllMatched)
//         if(isAllMatched) word += alphabet 
//     })
//     return word
// };

// console.log(longestCommonPrefix(["task","skin","theskill"]))
// console.log(longestCommonPrefix(["war","warcraft","thewarwarii"]))
// console.log(longestCommonPrefix(["flower","flow","flight"]))


var lengthOfLastWord = function(s) {
    if(s == '') return 0
    if(s) {
        s= s.trim()
        s = s.split(' ')
    }
    console.log(s)
    return s[s.length - 1].split('').length
};

console.log(lengthOfLastWord("Hello World  "))

console.log(lengthOfLastWord("a "))
