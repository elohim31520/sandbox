function isValid(str){
    let open = ['{','[','(']
    let close = ['}',']',')']
    let arr =[]
    str = str.split('')
    for (let i = 0; i < str.length; i++) {
        if(close.indexOf(str[i]) > -1){
            console.log(open[close.indexOf(str[i])])
            if(open[close.indexOf(str[i])] != arr.pop() || arr.length == 0) return false
            console.log(arr)
        }
        else arr.push(str[i])
    }
    return (arr.length == 0)
}

console.log(isValid('(())'))