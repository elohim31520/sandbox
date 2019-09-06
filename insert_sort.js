// 插入排序
function insertSort (array){
    for(let i = 0; i < array.length; i++){
        let target = i
        for(let j= i-1 ; j>=0 ; j--){
            if(array[target] > array[j]) break
            else {
                [array[target], array[j]] = [array[j] , array[target]]
                target = j
            }
        }
    }
    return array
}

console.log(insertSort([4,9,8,66,3,87]))