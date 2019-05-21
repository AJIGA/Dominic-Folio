function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');

    }
}

const circleA = new Circle(10);

for (let key in circleA) {
    if (typeof circleA[key] !=='function')
    console.log(key, circleA[key]);
}

const keys = Object.keys(circleA);
console.log(keys);

if ('radius' in circleA)
console.log("Circle has a radius.")
