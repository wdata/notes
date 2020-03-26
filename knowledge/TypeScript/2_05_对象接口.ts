interface Person {
  name: string,
  age: number
}


let tom: Person = {
  name: 'WANG',
  age: 21
}

let tom1: object = {
  name: 'wang',
  age: 22
}



// ? 可表示属性可填可不填，

interface Person2 {
  readonly id: number,
  name: string,
  age?: number,
  [name: string]: any,
  [name: number]: string,
};

let tom2: Person2 = {
  id: 222,
  name: 'wang',
  age: 122,
  gender: 9,
  gender2: 9,
  444: 'string'
}

// error，id只读，不能修改
// tom2.id = 111;
