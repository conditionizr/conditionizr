/*!
 * Conditionizr test: IE7
 */
conditionizr.add('ie7', [], function () {
    var version = false;
    /*@cc_on
        if (@_jscript_version == 5.7 && window.XMLHttpRequest && /MSIE 7\.0(?!.*IEMobile)/i.test(navigator.userAgent))
        version = true
    @*/
    return version;
});
