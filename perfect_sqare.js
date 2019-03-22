// Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

// Example 1:

// Input: n = 12
// Output: 3 
// Explanation: 12 = 4 + 4 + 4.
// Example 2:

// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.


let numSquares = function(n) {
    let root_sqr = 1
    let arr = []
    for(let i = 1; i<n+1; i++){
        
        if(i == root_sqr * root_sqr){
            arr[i] = 1
            root_sqr ++
        }
        else{
            for(let j = root_sqr;Math.sqrt(i-j*j)>0;j-- ){
                console.log('j :' ,j,'i :',i)
                let rest = Math.sqrt(n - i*i)
                
            }
        }
        
    }
    console.log(arr)
    return arr[n]
}


console.log(numSquares(3))