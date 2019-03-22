// let runPromise = (someone, timer, success = true) => {
//     console.log(`${someone} 開始`);
//     return new Promise((resolve, reject) => {
//     // 傳入 resolve 與 reject，表示資料成功與失敗
//     if (success) {
//         setTimeout(function () {
//         // 3 秒時間後，透過 resolve 來表示完成
//         let man = `${someone} take ${timer / 1000} 秒時間(fulfilled)`
//         resolve(man);
//         }, timer);
//     } else {
//         // 回傳失敗
//         reject(`${someone} 失敗(rejected)`)
//     }
//     });
// }


// const asyncRun = async () => {
//     let mingRun = await runPromise('小明', 2000);
//     let auntieRun = await runPromise('howhow', 2500);
//     return `${mingRun}, ${auntieRun}`
// }

// asyncRun().then(string => {
//     console.log(string)
//     }).catch(response => {
//     console.log(string)
// })

//---------------------------------------------

// 如此寫才能這常運作，一定要return promise
// function hello(num){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(num)
//         },3000)
//     })
// }

// let callFunc = async()=>{
//     try{
//         console.log(await hello(1))
//         console.log(await hello(2))
//         console.log(3)
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// callFunc().then(()=>{
//     console.log('結束')
// })

// -----------------------------------------

class Sleep {
    constructor(timeout) {
        this.timeout = timeout;
    }
    then(resolve, reject) {
        const startTime = Date.now();
        setTimeout(
            
            () => resolve(Date.now() - startTime),
            this.timeout
        );
    }
}
    
(async () => {
    console.log(Date.now())
    const actualTime1 = await new Sleep(1000);
    console.log(actualTime1);
    const actualTime2 = await new Sleep(1000);
    console.log(actualTime2);
    const actualTime3 = await new Sleep(1000);
    const actualTime4 = await new Sleep(1000);
    console.log(actualTime3,actualTime4);
    const actualTime5 = await new Sleep(1000);
    console.log(actualTime5);
    
})();