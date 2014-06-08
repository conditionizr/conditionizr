/*!
 * IE8
 * @cc_on Conditional Compilation to test the
 * JavaScript versions
 */
conditionizr.add('ie8', function () {
  return (Function('/*@cc_on return (@_jscript_version > 5.7 && !/^(9|10)/.test(@_jscript_version)); @*/')());
});
