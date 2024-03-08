// 初始化
console.show()
console.setTitle('版本0.1')
console.setPosition(0, device.height / 1.6)
console.setSize(device.width / 2, device.width / 2)
auto.waitFor()

let textView

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
clickButton(waitView('书架'))
log('应用已识别')

/*
// #region 签到
log('签到 开始')
while (textContains('登录领奖').exists()) {
  log('等待登录状态...')
  sleep(100)
}
if ((textView = findView('签到'))) {
  clickButton(textView)
  sleep(1000)
  back()
}
log('签到 结束')
// #endregion

// 我 - 福利中心
clickButton(waitView('我'))
clickButton(waitView('福利中心'))
waitForActivity('com.qidian.QDReader.ui.activity.QDBrowserActivity')
waitView('限时彩蛋')

// #region 每日福利
log('每日福利 开始')
while (
  (textView = findView('看第\\d+个视频', 'match')) ||
  (textView = findView('看视频领福利')) ||
  (textView = findView('看视频开宝箱'))
) {
  clickButton(textView)
  watchAds()
  sleep(500)
}
log('每日福利 结束')
// #endregion

sleep(1000)
// #region 限时彩蛋
log('限时彩蛋 开始')
while ((textView = findView('看视频'))) {
  clickButton(textView)
  watchAds()
  sleep(1000)
}
log('限时彩蛋 结束')
// #endregion

// 领奖励
log('领奖励 开始')
while ((textView = findView('领奖励'))) {
  clickButton(textView)
  sleep(1000)
  if ((textView = findView('我知道了'))) {
    clickButton(textView)
  }
}
log('领奖励 结束')

*/

// #region 玩游戏
/**
log('玩游戏 开始')
if ((textView = findView('当日玩游戏10分钟'))) {
  let layout = textView.parent()
  let playView = layout.findOne(text('去完成'))
  if (playView) {
    // 计算剩余时间
    textView = layout.findOne(text('/10分钟')).parent()
    views = textView.find(className('TextView'))
    views.forEach((o) => log(o))
    textView = views[views.length - 2]

    let gameTimes = parseInt(textView.text())
    log(textView.text())
    let playMinutes = Math.max(10 - gameTimes, 1)
    log(playMinutes)
    // 玩游戏
    clickButton(playView)
    waitForActivity('com.qidian.QDReader.ui.activity.QDBrowserActivity')
    clickButton(waitView('新游'))
    waitForActivity('com.qidian.QDReader.ui.activity.GameBrowserActivity')
    clickButton(waitView('在线玩'))
    sleep(1000)
    for (let i = playMinutes + 1; i > 0; --i) {
      log(`剩余 ${i}min`)
      for (let j = 0; j < 60; ++j) {
        sleep(1100)
        device.wakeUpIfNeeded()
      }
    }
    device.vibrate(500)
    // 游戏页(无标题) - 新游 - 游戏中心 - 福利中心
    while (!findView('福利中心')) {
      back()
      sleep(1000)
    }
  }
}
sleep(1000)
log('玩游戏 结束')
 */
// #endregion

/*
// 领奖励
log('领奖励 开始')
while ((textView = findView('领奖励'))) {
  clickButton(textView)
  sleep(1000)
  if ((textView = findView('我知道了'))) {
    clickButton(textView)
  }
}
log('领奖励 结束')

// 结束
log('返回书架')
back()
sleep(500)
waitForActivity('com.qidian.QDReader.ui.activity.MainGroupActivity')
// clickButton(findView('书架'))
back()

*/
// 领取碎片红包
// 书架滚动
function bookshelf(callback) {
  let bookshelf = findView('qd_recycler_view', 'id')
  // 判断是否存在书架
  if (!bookshelf) {
    return false
  }

  // 将滚动拉到书架顶部
  while (bookshelf.scrollBackward()) {
    log('返回滚动条顶部')
    sleep(500)
  }

  // 循环点击和遍历，直至最底部
  let texts = [] // 记录不重复
  do {
    bookshelf = findView('qd_recycler_view', 'id')
    bookshelf.children().forEach((child) => {
      const text = child.findOne(findViewBy('tvBookName', 'id'))
      // 重复跳过
      if (text && text !== '去找书' && !texts.includes(text) && bookIndexMax !== 0) {
        text && log(text.text())
        texts.push(text)
        callback(child)
      }
    })
    bookshelf.scrollForward()
  } while (!findView('去找书') && findView('qd_recycler_view', 'id') && bookIndexMax !== 0)

  // 将滚动拉到书架顶部
  while (bookshelf.scrollBackward()) {
    log('返回滚动条顶部')
    sleep(500)
  }
}

// 书架
let bookIndexListMax = true
let bookIndexMax = 10
bookshelf((child) => {
  if (child.findOne(findViewBy('\\d+本', 'match'))) {
    log('书架')
    clickButton(child) // 进入书架
    waitView('管理') // 延迟
    bookshelf((childData) => {
      redEnvelope(childData)
    })
    back()
  } else {
    redEnvelope(child)
  }
})

