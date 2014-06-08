/*!
 * Opera
 * `window.opera` applies to earlier Opera
 * browsers, others respond true to `window.chrome`
 * so we need to test the `navigator.vendor` to be sure
 */
conditionizr.add('opera', function () {
  return !!window.opera || /opera/i.test(navigator.vendor);
});
