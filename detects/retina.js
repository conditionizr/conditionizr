/*!
 * Conditionizr test: Retina
 */
conditionizr.add('retina', [], function () {
    return !!window.devicePixelRatio >= 1.5;
});
