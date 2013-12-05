/*!
 * Conditionizr test: Chrome
 */
conditionizr.add('chrome', [], function () {
    return !!window.chrome && /google/i.test(navigator.vendor);
});
