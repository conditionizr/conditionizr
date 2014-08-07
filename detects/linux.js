/*!
 * Linux
 * Test the `navigator.platform` but
 * ignore any android phones
 */
conditionizr.add('linux', /linux/i.test(navigator.platform) && !/android|cros/i.test(navigator.userAgent));
