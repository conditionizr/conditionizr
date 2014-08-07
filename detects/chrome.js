/*!
 * Chrome
 * We return `!!window.chrome` to test the truthy value,
 * but Opera 14+ responds true to this, so we need to test
 * the `navigator.vendor` to make sure it's from Google
 */
conditionizr.add('chrome', !!window.chrome && /google/i.test(navigator.vendor));
