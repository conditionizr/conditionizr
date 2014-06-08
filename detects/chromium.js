/*!
 * Chromium
 */
conditionizr.add('chromium', function () {
  return /cros i686/i.test(navigator.platform);
});
