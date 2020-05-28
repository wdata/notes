// 函数的合并
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string | undefined {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  } else {
    return undefined
  }
}

// 接口的合并
