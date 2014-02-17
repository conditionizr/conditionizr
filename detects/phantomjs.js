/*!
 * PhantomJS
 */
conditionizr.add('phantomjs', ['class'], function () {
  return /\sPhantomJS\/[[0-9]+\]/.test(navigator.userAgent);
});
