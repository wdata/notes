"use strict";
class Animal1 {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `my name is ${this.name}`;
    }
}
class Cat extends Animal1 {
    constructor(name) {
        super(name);
        console.log(this.name);
    }
    sayHi() {
        return `meow, ${super.sayHi()}`;
    }
}
let cat = new Cat('wahaha');
console.log(cat.sayHi());
class Animal2 {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return 'Jack';
    }
    set name(value) {
        console.log('setter：' + value);
    }
}
let anim = new Animal2('wahaha');
anim.name = 'Tom';
console.log(anim.name);
class Animla3 {
    static isAnimal(a) {
        return a instanceof Animla3;
    }
}
let aniam3 = new Animla3();
console.log(Animla3.isAnimal(aniam3));
