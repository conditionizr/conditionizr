/*!
 * IE9
 * @cc_on Conditional Compilation to test the
 * JavaScript version and MSIE 9 in the UserAgent
 */
conditionizr.add('ie9', [], function () {
  var version = false;
  /*@cc_on
    if (/^9/.test(@_jscript_version) && /MSIE 9\.0(?!.*IEMobile)/i.test(navigator.userAgent))
    version = true
  @*/
  return version;
});
