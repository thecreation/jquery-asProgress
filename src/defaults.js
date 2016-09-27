export default {
  namespace: 'progress',
  bootstrap: false,
  min: 0,
  max: 100,
  goal: 100,
  speed: 20, // speed of 1/100
  easing: 'ease',
  labelCallback(n) {
    const percentage = this.getPercentage(n);
    return `${percentage}%`;
  }
};
