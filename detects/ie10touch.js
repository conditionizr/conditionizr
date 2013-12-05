/*!
 * Conditionizr test: IE10 Touch
 */
conditionizr.add('ie10touch', [], function () {
    return /MSIE 10\.0.*Touch(?!.*IEMobile)/i.test(navigator.userAgent);
});
