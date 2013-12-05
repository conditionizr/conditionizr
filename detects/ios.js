/*!
 * Conditionizr test: iOS
 */
conditionizr.add('ios', [], function () {
    return /(iPad|iPhone|iPod)/i.test(navigator.userAgent);
});
