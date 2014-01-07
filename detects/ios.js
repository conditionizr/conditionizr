/*!
 * Conditionizr test: iOS
 */
conditionizr.add('ios', [], function () {
    return /iP(ad|hone|od)/i.test(navigator.userAgent);
});
