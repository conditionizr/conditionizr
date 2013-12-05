/*!
 * Conditionizr test: Linux
 */
conditionizr.add('linux', [], function () {
    return /linux/i.test(navigator.platform) && !/android|cros/i.test(navigator.userAgent);
});
