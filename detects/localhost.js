/*!
 * Localhost
 * Tests `location.host` for the `127.0.0.1` IPv4 address as well
 * as the `localhost` address name
 */
conditionizr.add('localhost', /(?:127\.0\.0\.1|localhost)/.test(location.host));
