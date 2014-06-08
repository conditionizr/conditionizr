/*!
 * Retina
 * We're assuming anything greater than 1.5DPR
 * is classed as Retina
 */
conditionizr.add('retina', function () {
  return window.devicePixelRatio >= 1.5;
});
