
/**
 * 根据设计稿的宽度和设备宽度动态设置跟字体的大小
 * 
 */

(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
typeof define === 'function' && define.amd ? define(factory) : (global.setRem = factory());
})(this, function () {
    function setRem(designWith){
        if(typeof window !== 'undefined' && typeof document !== 'undefined'){
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
    }
    return setRem;
});