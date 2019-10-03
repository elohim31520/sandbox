
let p = new Promise((rs ,rj)=>{
    setTimeout(()=>{
        rs(1500)
    },1500)
    rs(1000)
})

// p.then((data)=>{
//     console.log(1)
//     console.log(data)
// })
// 第一次實作promise ---------------------------------------------------------
class Promi{
    constructor(executor){
        this.failCallback = undefined
        this.successCallback = undefined
        this.$$status = 'pending'
        executor(this.resolve.bind(this),this.reject.bind(this))
    }
    resolve(params){
        // console.log(this)
        console.log('reslove')
        if(this.$$status === 'pending'){
            this.$$status = 'fullfill'
            this.successCallback(params)
        }
    }
    reject(params){
        if(this.$$status === 'pending'){
            this.$$status = 'fail'
            this.failCallback = params
        }
    }
    then (onFullfill ,onFail){
        this.successCallback = onFullfill
        this.fail = onFail
    }
}

// 第二次實現--------------------------------------
function isFunction(fn){
    return typeof fn === 'function'
}

class iPromise{
    constructor(executor){
        if(!isFunction(executor)){
            throw new TypeError('Expected the executor to be a function.')
        }
        try{
            this._status = 'pending'
            this._nextValue = undefined
            this._error = undefined
            this._callbackQueue = []
            executor(this._onFulfilled.bind(this) ,this._onRejected.bind(this))
        } 
        catch (err) {
            this._onRejected(err)
        }
    }
    _onFulfilled(value){
        if(this._status === 'pending'){
            this._status = 'fullfilled'
            this._nextValue = value
            this._error = undefined
        }
    }
    _onRejected(reason){
        if(this._status === 'pending'){
            this._status = 'rejected'
            this._nextValue = undefined
            this._error = reason
        }
    }
    then(onFullfill ,onRejected){
        return new Promise((rs ,rj) =>{
            if(this._status === 'fullfilled'){
                if(onFullfill){
                    const _value = onFullfill
                    ? onFullfill(this._nextValue)
                    : this._nextValue
                    rs(_value)
                }
            }
            if(this._status === 'rejected'){
                if(onRejected){
                    rs(onRejected(this._error))
                }
                else{
                    rj(this._error)
                }
            }
        })
    }
    catch(onRejected){
        return this.then(null ,onRejected)
    }
    finally(){

    }
}

// 測試2
console.log('測試2:')
setTimeout(() => {
    new iPromise((resolve) => {
        console.log('resolved:')
        resolve(1)
    })
    .then((value) => {
        console.log(value)
        return 3
    })
    .then((value) => {
        console.log(value)
    })
})