## cookie和Storage

### cookie
Cookie是由web服务器创建并保存在用户浏览器上的小文本文件，它以key/value的形式保存用户相关信息，这些数据通常会经过加密处理。
cookie有两个主要用途：`存储用户信息`和`个性化定制`；

#### 1、cookie优势
* 能与服务器进行通信；
* 极高的扩展性和可用性；

#### 2、cookie劣势
* 每个domain最多只能有20条，长度不能超过4k，浏览器最多保存300条；
* 有安全性问题；
* 每个HTTP都会附加cookie，会增加流量；
* 一般不能跨域使用；
* cookie需要自行封装；

#### 3、cookie使用
```js
{
  // 读取cookie
  let x = document.cookie;

  // 修改cookie，会覆盖旧的cookie
  document.cookie="username=John Smith; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";

  // 删除cookie 设置以前的时间
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}
```
设置cookie的值封装
```js
{
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }
}
```
获取cookie
```js
{
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
  }
}
```
检测cookie的值
```js
{
  function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
      alert("Welcome again " + username);
    } else {
      username = prompt("Please enter your name:", "");
      if (username != "" && username != null) {
        setCookie("username", username, 365);
      }
    }
  }
}
```
<br />

### Storage
localStorage是永久储存
sessionStorage是会话存储

#### 优势
* 一般能存储5M数据；
* 不与服务器通信；
* 操作方便；
* localStorage只要在相同的协议、相同的主机名、相同的端口下，就能读取/修改到同一份localStorage数据；sessionStorage比localStorage更严苛一点，除了协议、主机名、端口外，还要求在同一窗口；

#### 劣势
* 数据存入太多，会很卡；

#### 操作方法
```js
{
  Storage.setItem(name, value); // 设置
  Storage.getItem(name); // 获取
  Storage.removeItem(name); // 清除name
  Storage.clear(); // 清除所有
  Storage.key(); // 返回第n个键的名称
}
```
