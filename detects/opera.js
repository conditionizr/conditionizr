/*!
 * Conditionizr test: Opera
 */
conditionizr.add('opera', [], function () {
    return !!window.opera || /opera|opr/i.test(navigator.userAgent);
});
