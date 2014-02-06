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

  it('should have all methods', function() {
    var methods = 'config on add polyfill load'.split();
    for (var i = methods.length; i--;) {
      expect(conditionizr.methods[i]).toBeDefined();
    }
  });

  /**
   * .add()
   */
  describe('add()', function () {

    beforeEach(function () {
      conditionizr.add('safari', [], function () {
        return /constructor/i.test(window.HTMLElement);
      });
    });

    it('should add an object property', function () {
      expect(typeof conditionizr.safari).toBeTruthy();
    });

  });

  /**
   * .on()
   */
  describe('on()', function () {

    beforeEach(function() {
      conditionizr.add('fakeTestTrue', [], function () {
        return true;
      });
      conditionizr.add('fakeTestFalse', [], function () {
        return false;
      });
      spyOn(conditionizr, 'on');
      conditionizr.on('fakeTest', function () {});
    });

    it('should call the .on() method', function() {
      expect(conditionizr.on).toHaveBeenCalled();
    });

    it('should just call twice', function() {
      expect(conditionizr.on).toHaveBeenCalledWith('fakeTest', jasmine.any(Function));
    });

  });

});
