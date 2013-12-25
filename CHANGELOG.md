# Conditionizr Changelog

## 4.1.0 (25 Decemberber, 2013)

* Rewrote `.on()`, `.add()` APIs, saving 60-80% on each API and improving performance
* Fix bug causing some `.on()` callbacks to fire twice
* Add `/tests` directory for UA-Testing
* Improve `_loader()` performance and path optimisation
* Add jsDoc code documentation
* Remove `throw new Error()` calls from the conditionizr core and used protective `if` statements which will silently fail
* Switch to reverse `for` loops for faster looping
* Removed RegExp lookup/replace inside `.load()`
* Merged `.on()` API callbacks into one `if` statement for lighter footprint
* Add test name case insensitivity, e.g. `conditionizr.on('cHrOmE' [, callback]);`
* Add MIT License file

## 4.0.0 (21 September, 2013)

* Full rewrite
* Separation of tests/detects (removal from core)
* Add Documentation
* Add `/detects` directory with approved tests inside
* Add `/media` directory with Conditionizr logo in various formats
* Ability to add custom tests
* Add `.on()`, `.add()`, `.config()`, `.load()`, `.polyfill()` APIs
* Return a public Conditionizr Object for inline `if (conditionizr.myTest)` style development

## 3.0.0 (21 September, 2013)

* Rewrote Conditionizr with better IE detection

## 2.0.0 (02 January, 2013)

* Removed jQuery dependency

## 1.0.0 (15 September, 2013)

* Initial commit
