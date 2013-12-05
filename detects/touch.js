/*!
 * Conditionizr test: Touch
 */
conditionizr.add('touch', [], function () {
    return !!'ontouchstart' in window || !!navigator.msMaxTouchPoints;
});
