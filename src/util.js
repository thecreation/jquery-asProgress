if (!Date.now){
  Date.now = () => new Date().getTime();
}

const vendors = ['webkit', 'moz'];
for (let i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
  const vp = vendors[i];
  window.requestAnimationFrame = window[`${vp}RequestAnimationFrame`];
  window.cancelAnimationFrame = (window[`${vp}CancelAnimationFrame`]
                 || window[`${vp}CancelRequestAnimationFrame`]);
}

if (/iP(ad|hone|od).*OS (6|7)/.test(window.navigator.userAgent) // iOS6 is buggy
  || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
  let lastTime = 0;
  window.requestAnimationFrame = callback => {
    const now = Date.now();
    const nextTime = Math.max(lastTime + 16, now);
    return setTimeout(() => {
        callback(lastTime = nextTime);
      },
      nextTime - now);
  };
  window.cancelAnimationFrame = clearTimeout;
}

export function isPercentage(n) {
  return typeof n === 'string' && n.includes('%');
}

export function getTime(){
  if (typeof window.performance !== 'undefined' && window.performance.now) {
    return window.performance.now();
  }
  return Date.now();
}
