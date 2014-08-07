/**
 * conditionizr
 */
describe('conditionizr', function () {

  var getScriptTag = function (name) {
    return document.querySelector('script[src$="/' + name + '.js"]');
  };
  var getStyleTag = function (name) {
    return document.querySelector('link[href$="/' + name + '.css"]');
  };

  /**
   * add()
   */
  describe('add()', function () {

    beforeEach(function () {
      conditionizr.add('fakeaddtrue', function () {
        return true;
      });
      conditionizr.add('fakeaddfalse', function () {
        return false;
      });
      conditionizr.add('inlineaddtrue', true);
      conditionizr.add('inlineaddfalse', false);
    });

    it('should add an object property', function () {
      expect('fakeaddtrue' in conditionizr).toBe(true);
    });

    it('should return a Boolean', function () {
      expect(conditionizr.fakeaddtrue).toBe(true);
      expect(conditionizr.fakeaddfalse).toBe(false);
    });

    it('should pass in a Boolean without callback', function () {
      expect(conditionizr.inlineaddtrue).toBe(true);
      expect(conditionizr.inlineaddfalse).toBe(false);
    });

  });

  /**
   * config()
   */
  describe('config()', function () {

    beforeEach(function () {
      conditionizr.add('fakeconfigtrue', function () {
        return true;
      });
      conditionizr.add('fakeconfigfalse', function () {
        return false;
      });
      conditionizr.config({
        assets: 'path/to/my/files/',
        tests: {
          fakeconfigtrue: ['script', 'style', 'class'],
          fakeconfigfalse: ['script', 'style', 'class']
        }
      });
    });

    it('should run the tests object for fakeconfigtrue and include the assets URI', function () {
      var script = getScriptTag('fakeconfigtrue');
      var style = getStyleTag('fakeconfigtrue');
      expect(script.src).toContain('path/to/my/files/fakeconfigtrue.js');
      expect(style.href).toContain('path/to/my/files/fakeconfigtrue.css');
      expect(document.documentElement.className).toContain('fakeconfigtrue');
    });

    it('should not run the tests object for fakeconfigfalse', function () {
      var script = getScriptTag('fakeconfigfalse');
      var style = getStyleTag('fakeconfigfalse');
      expect(script).toBe(null);
      expect(style).toBe(null);
      expect(document.documentElement.className).not.toContain('fakeconfigfalse');
    });

  });

  /**
   * load() && polyfill()
   */
  describe('load() && polyfill()', function () {

    beforeEach(function () {
      conditionizr.add('fakeloadtrue', function () {
        return true;
      });
      conditionizr.add('fakeloadfalse', function () {
        return false;
      });
      conditionizr.load('http://google.com/faketruefile.js', ['fakeloadtrue']);
      conditionizr.load('http://google.com/fakefalsefile.js', ['fakeloadfalse']);
    });

    it('should load in the faketruefile', function () {
      var script = getScriptTag('faketruefile');
      // use .toBe() here as it's important it doesn't inherit the asset path!
      expect(script.src).toBe('http://google.com/faketruefile.js');
    });

    it('should should not load in the fakefalsefile', function () {
      var script = getScriptTag('fakefalsefile');
      expect(script).toBe(null);
    });

  });

  /**
   * on()
   */
  describe('on()', function () {

    beforeEach(function () {
      conditionizr.add('faketrue', function () {
        return true;
      });
      conditionizr.add('fakefalse', function () {
        return false;
      });
    });

    it('should run a callback when the value is true', function () {
      var test = false;
      conditionizr.on('faketrue', function () {
        test = true;
      });
      expect(test).toBe(true);
    });

    it('should not run a callback when the value is false', function () {
      var test = false;
      conditionizr.on('fakefalse', function () {
        test = true;
      });
      expect(test).toBe(false);
    });

    it('should run a callback when using ! operator and false value', function () {
      var test = false;
      conditionizr.on('!fakefalse', function () {
        test = true;
      });
      expect(test).toBe(true);
    });

    it('should not run a callback when using ! operator and true value', function () {
      var test = false;
      conditionizr.on('!faketrue', function () {
        test = true;
      });
      expect(test).toBe(false);
    });

  });

});
