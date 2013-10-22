/*!
 * Conditionizr test: Chrome
 */
conditionizr.add('chrome', [], function () {
    return !!window.chrome && !/opera|opr/i.test(navigator.userAgent);
});
