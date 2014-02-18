/*! Conditionizr v4.3.0 | (c) 2014 @toddmotto, @markgdyr | MIT license | conditionizr.com */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.conditionizr = factory();
  }
})(this, function () {

  'use strict';

  var exports = {}, assets;
  var head = document.head || document.getElementsByTagName('head')[0];

  /**
   * _loader
   * @private
   * @param {String} testName Name of test dependency, or file name
   * @param {String} testDep Type of dependency
   * @param {Boolean} load True if external resource (load/polyfill)
   */
  var _loader = function (testName, testDep, load) {
    var path = load ? testName : assets + testName + (testDep === 'style' ? '.css' : '.js');
    switch (testDep) {
    case 'script':
      var script = document.createElement('script');
      script.src = path;
      head.appendChild(script);
      break;
    case 'style':
      var style = document.createElement('link');
      style.href = path;
      style.rel = 'stylesheet';
      head.appendChild(style);
      break;
    case 'class':
      document.documentElement.className += ' ' + testName;
      break;
    }
  };

  /**
   * exports.config
   * @param {Object} config Asset path and test configuration
   */
  exports.config = function (config) {
    var options = config || {};
    var tests = options.tests;
    assets = options.assets || '';
    for (var testName in tests) {
      var newTest = testName.toLowerCase();
      if (exports[newTest]) {
        var testDeps = tests[testName];
        for (var i = testDeps.length; i--;) {
          _loader(newTest, testDeps[i]);
        }
      }
    }
  };

  /**
   * exports.add
   * @param {String} testName Added test name
   * @param {Array} testDeps Dependencies for loading
   * @param {Function} testFn Evaluate test to boolean
   */
  exports.add = function (testName, testDeps, testFn) {
    var newTest = testName.toLowerCase();
    exports[newTest] = testFn();
    if (exports[newTest]) {
      for (var i = testDeps.length; i--;) {
        _loader(newTest, testDeps[i]);
      }
    }
  };

  /**
   * exports.on
   * @param {String} testName Name of test to callback for
   * @param {Function} testFn Callback on successful test
   */
  exports.on = function (testName, testFn) {
    var not = /^\!/;
    if (exports[testName.toLowerCase()] || (not.test(testName) && !exports[testName.replace(not, '')])) {
      testFn();
    }
  };

  /**
   * exports.load / exports.polyfill
   * @param {String} resource Name of resource to load
   * @param {Array} testNames Tests to load resource for
   */
  exports.load = exports.polyfill = function (resource, testNames) {
    var testDep = /\.js$/.test(resource) ? 'script' : 'style';
    for (var i = testNames.length; i--;) {
      if (exports[testNames[i].toLowerCase()]) {
        _loader(resource, testDep, true);
      }
    }
  };

  return exports;

});
