/**
 * Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
 */
function generateMatrix (n){
    let arr = Array.from({length: n}).map(() => new Array(n))
    let loop = n >> 1 ,i = 0, count = 1 ,startX = startY = 0 
    while(++i <= loop) {
        let row = startX , column = startY

        while(column < n - i){
            arr[row][column++] = count++
        }
        while(row < n - i){
            arr[row++][column] = count++
        }
        while(column > startY){
            arr[row][column--] = count++
        }
        while(row > startX){
            arr[row--][column] = count++
        }
        startX = ++startY
    }
    if(n % 2){
        arr[startX][startY] = count
    }
    return arr
}
console.log(generateMatrix(3));