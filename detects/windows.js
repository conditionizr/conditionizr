/*!
 * Windows
 */
conditionizr.add('windows', function () {
    return /win/i.test(navigator.platform);
});
