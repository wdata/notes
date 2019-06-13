
#### 1.获取Google搜索图片的图片数组;
```js
{
  var a = document.getElementsByClassName('notranslate');
  var b = [];
  for (let x = 0; x < a.length; x++ ){
  	b.push(a[x].innerHTML)
  }
  b = b.map(res => {
  	return JSON.parse(res).ou;
  });
  console.log(JSON.stringify(b));
}
```
