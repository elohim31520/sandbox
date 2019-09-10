

/**
 * 學習vue observer
 */

class Observer{
    constructor(data){
        this.data = data
        this.traverse(data)
    }
    traverse(obj){
        /*
            此函數用於深層次遍歷對象的各個屬性
            採用的是遞歸的思路
            因為我們要為對象的每一個屬性綁定getter和setter 
         */
        let val
        for(let key in obj){
            //這里為什麼要用hasOwnProperty進行過濾呢？
            //因為for...in循環會把  對象原型鏈  上的所有可枚舉屬性都循環出來
            //而我們想要的僅僅是這個對象本身擁有的屬性，所以要這麼做。
            if(obj.hasOwnProperty(key)){
                val = obj[key]
                if(typeof val  === 'object'){
                    new Observer(val)
                }
                this.setSetterAndGetter(key ,val)
            }
        }
    }
    setSetterAndGetter(key ,val){
        Object.defineProperty(this.data ,key ,{
            configurable: true,
            enumerable: true,
            get(){
                console.log("YOU GET :" + key)
                return val
            },
            set(newVal){
                console.log("YOU SET :" + key + " : "  + newVal)
                if(newVal === val) return 
                val = newVal
            },
        })
    }
}

let data = {
    user:{
        name: 'Lewis',
        nickName: 'GGman',
        major:{
            main: 'front end',
            sub: 'Machine Learing'
        }
    },
}
let app = new Observer(data)
console.log(app.data.user.name)
console.log(app.data.user.major.sub = 'AI')

// 重新設置的屬性就沒有setter與getter
console.log(app.data.user = {job: '前端'})
// 應該沒有回調
console.log(app.data.user)
console.log('--------------------')
console.log(app.data.user2 = {name: 'Miller'})