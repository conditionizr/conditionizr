/*!
 * Conditionizr test: IE11
 */
conditionizr.add('ie11', [], function () {
  return /(?:\sTrident\/7\.0;.*\srv:11\.0)/i.test(navigator.userAgent);
});
