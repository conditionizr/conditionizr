/*!
 * IE11
 * RegExp to check out the new IE UserAgent:
 * Trident/7.0; rv:11.0
 */
conditionizr.add('ie11', function () {
  return /(?:\sTrident\/7\.0;.*\srv:11\.0)/i.test(navigator.userAgent);
});
