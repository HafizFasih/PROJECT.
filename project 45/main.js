"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, model, ...extras) {
    const car = { manufacturer, model };
    extras.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
const myCar = createCar('Toyota', 'Camry', ['color', 'red'], ['year', 2022]);
console.log(myCar);
