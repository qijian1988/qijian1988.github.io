/* eslint-disble */
let docEl = document.documentElement
export function getSize () { // 获取屏幕的宽度
  function getWdith () {
    let myWidth = 0
    if (typeof (window.innerWidth) === 'number') {
      // Non-IE
      myWidth = window.innerWidth
    } else if (document.documentElement && (document.documentElement.clientWidth)) {
      // IE 6+ in 'standards compliant mode'
      myWidth = document.documentElement.clientWidth
    } else if (document.body && (document.body.clientWidth)) {
      // IE 4 compatible
      myWidth = document.body.clientWidth
    }
    return parseInt(myWidth)
  };
  let screenWidth = getWdith()
  docEl.style.fontSize = screenWidth / (1920 / 40) + 'px'
}

window.onresize = function () {
  getSize()
}

export function messageWithApp (sid) {
  try { // ios
    window.webkit.messageHandlers.getShareId.postMessage(sid)
  } catch (e) {

  }

  try { // android
    window.android.getShareId(sid)
  } catch (e) {

  }
}
