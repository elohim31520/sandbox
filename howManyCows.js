// js算法練習：一頭牛能活6歲,在第三年和第五年會產一頭牛,在第六年自然死去,要求實現輸入年份n,計算出n年後有多少頭牛

let year = 11
let array = [1,0,0,0,0,0]
let current = 0


function howManyCows(arr ,current){
    current += 1
    let newArr = []
    if(current == year) return [arr, current]
    arr.forEach((el,i) => {
        if(i == 0) newArr[0] = 0
        else{
            newArr[i] = arr[i -1]
        }
    });
    newArr[0] = arr[2] + arr[4] //3、5年產一頭牛，多少隻就產多少牛
    newArr[5] = 0
    console.log(current ,newArr)
    return howManyCows(newArr ,current)
}

let finalArr = howManyCows(array ,current)
let allNums = finalArr[0].reduce( (a,b) => a+b )
console.log("current: " ,finalArr[1])
console.log('第'+finalArr[1]+'年'+allNums+'隻')