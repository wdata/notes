// 初始化
console.show()
console.setTitle('版本0.1')
console.setPosition(0, device.height / 1.6)
console.setSize(device.width / 2, device.width / 2)
auto.waitFor()

const regex_ad = /观看视频(\d+)秒后，可获得奖励/
const regex_game = /(\d+)\/(\d+)分钟/
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
waitView('书架').click()
log('应用已识别')

/**
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
clickButton(findView('我'))
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
**/

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

/**
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
waitForActivity('com.qidian.QDReader.ui.activity.MainGroupActivity')
clickButton(waitView('书架'))
 */

// 领取碎片红包

// log(findViewBy('android.view.ViewGroup', 'name').find().length);
// log(findViewBy('cv_content', 'id').find().length);
log(findView('去找书'));
log(findView('qd_recycler_view', 'id').scrollable());
findView('qd_recycler_view', 'id').scrollForward()
log(findView('去找书'));
findView('qd_recycler_view', 'id').scrollForward()
log(findView('去找书'));



// 书架滚动
function bookshelf() {
    const list = findView('qd_recycler_view', 'id');
    // 判断是否存在书架
    if (!list) {
        return false;
    }


    // 判断书架是否在顶部
    while (
        (findView('签到福利') && findView('书架')) ||
        (findView('签到福利'))
    ) {

    }

    do {

    }
    while (findView('去找书'))
}

// if ((textView = findView('qd_recycler_view', 'id'))) {
//     // 查找列表图层
//     const list = textView.children();
//     for (let x = 0; x < list.length; x++) {
//         // 子集遍历，查询
//         const child = list[x];
//         // 听书跳过
//         if (child.findOne(findViewBy('flPlayViewBottom', 'id'))) {
//             log("听书");
//             // continue;
//         }

//         // // com.qidian.QDReader:id/cv_content
//         // // com.qidian.QDReader:id/bookNameLayout

//         // if (child.findOne(findViewBy('\\d+本', 'match'))) {
//         //     log('书架')
//         //     clickButton(child); // 进入书架

//         //     // 书架内容
//         //     if ((textView = findView('qd_recycler_view', 'id'))) {
//         //         const list = textView.children();
//         //         for (let x = 0; x < list.length; x++) {
//         //             // 子集遍历，查询
//         //             const child = list[x];
//         //             log('书')
//         //             clickButton(child.findOne(findViewBy('ivMore', 'id'))); // 点击其他
//         //             if (redEnvelope()) {
//         //                 return;
//         //             }
//         //         }
//         //     }
//         // } else {
//         //     log('书')
//         //     clickButton(child.findOne(findViewBy('ivMore', 'id'))); // 点击其他
//         //     if (redEnvelope()) {
//         //         return;
//         //     }
//         // }
//     }
// }

// 执行红包视频
function redEnvelope() {
    clickButton(waitView('红包'));
    if ((textView = waitView('马上抢'))) {
        clickButton(textView);
        watchAds();
    } else {
        return true;
    }
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
  className('ImageView').waitFor()
  id('android:id/navigationBarBackground').waitFor()
//   sleep(5000)
  if ((textView = findView('观看视频\\d+秒后，可获得奖励', 'match'))) {
    log('进入-----------------')
    let adTime = findValueFromString(textView.text(), regex_ad)
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
        fun(children[x]);
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
