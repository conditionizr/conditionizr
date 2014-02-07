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
   * Loop through the expected public methods to
   * ensure they're all defined
   */
  it('should have all public methods with functions', function() {
    var methods = 'config on add polyfill load'.split(/\s/);
    for (var i = methods.length; i--;) {
      var method = conditionizr[methods[i]];
      expect(method).toBeDefined();
      expect(typeof method).toBe('function');
    }
  });

  /**
   * .add()
   * Add a detect using the .add() method
   * and expect the property to be added
   */
  describe('add()', function () {

    beforeEach(function () {
      // add a real test to ensure it's defined
      conditionizr.add('safari', [], function () {
        return /constructor/i.test(window.HTMLElement);
      });
    });

    it('should add an object property', function () {
      expect(conditionizr.safari).toBeDefined();
    });

  });

  /**
   * Object properties should hold a Boolean value
   * so let's emulate detects which fake true or false
   * to ensure our callback result gets added as the
   * property value
   */
  describe('object booleans', function () {

    beforeEach(function () {
      conditionizr.add('faketrue', [], function () {
        return true;
      });
      conditionizr.add('fakefalse', [], function () {
        return false;
      });
    });

    it('should result in a boolean value', function () {
      expect(conditionizr.faketrue).toBe(true);
      expect(conditionizr.fakefalse).toBe(false);
    });

  });

  /**
   * TODO:
   * .polyfill()
   * .load()
   * .on()
   * .config()
   */

});