// 书籍判断
function redEnvelope(child) {
  // 听书跳过
  if (child.findOne(findViewBy('bookCoverLayout', 'id'))) {
    log('听书')
    return
  }
  log('书')
  // // 点击其他
  // clickButton(child.findOne(findViewBy('ivMore', 'id')))
  // // 点击红包
  // clickButton(waitView('红包'))
  // sleep(500)
  // // 进入红包视频
  // if (findView('马上抢') && bookIndexListMax) {
  //     clickButton(findView('马上抢'));
  //     watchAds();
  //     clickButton(waitView('立即领取'));
  //     // clickButton(waitView('放弃奖励'));
  //     findView('我知道了') && clickButton(waitView('立即领取'));
  //     clickButton(waitView('topLayout', 'id')); // 关闭弹窗
  //     bookIndexMax--;
  // } else {
  //     clickButton(waitView('topLayout', 'id')); // 关闭弹窗
  //     bookIndexMax--;
  //     bookIndexListMax = false;
  // }

  // 进入书内部
  clickButton(child.findOne(findViewBy('tvBookName', 'id'))) // 进入书内
  log('进入书籍')
  // while (findView('打赏') && findView('红包')) {
  //   VolumeDown()
  //   sleep(500)
  //   log('切换书页中')
  // }
  // log('书页切换完成')
  // clickButton(findView('红包'))
  // if (findView('马上抢') && bookIndexListMax) {
  //   clickButton(findView('马上抢'))
  //   watchAds()
  //   clickButton(waitView('立即领取'))
  //   // clickButton(waitView('放弃奖励'));
  //   findView('我知道了') && clickButton(waitView('立即领取'))
  //   clickButton(waitView('topLayout', 'id')) // 关闭弹窗
  //   bookIndexMax--
  // } else {
  //   clickButton(waitView('topLayout', 'id')) // 关闭弹窗
  //   bookIndexMax--
  //   bookIndexListMax = false
  // }
}

close()

/**
 * 根据正则表达式查找字符串中的值
 * @param {string} str 字符串
 * @param {RegExp} regex 正则表达式
 * @param {number|undefined} count 结果个数
 * @returns 当数量不少于需要的个数时，返回以 1 开头的数组
 */
function findValueFromString(str, regex, count) {
  if (!count) count = 1
  let m = regex.exec(str)
  return m && m.length >= count + 1 ? m : undefined
}

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

/**
 * 看广告，等待广告结束并关闭广告
 * @returns 是否播放完成
 */
function watchAds() {
  const regex_ad = /观看视频(\d+)秒后，可获得奖励/
  const regex_game = /(\d+)\/(\d+)分钟/
  log('等待视频加载')
  do {
    sleep(100)
    if (textContains('观看视频').exists() || textContains('观看完视频').exists()) {
      break
    }
  } while (!(textContains('观看视频').exists() || textContains('观看完视频').exists()))

  log('进入观看视频2')
  if ((textView = findView('观看\\d+秒领取奖励', 'match'))) {
    log('进入-----------------')
    log(textView.text())
    let adTime = findValueFromString(textView.text(), /观看视频(\d+)秒领取奖励/)
    // 应该不会有比 45s 更长的广告了吧
    log(adTime)
    adTime = adTime ? adTime[1] : 45
    log(`广告时间：${adTime}+1s`)
    sleep(adTime * 1000)
    sleep(1000) // 额外休眠 1s
  } else if ((textView = findView('观看视频\\d+秒后，可获得奖励', 'match'))) {
    log('进入-----------------')
    log(textView.text())
    let adTime = findValueFromString(textView.text(), /观看视频(\d+)秒后，可获得奖励/)
    // 应该不会有比 45s 更长的广告了吧
    log(adTime)
    adTime = adTime ? adTime[1] : 45
    log(`广告时间：${adTime}+1s`)
    sleep(adTime * 1000)
    sleep(1000) // 额外休眠 1s
  } else if ((textView = findView('观看完视频，可获得奖励'))) {
    while (findView('跳过广告')) sleep(1000)
  } else if ((textView = findView('跳过视频'))) {
    clickButton(textView)
    log('广告观看失败')
    return false
  }
  // 结束
  if ((textView = findView('跳过广告'))) {
    clickButton(textView)
  } else {
    let closeButton = className('ImageView')
      .filter((o) => o.clickable())
      .findOnce()
    if (closeButton) closeButton.click()
    else return false
  }
  // 等待 我知道了
  sleep(1000)
  if ((textView = findView('我知道了'))) {
    clickButton(textView)
  }
  log('广告已结束')
  return true
}

// #region Debug

/**
 * 在控制台输出某个视图及所有子视图
 * @param {UiObject} view 视图
 * @param {number|undefined} level 空格等级
 */
function logView(view, level) {
  if (!level) level = 0
  let s = ''
  for (let i = 0; i < level; ++i) s += ' '
  log(`${s}${view}`)
  view.children().forEach((v) => logView(v, level + 2))
}

/**
 * 在控制台输出当前屏幕所有视图的内容
 * @param {UiObject} child 内部任意一个子视图
 */
function logRootView(child) {
  if (!child) {
    child = classNameContains('').findOnce()
  }

  let pl = 0
  let pv = child.parent()
  while (pv) {
    pl++
    child = pv
    pv = child.parent()
  }
  log(pl)
  logView(child)
}

/**
 * 执行循环
 * @param {Array} children 子视图列表
 * @param {function} fun 执行的函数
 */
function loop(children, fun) {
  for (let x = 0; x < children.length; x++) {
    fun(children[x])
  }
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

// #endregion```
