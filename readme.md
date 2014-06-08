# Conditionizr.js [![Build Status](https://travis-ci.org/conditionizr/conditionizr.png)](https://travis-ci.org/conditionizr/conditionizr)

Detects front-end environments and binds the results to the [conditionizr](http://conditionizr.com) Object. &lt;1KB module for async callbacks, conditional script/style loading, automated polyfilling, inline boolean evaluations, classNames for styling overrides, custom tests and more.

Read the developer [documentation](//github.com/conditionizr/conditionizr/blob/master/docs/DOCS.md).

> By [@toddmotto](//twitter.com/toddmotto) and [@markgdyr](//twitter.com/markgdyr).

## Installing with Bower
Use the repository hook:

```
bower install conditionizr
```

## Core and methods

The Conditionizr core is made up of several public methods.

#### .config()
The config API allows you to easily configure your conditional environments, once tests are added. You have a choice of loading conditional scripts, styles and class names per config test, as well as specifying an asset path to where your files are.

````js
conditionizr.config({
  assets: '/path/to/my/assets/',
  tests: {
    'safari': ['script', 'style', 'class']
  }
});
````

This would then load browser specific tweaks, or you could use the global class override:

````html
<html class="safari">
  <head>
    <script src="assets/conditionizr/safari.js"></script>
    <link href="assets/conditionizr/safari.css" rel="stylesheet">
  </head>
</html>
````

#### .add()
Custom tests can be bolted into the Conditionizr core and used with all the APIs, making your conditional coding seamless. Conditionizr will handle all the hard work for you, you just need to provide it a test that returns a boolean, true/false.

````js
conditionizr.add('safari', function () {
  return /constructor/i.test(window.HTMLElement);
});
````

#### .on()
Using .on() you can create custom callbacks for when conditional tests return true which are your best bet if you can avoid loading an external script and style, for instance if I’ve added a test for Safari, when a user is running Safari, your callback will run. This is preferred as it saves an HTTP request and improves performance.

````js
conditionizr.on('safari', function () {
  // safari
});
````

You can also ignore environment tests using `!`:

````js
conditionizr.on('!safari', function () {
  // anything but safari
});
````

Conditionizr returns an object for you to also test environment states inside expressions.

````js
if (conditionizr.safari) {
  // safari
}
````

#### .polyfill() and .load()
Polyfill and load each allow you to inject custom assets based on a conditional test. All you need is the external URI, and your predefined conditional tests to declare.

````js
conditionizr.polyfill('//html5shiv.googlecode.com/svn/trunk/html5.js', ['ie6', 'ie7', 'ie8']);
````

Using the .load() method instead of .polyfill() is purely for naming conventions to differentiate between polyfills and generic assets.

````js
conditionizr.load('//cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.5/hammer.min.js', ['ios']);
````

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using Gulp.

## Release history

- 4.4.0
  - Rewrite Jasmine unit tests, Karma spec runner, better testing
  - Convert to Gulp.js
  - Finish missing load/polyfill() and on() Jasmine unit tests
  - Modular rewrite, reduce bloat
  - Performance enhancements, less loops, clutter, reduction in size
  - Enhance private load() method for faster loading
  - Breaking change: No add dependency array, config only
- 4.3.0
  - Add CommonJS/Browserify
  - AMD bugfix
- 4.2.0
  - Add AMD support
- 4.1.0
  - Performance enhancements for `.on()` and `.add()`
  - Bugfix for `.on(!)` callbacks
  - Improve `_loader()` performance
- 4.0.0
  - Separate tests/detects from core
  - Performance rewrites
  - Add `.on()`, `.add()`, `.config()`, `.load()`, `.polyfill()` methods
  - Ship a public Object for boolean tests
  - Add `/detects` directory which hosts all detects
- 3.0.0
  - Rewrite Conditionizr with improved IE detects
- 2.0.0
  - Remove jQuery dependency
- 1.0.0
  - Initial release
