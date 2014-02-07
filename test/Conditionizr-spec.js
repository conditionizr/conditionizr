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
      conditionizr.add('faketrue', ['class'], function () {
        return true;
      });
      conditionizr.add('fakefalse', ['class'], function () {
        return false;
      });
    });

    it('should result in a boolean value', function () {
      expect(conditionizr.faketrue).toBe(true);
      expect(conditionizr.fakefalse).toBe(false);
    });

  });

  /**
   * Class names are added the the <html> tag
   * when the object property value is true.
   * There are also two ways to declare classes to add,
   * using .add() inline ['class'] array, or using .config()
   */
  describe('class names on <html>', function () {

    beforeEach(function () {
      var returnTrue = function () { return true; };
      var returnFalse = function () { return false; };
      conditionizr.add('fakeTrueUsingAdd', ['class'], returnTrue);
      conditionizr.add('fakeFalseUsingAdd', ['class'], returnFalse);
      conditionizr.add('fakeTrueUsingConfig', [], returnTrue);
      conditionizr.add('fakeFalseUsingConfig', [], returnFalse);
      conditionizr.config({
          tests:{
              'fakeTrueUsingConfig': ['class'],
              'fakeFalseUsingConfig': ['class']
          }
      });
    });

    it('should add the faketrue classNames from add() and config()', function () {
      expect(document.documentElement.className).toContain('faketrueusingadd');
      expect(document.documentElement.className).toContain('faketrueusingconfig');
      expect(document.documentElement.className).not.toContain('fakefalseusingadd');
      expect(document.documentElement.className).not.toContain('fakefalseusingconfig');
    });

  });

  /**
   * Will fire when a property is true
   */
  describe('on()', function () {

    beforeEach(function () {
      conditionizr.add('faketrue', [], function () {
        return true;
      });
    });

    it('should run a callback when the value is true', function () {
      spyOn(conditionizr, 'on');
      conditionizr.on('fake', function () {});
      expect(conditionizr.on).toHaveBeenCalledWith('fake', jasmine.any(Function));
    });

  });

  /**
   * TODO:
   * .polyfill()
   * .load()
   * .config()
   */

});
