## js常用的DOM操作
<br />


#### 1、查找节点

1. **document.getElementById**：根据ID查找，只返回一个；
2. **document.getElementsByClassName**：根据类名class查找，返回HTMLCollection；
3. **document.getELementsByTagName**：根据标签查找，返回HTMLCollection集合；
4. **document.getElementsByName**：根据元素的name属性查找，返回NodeList对象；
5. **document.querySelector**：返回单个Node，如果匹配多个，值返回第一个；
6. **document.querySelectorAll**：返回一个NodeList；
7. **document.forms**：获取当前页面所有的form，返回一个HTMLCollection；

题外延伸：
HTMLCollection：一个包含了元素的通用集合；
方法：
1. HTMLCollection.item(ids)：根据给定索引返回具体节点，开始为0，超出返回null；
2. HTMLCollection.namedItem(id)：根据id返回指定节点，或者根据字符串所表示的name作为匹配，不符合返回null；

NodeList：对象是一个节点的集合，但不是数组，只能用forEach方法；
方法：
1. NodeList.item(ids)：根据给定索引返回Node对象；
<br />

#### 2、创建节点
1. **document.createElement**：指定标签创建一个HTML元素；
2. **document.createTextNode**：创建文本节点；
3. **document.createDocumentFragment**：创建一个空白节点，用以临时存储；
4. **document.cloneNode**：克隆节点，不会克隆事件；
<br />

#### 3、修改节点
1. **Node.appendChild(child)**：将一个节点添加到指定父节点的列表末尾；
2. **Node.insertBefore(child)**：将节点插入作为父节点的字节点；
3. **Node.remove()**：删除当前节点；
4. **Node.removeChild(child)**：删除父节点的指定的一个字节点；
5. **Node.replaceChild(newChild, oldChild)**：用指定节点（newChild）替换当前节点（oldChild）；

#### 4、节点关系
##### 1). 父关系API
1. parentNode：返回元素的父节点，Element的父节点可能是Elemenet、Document、DocumentFragment；
2. parentElement：返回元素的父节点，与parentNode的区别在于，其父节点必须是一个Element元素，如果不是，则返回Null；

##### 2). 子关系API
1. children：翻译一个实时的HTMLCollection，字节的都是Element；
2. childNodes：返回一个实时的NodeList，表示元素的子节点列表，可能包含文本节点、注释节点；
3. firstChild：返回第一个子节点，不存在返回null，与之相对应的还有firstElementChild；
4. lastChild：返回最后一个子节点，不存在返回null，与之相对应的还有lastElementChild；

##### 3). 兄弟关系API
1. previousSibling：节点的前一个节点，不存在返回null。注意可能拿到文本节点和注释节点；
2. nextSibling：节点的后一个节点，不存在返回null，注意可能为文本节点或注释节点；
3. previousElementSibling：返回前一个元素节点，兼容IE9+；
4. nextElementSibling：返回后一个元素节点，兼容IE9+；

题外延伸：
1）、Element对象表示HTML元素。
Element对象可以拥有类型为元素节点、文本节点、注释节点的子节点。

#### 5、元素属性
1. **element.setAttribute(name, value)**：设置元素属性；
2. **element.getAttribute(name)**：返回指定的属性值；
3. **element.hasAttribute(name)**：判断是否存在该属性；
4. **element.dataset(name)**：获取自定义数据属性(data-\*)；
5. **element.removeAttribute(name)**：从指定元素中删除某个属性；

#### 6、元素样式
1. **window.getPropertyValue(elem, null)**：获取指定元素elem的CSS样式；
2. **object.getPropertyValue(propertyname)**：返回指定的CSS属性propertyname的值；
