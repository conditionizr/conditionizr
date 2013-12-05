/*!
 * Conditionizr test: Firefox
 */
conditionizr.add('firefox', [], function () {
    return 'InstallTrigger' in window;
});
