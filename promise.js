// in this code. I'll leaarn about promises. We're hoping to learn this early. Async, await

// Classes in Javascript

class Rectangle{
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    area() {
        const area = this.width * this.height;
        return area;
    }
    
    paint() {
        console.log(`Color is ${this.color}`);
    }
}                                                                                                                                    

let rect = new Rectangle(2,3, "red");
let area1 = rect.area();
console.log(area1)

// Map

const map = new Map();
map.set('name', 'alice');
map.set ('age', 30);

console.log(map.get('name'))
