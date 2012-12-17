# Meet Conditionizr, the conditional free legacy, retina, script and style loader.

Conditionizr is an intelligent jQuery plugin, that detects the end-users browser and pixel ratio, allowing you to serve specific conditional JavaScript and CSS files they need.

<http://conditionizr.com>


## Integrating Conditionizr

Conditionizr is a jQuery plugin with simple customisable options that makes integrating into any project a breeze. Conditionizr is built mainly on JavaScript, but requires jQuery to run, we recommend the latest version over at Google's CDN. After [downloading][1] Conditionizr, place the main script inside the  tag. We then recommend running your initiating script directly after your main JavaScript files using the `$('head').conditionizr();` call. 

## HTML classes (Internet Explorer)

The first feature of Conditionizr is conditional `<html>` class additions. Conditionizr automatically detects the Intenet Explorer browser in use, the same way Google Analytics does, and using reliable and official Microsoft detection methods, appends the right browser class to the browser. 

A global `ie` class is also added to the browser, allowing you to ride off for your CSS declaration hacks/fixes. Conditionizr allows you to target the global Internet Explorer class, or the browser specific class. For example, a user browsing with Internet Explorer 7, would looks like this — `<html class="ie ie7">`. 

## HTML classes (Modern browsers)

Using `userAgent` detection for modern browser sniffing can provide an effective tool for targeting even modern browsers — as they can show the odd quirk. A user browsing with chrome would look like this —  `html class="chrome">`.

## Conditional script and style loading

Conditionizr's loading script allows the user to target individual browsers, and load specific content for them. 

A typical setup for targeting IE7 would be as follows, giving you jQuery options for scripts, styles and classes. Setting each option to `true` activates the conditional loader, and providing your scripts are on the server, the conditional files will be loaded by Conditionizr. 

    ie7: {
    	styles: true, 
    	scripts: true, 
    	class: true 
    }
    

Conditionizr currently supports the following browsers: `chrome`, `safari`, `opera`, `mozilla`, `ie6`, `ie7`, `ie8`, `ie9`, `ie10`, and a Less Than IE version — `ieLessThan`. All settings by default are set to false, deactivating Conditionizr's loading tools for each browser. The browsers you need to load content for, you'll need to set each option value to true. 

A typical `<head>` section of an IE7 browser would dynamically load to this: 

	<!DOCTYPE html>
	<html class="ie ie7 lt-ie9"> // Dynamically added classes
	<head>
		<meta charset="UTF-8">
		<title>Internet Explorer 7</title>
		<link href="style.css" rel="stylesheet">
		<link href="ie7.css" rel="stylesheet"> // Dynamically loaded IE7 CSS
		<script src="ie7.js"></script> // Dynamically loaded IE7 JS
	</head>

## Custom Scripts/Polyfills

Conditionizr also allows for a custom script to be loaded per browser. You can load custom scripts for browsers and retina, either local or external. An example of how this can be used: 

    customScript: 'http://html5shiv.googlecode.com/svn/trunk/html5.js' 
    

This would then return the following: 

	<!DOCTYPE html>
	<html class="ie ie7 lt-ie9"> // Dynamically added classes
	<head>
		<meta charset="UTF-8">
		<title>Internet Explorer 7</title>
		<link href="style.css" rel="stylesheet">
		<link href="ie7.css" rel="stylesheet"> // Dynamically loaded IE7 CSS
		<script src="ie7.js"></script> // Dynamically loaded IE7 JS
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script> // Dynamically loaded Custom Script/Polyfill
	</head>
    

## ieLessThan loading

Another powerful feature within Conditionizr is specifying a Less Than IE specific loader. This allows you to specify a Less Than supported version, and a `lt-ie#` class with the number specified will be applied. Here's how to configure a less than IE version, and an example setup for Less Than IE9: 

    ieLessThan : {
    	active: true, 
    	version: '9', 
    	scripts: false, 
    	styles: false, 
    	class: true 
    }
    

If you're needing to load files for IE6, IE7, IE8, and specify less than IE9, any browsers Less Than IE9 will receive this as an HTML class — `<html class="ie ie7 lt-ie9">`.

## Conditional content directory

To load your conditional scripts and styles, you'll need to include them only on the server, not the markup. By default, Conditionizr includes a default directory, which you can change using the following options: 

    scriptSrc: 'custom/script/folder/js/',
    styleSrc: 'custom/style/folder/css/',
    

This will then load any folders inside your specified directories, preferably keeping things clean in their own `/css/` and `/js/` directories. 

## Retina detection and loading

Retina detection doesn't come as standard in any open—source development tools, so we've included it inside Conditionizr. Conditionizr will detect if the viewing device is retina, and simply add a `retina` or `no-retina` class depending on the outcome. This allows you to target the global `<html class="retina">` attribute and make CSS adjustments without media queries, making it much simpler for optimising for Retina displays. 

Alongside retina detection and loading, it has it's own loading script, which when set `true` on values will let Conditionizr dynamically load the retina content: 

    retina: { 
    	styles: true, 
    	scripts: true, 
    	class: true 
    }
    

## OS detection

Alongside retina, Internet Explorer, modern browser HTML classes, we've also included Operating System specific classes that detects the user's platform, which again you can is set to `true`, but you can turn these off by setting the value to `false`. Here's how you'd configure the Operating System options: 

    mac: true, 
    win: true, 
    x11: true, 
    linux: true 
    

## The full HTML tag

Here's how the HTML class would look whilst running Conditionizr, browsing with Chrome, on a non—retina display on a Mac: 

    <html id="conditionizr" class="chrome no-retina mac">
    

## The full settings and options

Get started with Conditionizr with the below code snippet: 

    
    <script>
		$(function() {
			$('head').conditionizr({
				debug      : false,
				scriptSrc  : 'js/conditionizr/',
				styleSrc   : 'css/conditionizr/',
				ieLessThan : { active: false, version: '9', scripts: false, styles: false, class: true, customScript: 'none'},
				chrome     : { scripts: false, styles: false, class: true, customScript: 'none' },
				safari     : { scripts: false, styles: false, class: true, customScript: 'none' },
				opera      : { scripts: false, styles: false, class: true, customScript: 'none' },
				firefox    : { scripts: false, styles: false, class: true, customScript: 'none' },
				ie10       : { scripts: false, styles: false, class: true, customScript: 'none' },
				ie9        : { scripts: false, styles: false, class: true, customScript: 'none' },
				ie8        : { scripts: false, styles: false, class: true, customScript: 'none' },
				ie7        : { scripts: false, styles: false, class: true, customScript: 'none' },
				ie6        : { scripts: false, styles: false, class: true, customScript: 'none' },
				retina     : { scripts: false, styles: false, class: true, customScript: 'none' },
				mac        : true,
				win        : true,
				x11        : true,
				linux      : true
			});
		});
		</script>    
    

## Console Log

We've setup Console Log options should the user wish to run some tests before rolling live to production. You can configure these like so: 

    if (settings.debug === true) {
    	console.log('Start Conditionizr Debugn');
    	console.log('Script location: ' %2B settings.scriptSrc);
    	console.log('Style location: ' %2B settings.styleSrc);
    	console.log('Browser: ' %2B theBrowser);
    	console.log('nEnd Conditionizr Debugn');
    }

 [1]: http://conditionizr.com  