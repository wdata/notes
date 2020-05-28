// 字符串字面量类型用来约束取值只能是某几个字符串中的一个

type EventNames = 'click' | 'scroll' | 'mousemove'
function handleEvent(ele: Element, event: EventNames) {
  // do something
}

// @ts-ignore
handleEvent(document.getElementById('hello'), 'scroll')
// @ts-ignore
handleEvent(document.getElementById('world', 'dbclick'))
