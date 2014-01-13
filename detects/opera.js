/*!
 * Conditionizr test: Opera
 */
conditionizr.add('opera', [], function () {
    return !!window.opera || /opera/i.test(navigator.vendor);
});
