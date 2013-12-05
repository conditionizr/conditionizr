/*!
 * Conditionizr test: IE6
 */
conditionizr.add('ie6', [], function () {
    var version = false;
    /*@cc_on
        if (@_jscript_version == 5.6 || (@_jscript_version == 5.7 && /MSIE 6\.0/i.test(navigator.userAgent)))
        version = true
    @*/
    return version;
});
