function transport(speed, model)
{
    this.speed = speed
    this.model = model
}

function car(speed, model, price)
{
    transport.call(this, speed, model)
    this.price = price
}

let myCar = new car(150, "BMW M5", 350000);
console.log(myCar)

let myCar2 = new car(120, "Lotus", 250000);
console.log(myCar2)
