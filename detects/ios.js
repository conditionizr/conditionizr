/*!
 * iOS [iPad, iPhone, iPod]
 * Simple minimal UserAgent test
 */
conditionizr.add('ios', function () {
  return /iP(ad|hone|od)/i.test(navigator.userAgent);
});
