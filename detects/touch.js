/*!
 * Touch
 * Use `in` to test for the `ontouchstart` property,
 * IE10 ships `msMaxTouchPoints` for the touch hardware
 */
conditionizr.add('touch', 'ontouchstart' in window || !!navigator.msMaxTouchPoints);
