# Conditionizr [![Build Status](https://travis-ci.org/conditionizr/conditionizr.png)](https://travis-ci.org/conditionizr/conditionizr)

Detecting front-end environments and conditionally loading assets. Retina, touch, legacy IE, modern browsers, custom tests and more, wrapped inside a 1KB API.

* Source: [github.com/conditionizr/conditionizr](http://github.com/conditionizr/conditionizr)
* Homepage: [conditionizr.com](http://conditionizr.com)
* Twitter: [@conditionizr](http://twitter.com/conditionizr)
* Authors: [@toddmotto](//twitter.com/toddmotto), [@markgdyr](//twitter.com/markgdyr)

## Jump start

Options for getting started with Conditionizr:

1. Download the latest stable release from
   [conditionizr.com](http://conditionizr.com)
2. Clone the git repo — `git clone
   https://github.com/toddmotto/fireshell.git` and checkout the tagged release you need
3. Install with Bower `bower install https://github.com/conditionizr/conditionizr.git`

## Documentation

Read the developer [documentation](//github.com/conditionizr/conditionizr/blob/master/docs/DOCS.md) on Conditionizr version 4 APIs. All APIs in version 4 are breaking changes from version 3 and below.

## Core and APIs

The Conditionizr core is made up of several public APIs.

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
    <script src="path/to/my/assets/js/safari.js"></script>
    <link href="path/to/my/assets/css/safari.css" rel="stylesheet">
  </head>
</html>
````

#### .add()
Custom tests can be bolted into the Conditionizr core and used with all the APIs, making your conditional coding seamless. Conditionizr will handle all the hard work for you, you just need to provide it a test that returns a boolean, true/false.

````js
conditionizr.add('safari', [], function () {
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

Using the .load() API instead of .polyfill() is purely for naming conventions to differentiate between polyfills and generic assets.

````js
conditionizr.load('//cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.5/hammer.min.js', ['ios']);
````

## License

#### The MIT License (MIT)

Copyright (c) Conditionizr

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
