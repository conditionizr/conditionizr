/*!
 * Firefox
 * Evaluate the presence of `InstallTrigger`
 */
conditionizr.add('firefox', function () {
  return 'InstallTrigger' in window;
});
