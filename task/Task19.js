class Car {
    constructor (fuel, consumption) {
        this.fuel = fuel
        this.consumption = consumption
        console.log('Машина создана. Бак заправлен на ' + this.fuel + '\nВаш расход ' + this.consumption + '% на 100км' )
    }
    reFuel (q) {
        let diff = (this.fuel + q) - 100
        console.log(diff)
        this.fuel = (this.fuel + q) <= 100 ? (this.fuel + q) : 100
        console.log(this.fuel)
        return (this.fuel + q) > 100 ? diff : 0
    }
    go (distance){
        let consumedFuel = (this.consumption / 100) * distance
        this.fuel -= consumedFuel
        if (this.fuel === 20){
            console.log('У вас мало топлива')
        }
        else if (this.fuel <= 0){
            this.fuel = 0
            console.log('Машина не может ехать')
        }
        else {
            console.log(`Вы проехали ${distance}км. Ваше оставшееся топливо: ${this.fuel}`)
        }

    }
    get remainFuel(){
        return this.fuel
    }
}

let renoLogan = new Car(70,13)
renoLogan.go(100)
console.log(renoLogan.remainFuel)
