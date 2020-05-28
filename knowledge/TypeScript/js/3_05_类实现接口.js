"use strict";
class Door {
}
class SecurityDoor extends Door {
    alert() {
        throw new Error('Method not implemented.');
    }
    alert1() {
        console.log('SecurityDoor alert');
    }
}
class Car {
    alert() {
        throw new Error('Method not implemented.');
    }
    alert1() {
        console.log('Car alert');
    }
}
let a3051 = new SecurityDoor();
console.log(a3051.alert1());
let a3052 = new Car();
console.log(a3052.alert1());
class Car1 {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car lightOn');
    }
    lightOff() {
        console.log('Car lightOff');
    }
}
let a3053 = new Car1();
console.log(a3053.lightOn());
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
let point3d = { x: 1, y: 2, z: 3 };
