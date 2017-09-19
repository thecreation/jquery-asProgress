import $ from 'jquery';
import DEFAULTS from './defaults';
import easingBezier from './easingBezier';
import EASING from './easing';
import * as util from './util';

const NAMESPACE = 'asProgress';

/**
 * Plugin constructor
 **/
class asProgress {
  constructor(element, options) {
    this.element = element;
    this.$element = $(element);

    this.options = $.extend({}, DEFAULTS, options, this.$element.data());

    if(this.options.bootstrap){
      this.namespace = 'progress';

      this.$target = this.$element.find('.progress-bar');

      this.classes = {
        label: `${this.namespace}-label`,
        bar: `${this.namespace}-bar`,
        disabled: 'is-disabled'
      };
    } else {
      this.namespace = this.options.namespace;

      this.classes = {
        label: `${this.namespace}__label`,
        bar: `${this.namespace}__bar`,
        disabled: 'is-disabled'
      };

      this.$target = this.$element;

      this.$element.addClass(this.namespace);
    }

    this.easing = EASING[this.options.easing] || EASING.ease;

    this.min = this.$target.attr('aria-valuemin');
    this.max = this.$target.attr('aria-valuemax');
    this.min = this.min? parseInt(this.min, 10): this.options.min;
    this.max = this.max? parseInt(this.max, 10): this.options.max;
    this.first = this.$target.attr('aria-valuenow');
    this.first = this.first? parseInt(this.first, 10): this.min;

    this.now = this.first;
    this.goal = this.options.goal;
    this._frameId = null;

    // Current state information.
    this._states = {};

    this.initialized = false;
    this._trigger('init');
    this.init();
  }

  init() {
    this.$bar = this.$element.find(`.${this.classes.bar}`);
    this.$label = this.$element.find(`.${this.classes.label}`);

    this.reset();
    this.initialized = true;
    this._trigger('ready');
  }

  _trigger(eventType, ...params) {
    let data = [this].concat(params);

    // event
    this.$element.trigger(`${NAMESPACE}::${eventType}`, data);

    // callback
    eventType = eventType.replace(/\b\w+\b/g, (word) => {
      return word.substring(0, 1).toUpperCase() + word.substring(1);
    });
    let onFunction = `on${eventType}`;

    if (typeof this.options[onFunction] === 'function') {
      this.options[onFunction].apply(this, params);
    }
  }

  /**
   * Checks whether the carousel is in a specific state or not.
   */
  is(state) {
    return this._states[state] && this._states[state] > 0;
  }

  getPercentage(n) {
    return Math.round(100 * (n - this.min) / (this.max - this.min));
  }

  go(goal) {
    if(!this.is('disabled')) {
      const that = this;
      this._clear();

      if (util.isPercentage(goal)) {
        goal = parseInt(goal.replace('%', ''), 10);
        goal = Math.round(this.min + (goal / 100) * (this.max - this.min));
      }
      if (typeof goal === 'undefined') {
        goal = this.goal;
      }

      if (goal > this.max) {
        goal = this.max;
      } else if (goal < this.min) {
        goal = this.min;
      }

      const start = that.now;
      const startTime = util.getTime();
      const animation = time => {
        const distance = (time - startTime)/that.options.speed;
        let next = Math.round(that.easing.fn(distance/100) * (that.max - that.min));

        if(goal > start){
          next = start + next;
          if(next > goal){
            next = goal;
          }
        } else{
          next = start - next;
          if(next < goal){
            next = goal;
          }
        }

        that._update(next);
        if (next === goal) {
          window.cancelAnimationFrame(that._frameId);
          that._frameId = null;

          if (that.now === that.goal) {
            that._trigger('finish');
          }
        } else {
          that._frameId =  window.requestAnimationFrame(animation);
        }
      };

      that._frameId =  window.requestAnimationFrame(animation);
    }
  }

  _update(n) {
    this.now = n;

    const percenage = this.getPercentage(this.now);
    this.$bar.css('width', `${percenage}%`);
    this.$target.attr('aria-valuenow', this.now);
    if (this.$label.length > 0 && typeof this.options.labelCallback === 'function') {
      this.$label.html(this.options.labelCallback.call(this, [this.now]));
    }

    this._trigger('update', n);
  }

  _clear() {
    if (this._frameId) {
      window.cancelAnimationFrame(this._frameId);
      this._frameId = null;
    }
  }

  get() {
    return this.now;
  }

  start() {
    if(!this.is('disabled')) {
      this._clear();
      this._trigger('start');
      this.go(this.goal);
    }
  }

  reset() {
    if(!this.is('disabled')) {
      this._clear();
      this._update(this.first);
      this._trigger('reset');
    }
  }

  stop() {
    this._clear();
    this._trigger('stop');
  }

  finish() {
    if(!this.is('disabled')) {
      this._clear();
      this._update(this.goal);
      this._trigger('finish');
    }
  }

  destroy() {
    this.$element.data(NAMESPACE, null);
    this._trigger('destroy');
  }

  enable() {
    this._states.disabled = 0;

    this.$element.removeClass(this.classes.disabled);
  }

  disable() {
    this._states.disabled = 1;

    this.$element.addClass(this.classes.disabled);
  }

  static registerEasing(name, ...args) {
    EASING[name] = easingBezier(...args);
  }

  static getEasing(name) {
    return EASING[name];
  }

  static setDefaults(options) {
    $.extend(DEFAULTS, $.isPlainObject(options) && options);
  }
}

export default asProgress;
