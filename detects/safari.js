/*!
 * Conditionizr test: Safari
 */
conditionizr.add('safari', [], function () {
    return /constructor/i.test(window.HTMLElement);
});
