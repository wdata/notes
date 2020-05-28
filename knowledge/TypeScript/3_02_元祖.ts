let tom_1: [string, number] = ['Tom', 123]

// 为什么会报错？
let tom_2: [string, number]
// @ts-ignore
tom_2[0] = 'Tom'
// @ts-ignore
tom_2[1] = 12
// @ts-ignore
tom_2[0].slice(1)
// @ts-ignore
tom_2[1].toFixed(2)

let tom_3: [string, number]
tom_3 = ['tom', 1]

// 如果越界，则会被限制为  number | string的联合类型
tom_3.push(1)
