## 记录开发中出现的问题

## 1. android，vant组件van-cell单元格渲染问题；
在android 荣耀v9中，vant组件van-cell单元格，在active状态下会修改background-color；会出现当前行字体忽然变粗变色，上下行的高度也出现变化。

在行上添加了开启3d，影响变小（在每一个变化的元素上添加此元素，在父级添加好像并不会影响子元素）
```css
{
  transform: translateZ(0);
}
```
