/*!
 * IE7
 * @cc_on Conditional Compilation to test the
 * JavaScript version and MSIE 7 in the UserAgent
 */
conditionizr.add('ie7', [], function () {
  var version = false;
  /*@cc_on
    if (@_jscript_version == 5.7 && /MSIE 7\.0(?!.*IEMobile)/i.test(navigator.userAgent))
    version = true
  @*/
  return version;
});
