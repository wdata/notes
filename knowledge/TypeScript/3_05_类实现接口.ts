// 类实现接口

// 报警器
interface Alarm {
  alert(): void
}

// 门
class Door {}

// 防盗门
class SecurityDoor extends Door implements Alarm {
  alert(): void {
    throw new Error('Method not implemented.')
  }
  alert1() {
    console.log('SecurityDoor alert')
  }
}

// 车
class Car implements Alarm {
  alert(): void {
    throw new Error('Method not implemented.')
  }
  alert1() {
    console.log('Car alert')
  }
}

let a3051 = new SecurityDoor()
console.log(a3051.alert1())

let a3052 = new Car()
console.log(a3052.alert1())

interface Light {
  lightOn(): void
  lightOff(): void
}

// 多接口
class Car1 implements Alarm, Light {
  alert() {
    console.log('Car alert')
  }
  lightOn() {
    console.log('Car lightOn')
  }
  lightOff() {
    console.log('Car lightOff')
  }
}

let a3053 = new Car1()
console.log(a3053.lightOn())

// 接口继承
interface LightTableAlarm extends Alarm {
  lightOn(): void
  lightOff(): void
}

class Point {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

interface Point3d extends Point {
  z: number
}

let point3d: Point3d = { x: 1, y: 2, z: 3 }
