/*!
 * IE10
 * @cc_on Conditional Compilation to test the
 * JavaScript version and MSIE 10 in the UserAgent
 */
conditionizr.add('ie10', [], function () {
  var version = false;
  /*@cc_on
    if (/^10/.test(@_jscript_version) && /MSIE 10\.0(?!.*IEMobile)/i.test(navigator.userAgent))
    version = true
  @*/
  return version;
});
