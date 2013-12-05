/*!
 * Conditionizr test: Mac
 */
conditionizr.add('mac', [], function () {
    return /mac/i.test(navigator.platform);
});
