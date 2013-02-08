# Conditionizr

Conditionizr is a fast and lightweight (3KB) javascript utility that detects the end-users browser and pixel ratio, allowing you to serve specific conditional JavaScript and CSS files they need.

- Creators: [Todd Motto](http://toddmotto.com/), [Mark Goodyear](http://markgoodyear.com/)
- Twitter: [@toddmotto](http://twitter.com/toddmotto), [@markgdyr](http://twitter.com/markgdyr), [@conditionizr](http://conditionizr.com)
- Contributors: [Datrio](https://github.com/Datrio), [MLaritz](https://github.com/MLaritz)
- Homepage: <http://conditionizr.com>

## Documentation
Check out the documentation over at <http://conditionizr.com/docs.php>

## Features

#### Conditional free HTML tags
With legacy browsers we often see Conditionial statements wrapped around the HTML tag so the browser can use the HTML tag relevant to the browser. Conditionizr steps in to take this conditional approach one step further, detecting IE versions, and adding the relevant class-name to the HTML tag. This means no more conditional statements on the HTML tag. Conditionizr automates the process, and even has IE10 support.

#### Conditional loading
Combined with class name additions, Conditionizr has an integrated script and style loading facility, allowing you to specify which scripts and styles you'd like to load for which browser. For example, a user browsing with IE7 would first receive an 'ie7' HTML class, then receive the ie7.js and ie7.css files that Conditionizr automatically serves. Conditionizr also has a built-in custom script loader.

#### Custom scripts and polyfills
Having an optional script and stylesheet per legacy browser is fantastic, but what about a custom script? This could be a polyfill, such as HTML5 Shim, which you simply specify from a local or Google CDN source, and Conditionizr simply loads it right in when the relevant browser is in use.

#### Less than IE version loader
Alongside specific IE script and style loader, we've included an optional setting to specify a 'less than IE' version. This means that you could load a polyfill or certain script that you would like to apply to all 'less than' versions. If you were to declare 'IE9' as your less than, it would apply a 'lt-ie9' class for IE6, IE7 and IE8. Any scripts would also apply to these browser versions.

#### Markup free
Conditionizr is markup free, just simply include the plugin in your page, and let it work it's magic. Conditionizr requires very little configuration, as it's built using a JavaScript plugin style, making the process seamless. Conditionizr comes with a few simple options, giving you the ability to turn scripts, styles, custom scripts on and off, and lots of other tools in just a few minutes. The conditional scripts and styles are served dynamically, keeping markup smart and clean.

#### Cross browser bonus classes
Even modern browsers can give you the odd quirk, and built-in to Conditionizr is not only legacy browser, but modern browser detection and HTML class additions. For instance, those browsing with Google Chrome, will receive a 'chrome' class. This feature was integrated to cover all bases when developing, and over coming strenuous browser quirks.

#### Cross platform bonus classes
Browsers on different platforms may give you slightly different CSS quirks, so we haven't stopped there, Conditionizr detects the four main popular operating systems, Mac OS X, Windows, Linux and Unix, adding their CSS classes to help you out should you ever need it.

#### Automated flexible Loading
Once configured, Conditionizr only loads what the end-user needs. The built-in browser detector and script/style loader work together automatically, you just need to make sure the files for loading are present on the server. Conditionizr will instantly know which scripts and styles to load, and if any custom scripts are specified, and send them straight to the user.

#### Modernizr Compatible
Conditionizr integrates easily with Modernizr, combining the HTML classes to make your project development easier. Conditionizr takes a Modernizr-based approach with HTML classes, so we ensured it worked alongside the library. Combined with Modernizr, it's the ultimate tool for front-end web development.