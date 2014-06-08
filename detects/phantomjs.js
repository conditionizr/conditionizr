/*!
 * PhantomJS
 */
conditionizr.add('phantomjs', function () {
  return /\sPhantomJS\/[[0-9]+\]/.test(navigator.userAgent);
});
