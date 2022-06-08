
// 数据处理

function clone (parent, child) {
  // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}



function base() {

}

// 解压json
base.prototype.jsonParse = function(data) {
  if (!(data && typeof data === 'string')) return data
  try {
    return JSON.parse(data)
  } catch {
    return data
  }
}
