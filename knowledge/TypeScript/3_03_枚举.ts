enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}

console.log(Days['Sun'] === 0)
console.log(Days['Mon'] === 1)
console.log(Days['Tue'] === 2)
console.log(Days['Sat'] === 6)

console.log(Days[0] === 'Sun')
console.log(Days[1] === 'Mon')
console.log(Days[2] === 'Tue')
console.log(Days[3] === 'Wed')

// 手动赋值
enum Days1 {
  Sun = 7,
  Mon = 1,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
enum Days2 {
  Sun = 3,
  Mon = 1,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}

enum Color {
  Red,
  Green,
  Blue = 'blue'.length
}

// 计算所得项后面是为手动赋值的项，会因为无法获得初始值报错
// enum Color1 {
//   Red = 'red'.length,
//   Green,
//   Blue
// }

declare enum Directions1 {
  Up,
  Down,
  Left,
  Right
}
