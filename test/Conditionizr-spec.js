/**
 * Conditionizr
 */
describe('Conditionizr', function () {

  /**
   * We should get an Object returned
   */
  it('should return an Object', function () {
    expect(typeof conditionizr).toBe('object');
  });

  /**
   * .add() API
   */
  describe('add API', function () {

    beforeEach(function () {
      conditionizr.add('safari', [], function () {
        return /constructor/i.test(window.HTMLElement);
      });
    });

    it('should add an object property', function () {
      expect(typeof conditionizr.safari).toBeTruthy();
    });

  });

});
