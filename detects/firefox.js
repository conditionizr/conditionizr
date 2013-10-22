/*!
 * Conditionizr test: Firefox
 */
conditionizr.add('firefox', [''], function () {
    return typeof InstallTrigger !== 'undefined';
});
