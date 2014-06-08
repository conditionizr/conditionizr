/*!
 * IE6
 * @cc_on Conditional Compilation to test the
 * JavaScript version and MSIE 6 in the UserAgent
 */
conditionizr.add('ie6', function () {
  return (Function('/*@cc_on return (@_jscript_version == 5.6 || (@_jscript_version == 5.7 && /MSIE 6\.0/i.test(navigator.userAgent))); @*/')());
});
