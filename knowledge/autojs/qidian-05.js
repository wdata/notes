// 初始化
console.show()
console.setTitle('版本0.1')
console.setPosition(0, device.height / 1.6)
console.setSize(device.width / 2, device.width / 2)
auto.waitFor()

sleep(1000)
//  判断是否开启服务
if (auto.service === null) {
  close('请先开启无障碍服务！')
}
log('无障碍服务已开启')

// 启动起点
app.launchPackage('com.qidian.QDReader')
waitForPackage('com.qidian.QDReader')
waitForActivity('com.qidian.QDReader.ui.activity.MainGroupActivity')
log('应用已识别')
clickButton(waitView('发现'))
sleep(300);
clickButton(waitView('红包广场'))

while (!findView('马上抢')) {
  back();
  log('返回发现');
  sleep(300);
  clickButton(waitView('红包广场'));
  log('进入红包广场');
  sleep(300);
}

clickButton(findView('马上抢'));
clickButton(waitView('抢红包', 'textContains')); // 投1月票抢红包
device.vibrate(2000);

close()

/**
 * 查找带有某个文本的控件
 * @param {string} content 查找文本
 * @param {string} mode 查找方式，详见 findViewBy
 * @returns 第一个符合条件的控件，不存在返回 undefined
 */
function findView(content, mode) {
  log(`查找控件 ${content}`)
  let find = findViewBy(content, mode)
  return find && find.exists() ? find.findOnce() : undefined
}

/**
 * 查找带有某个文本的控件
 * @param {string} content 查找文本
 * @param {string} mode 查找方式，详见 findViewBy
 * @returns 第一个符合条件的控件
 */
function waitView(content, mode) {
  log(`等待控件 ${content}`)
  let view = findViewBy(content, mode)
  view.waitFor()
  return view.findOnce()
}

/**
 * 查找控件
 * @param {string} content 查找文本
 * @param {string} mode 查找方式，默认 text，可选 match，id
 * @returns selector
 */
function findViewBy(content, mode) {
  let find
  if (mode === 'match') {
    find = textMatches(content)
  } else if (mode === 'textContains') {
    find = textContains(content)
  } else if (mode === 'id') {
    find = id(content)
  } else if (mode === 'name') {
    find = className(content)
  } else {
    find = text(content)
  }
  return find
}

/**
 * 根据文字查找按钮并点击
 * @param {UiObject} view 按钮上的文字所在 view
 * @returns 是否成功点击
 */
function clickButton(view) {
  log('点击 ' + view.text())
  // 查找按钮所在控件
  let btn = view
  while (btn && !btn.clickable()) {
    btn = btn.parent()
  }
  // 点击
  if (btn) {
    btn.click()
    return true
  }
  return false
}
// 关闭服务
function close(text) {
  if (text) {
    log(text)
  }
  log('运行结束')
  sleep(3000)
  console.hide()
  engines.myEngine().forceStop()
}
