import $ from 'jquery';
import asProgress from './asProgress';
import info from './info';

const NAMESPACE = 'asProgress';
const OtherAsProgress = $.fn.asProgress;

const jQueryAsProgress = function(options, ...args) {
  if (typeof options === 'string') {
    const method = options;

    if (/^_/.test(method)) {
      return false;
    } else if ((/^(get)/.test(method))) {
      const instance = this.first().data(NAMESPACE);
      if (instance && typeof instance[method] === 'function') {
        return instance[method](...args);
      }
    } else {
      return this.each(function() {
        const instance = $.data(this, NAMESPACE);
        if (instance && typeof instance[method] === 'function') {
          instance[method](...args);
        }
      });
    }
  }

  return this.each(function() {
    if (!$(this).data(NAMESPACE)) {
      $(this).data(NAMESPACE, new asProgress(this, options));
    }
  });
};

$.fn.asProgress = jQueryAsProgress;

$.asProgress = $.extend({
  setDefaults: asProgress.setDefaults,
  registerEasing: asProgress.registerEasing,
  getEasing: asProgress.getEasing,
  noConflict: function() {
    $.fn.asProgress = OtherAsProgress;
    return jQueryAsProgress;
  }
}, info);
