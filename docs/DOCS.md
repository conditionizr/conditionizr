# Conditionizr v4.x.x Docs

Conditionizr has several public methods, _.config()_, _.add()_, _.on()_, _.load()_ and  _.polyfill()_. This document covers each of their usage and some general usage tips for Conditionizr.

## Overview
With previous versions of Conditionizr, tests were limited and loaded internally. Conditionizr now ships as just a fully-fledged API that you can add unlimited tests onto. Conditionizr adds those tests to it's internal Object and returns it for you to bolt into in the DOM, for ultimate optimisation.

## conditionizr.config()
The config method stems from previous Conditionizr versions, but with added flexibility for dependency loading. After adding your own tests, you'll be able to configure what each test executes. Your options are to be specified in an array; _script_, _style_, _class_. Declaring _script_ inside the array will load a script for the specified browser, choosing a _style_ will load a style, and choosing _class_ will add the browser's class to the `<html>` element.

#### Basic .config() setup

An example config for Safari:

````js
conditionizr.config({
    assets: 'path/to/my/assets/',
    tests: {
        safari: ['script', 'style', 'class']
    }
});
````

When the Safari browser is in use, the following output will be rendered:

````html
<html class="safari">
  <head>
    <script src="path/to/my/assets/safari.js"></script>
    <link href="path/to/my/assets/safari.css" rel="stylesheet">
  </head>
</html>
````

#### Multiple tests setup
When adding multiple tests, your config module will be a comma separated object:

````js
conditionizr.config({
    assets: '/path/to/my/assets/',
    tests: {
        'safari': ['script', 'style', 'class'],
        'chrome': ['script', 'style', 'class'],
        'firefox': ['script', 'style', 'class'],
        'opera': ['script', 'style', 'class']
    }
});
````

####  Omitting dependencies
If you want to omit dependencies, just drop them from the array, Conditionizr will only do what you tell it:

````js
conditionizr.config({
    assets: '/path/to/my/assets/',
    tests: {
        'safari': ['script'], // script
        'chrome': ['style', 'class'], // style, class
        'firefox': ['script', 'style', 'class'], // script, style, class
        'opera': ['class'] // class
    }
});
````

Dependencies can also be specified inline when using the _.add()_ API, which is covered next.


## conditionizr.add()
The first rule of the _.add()_ is that all tests must return a _boolean_ (true or false). No tests are located internally to Conditionizr, they're all added using the public API.

#### Adding a test
An example of adding a test for Safari:

````js
conditionizr.add('safari', function () {
    return /constructor/i.test(window.HTMLElement);
});
````

This is a successful browser detect for Safari, and will add your test to the Conditionizr core. Conditionizr will confirm _true_ when Safari is being used with this test, and false when it isn't.

#### Inline dependency loading using .add()
You may have noticed the empty array in the first line of the _.add()_ API. This array can be populated with _script_, _style_ and _class_ as per the config. This method can load dependencies as a standalone, without the need for the _.config()_ API. An example could be:

````js
conditionizr.add('safari', ['script', 'style', 'class'], function () {
    return /constructor/i.test(window.HTMLElement);
});
````

If no dependencies are to be added initially, you can leave the array empty and use the _.config()_ API for test configurations. To use the _.config()_ API, however, to manage your tests, you must add all tests before the _.config()_ API for them to register in the Conditionizr object.

## conditionizr.on()
Once you've got tests added, they'll immediately be available using the _.on()_ API. The _.on()_ API is a special function that allows you to run a callback for when a current environment is _true_. 

#### Environment callbacks
Taking our Safari examples from above, we could run a callback when Safari is in use:

````js
conditionizr.on('safari', function () {
    // do something for Safari
});
````

#### Negative lookups
Conditionizr's _.on()_ API also provides a negative lookup, using the standard 'not' (!) operator:

````js
conditionizr.on('!safari', function () {
    // ignore safari
});
````

## Object testing
Similar to the _.on()_ API, Conditionizr returns a public Object which can be used inline with expressions:

````js
if (conditionizr.safari) {
  // do something for Safari
} else if (conditionizr.chrome) {
  // do something for Chrome
}
````

This makes solving cross-browser quirks a breeze when you can't resort to feature patching. You can also use multiple expressions:

````js
if (conditionizr.safari && conditionizr.mac) {
  // Safari and Mac
}

if (conditionizr.safari || conditionizr.chrome) {
  // Safari or Chrome
}
````

Object tests can be used anywhere after tests are defined as they are globally accessible, which makes integration with your code seamless.

## conditionizr.polyfill()
The _.polyfill()_ method allows for seamless asset loading based on your environment. For instance, taking the popular _HTML5Shiv.js_, we can load this for legacy IE easily. In this case, our tests are IE browsers which we tell Conditionizr to load this Polyfill for all tests inside the array:

````js
conditionizr.polyfill('//html5shiv.googlecode.com/svn/trunk/html5.js', ['ie6', 'ie7', 'ie8']);
````

## conditionizr.load()
The _.load()_ method was introduced to distinguish between what is a polyfill and what is a utility/library/tool. The _.load()_ method mimics the _.polyfill()_ method.

The _.load()_ method could be used for loading something such as a touch library for iOS devices, as an example:

````js
conditionizr.load('//cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.5/hammer.min.js', ['ios']);
````

Both the _.polyfill()_ and _.load()_ method also accepts _.css_ documents, and detects them automatically for load injection, to load a CSS document you could do:

````js
conditionizr.load('//cdnjs.cloudflare.com/ajax/libs/normalize/2.1.3/normalize.min.css', ['ie6', 'ie7', 'ie8']);
````

## Basic setup
A look at the ideal order of configuration.

#### Ideal setup for multiple tests

````js
conditionizr.add('safari', function () {
    return /constructor/i.test(window.HTMLElement);
});

// define config for test(s)
conditionizr.config({
    assets: '/path/to/my/assets/',
    tests: {
        'safari': ['script', 'style', 'class']
    }
});

// use .on() callbacks
conditionizr.on('safari', function () {
    //...
});

// or Object tests
if (conditionizr.safari) {
  //...
}

// load any polyfills
conditionizr.polyfill('//html5shiv.googlecode.com/svn/trunk/html5.js', ['ie6', 'ie7', 'ie8']);

// load any generic assets
conditionizr.load('//cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.5/hammer.min.js', ['ios']);
````
