/*!
 * IE6
 * @cc_on Conditional Compilation to test the
 * JavaScript version and MSIE 6 in the UserAgent
 */
conditionizr.add('ie6', [], function () {
  var version = false;
  /*@cc_on
    if (@_jscript_version == 5.6 || (@_jscript_version == 5.7 && /MSIE 6\.0/i.test(navigator.userAgent)))
    version = true
  @*/
  return version;
});
