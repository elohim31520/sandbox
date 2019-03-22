
class plane{
    constructor(args){
        args = Object.assign({
            spped: 1000,
            wing: 80,
            name: 'boreing'
        },args)
        this.speed = args.speed 
        this.wing = args.wing 
        this.name = args.name 
    }
    static call(){
        console.log('call Tower')
    }
    landding(){
        plane.call()
        console.log(this.name+'start to landding')
    }
}

class jet extends plane{
    // constructor(){
        
    // }
    supersonic(){
        console.log('Maxspeed: ',this.speed*3)
        return this.speed * 3
    }
}

class airliner extends plane{
    
}

class cargoAircraft extends plane{
    constructor(){
        super()
        this.FlightDistance = 20000
    }
}

let F16 = new jet({
    speed: 2000,
    wing : 20,
    name: 'F16'
})

let A350 = new plane({
    speed: 1200,
    wing : 70,
    name: 'A350'
})

let Fedex = new cargoAircraft({

})

// F16.supersonic()
// F16.landding()
// A350.landding()
// console.log(F16)
// console.log(Fedex.FlightDistance)
// console.log(F16.__proto__)
// console.log(jet.prototype)
// console.log(jet.__proto__)
// console.log(plane.prototype)
// console.log(plane.__proto__)
// console.log(Fedex.__proto__)
console.log(F16.__proto__ === jet.prototype) //true