
/**
 * 根据设计稿的宽度和设备宽度动态设置跟字体的大小
 * @param {*} designWith 
 */
export default function setRem(designWith){
    const resizeEvent= 'orientationchange' in window ? 'orientationchange' : 'resize';
    const recalc = () => {
      const docEl = document.documentElement;
      const { clientWidth } = docEl;
      if (!clientWidth) return;
      docEl.style.fontSize = `${100 * (designWith / 1080)}px`;
    };
  
    if (!document.addEventListener) return;
    window.addEventListener(resizeEvent, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
}