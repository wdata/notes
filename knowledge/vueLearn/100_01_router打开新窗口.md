## router打开新窗口

### 1、router-like 打开新窗口

```js
{
  <router-link
    tag="a" // a标签类型
    target="_blank" // 打开新窗口
    :to=`{
      name: 'searchGoods',
      params: {
        catId: 0
      },
      query:{
        keywords: '手机'
      }
    }`>
    // 路由的名字，参数
    热门好货
  </router-link>
}
```

### 2、window.open + #router 打开新窗口
有时候在事件或者编程中打开新窗口
```js
{
  let routeData = this.$router.resolve({
     name: "searchGoods",
     query: params,
     params: {
       catId: params.catId
     }
  });
  window.open(routeData.href, '_blank');
}
```
