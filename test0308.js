for (let i = 11; i < 100; i++) {
    let num = i*i
    let arr = (num + '').split('')
    if(arr.length == 4){
        for (let j = 0; j < 4; j++) {
            if(arr[0] == arr [1] && arr[2] == arr [3]) console.log(arr.join(''))             
        }
    }
}



