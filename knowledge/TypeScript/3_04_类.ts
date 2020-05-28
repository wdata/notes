// class属性和方法
class Animal1 {
  name: string
  constructor(name: string) {
    this.name = name
  }
  sayHi() {
    return `my name is ${this.name}`
  }
}

// 类的继承
class Cat extends Animal1 {
  constructor(name: string) {
    super(name)
    console.log(this.name)
  }

  sayHi() {
    return `meow, ${super.sayHi()}`
  }
}

let cat = new Cat('wahaha')
console.log(cat.sayHi())

// 寄存器
class Animal2 {
  constructor(name: string) {
    this.name = name
  }

  get name() {
    return 'Jack'
  }

  set name(value: string) {
    console.log('setter：' + value)
  }
}

let anim = new Animal2('wahaha')
anim.name = 'Tom'
console.log(anim.name)

// 静态方法
class Animla3 {
  static isAnimal(a: any) {
    return a instanceof Animla3
  }
}

let aniam3 = new Animla3()
console.log(Animla3.isAnimal(aniam3))
