/*!
 * Safari
 * The only browser where the HTMLElement
 * contains `Constructor`
 */
conditionizr.add('safari', function () {
  return /Constructor/.test(window.HTMLElement);
});
