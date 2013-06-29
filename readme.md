# Conditionizr [![Build Status](https://travis-ci.org/conditionizr/conditionizr.png)](https://travis-ci.org/conditionizr/conditionizr)

Conditionizr is a fast and lightweight (2KB) javascript utility that detects browser vendor - touch features and retina displays - allowing you to serve conditional JavaScript and CSS files.

## Installing with Bower
To install Conditionizr into your project using Bower, use the GitHub repository hook:

```
bower install https://github.com/conditionizr/conditionizr.git
```

## CDN installation
Conditionizr is also held on the CDNJS CloudFlare repository for CDN performance. You can grab the latest URLs below.

##### Development version:
```
//cdnjs.cloudflare.com/ajax/libs/conditionizr.js/3.0.0/conditionizr.js
```

##### Minified version:
```
//cdnjs.cloudflare.com/ajax/libs/conditionizr.js/3.0.0/conditionizr.min.js
```

##### CDN usage with relative fallback
```html
<html>
	<head>
		<script src="//cdnjs.cloudflare.com/ajax/libs/conditionizr.js/3.0.0/conditionizr.min.js"></script>
		<script>window.conditionizr || document.write('<script src="dist/conditionizr.min.js"></script>');</script>
	</head>
	<body>
	</body>
</html>
```

## Local (relative files) installation
If CDN isn't for you or available and you need to run solely off local files, drop your files into your required folders, make sure you're using the files from the `dist` folder - which is the compiled production-ready code. Ensure you place the script in the `<head>` of the document so Conditionizr can run as fast as possible.
	
```html
<html>
	<head>
		<script src="dist/conditionizr.min.js"></script>
	</head>
	<body>
	</body>
</html>
```

## Usage
Setting up Conditionizr is really easy, just call the function and set up the items you need (here's an example to load HTML5shiv and Respond.js):
```html
<html>
	<head>
		<script src="//cdnjs.cloudflare.com/ajax/libs/conditionizr.js/3.0.0/conditionizr.min.js"></script>
		<script>window.conditionizr || document.write('<script src="dist/conditionizr.min.js"></script>');</script>
		<script>
		conditionizr({
			debug      : false,
			scriptSrc  : 'js/conditionizr/',
			styleSrc   : 'css/conditionizr/',
			ieLessThan : {
				active: true,
				version: '9',
				scripts: false,
				styles: false,
				classes: true,
				customScript: // Separate polyfills with commas
					'//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.1/html5shiv.js, 
					//cdnjs.cloudflare.com/ajax/libs/respond.js/1.1.0/respond.min.js'
			},
			chrome     : { scripts: true, styles: true, classes: true, customScript: false },
			safari     : { scripts: true, styles: true, classes: true, customScript: false },
			opera      : { scripts: true, styles: true, classes: true, customScript: false },
			firefox    : { scripts: true, styles: true, classes: true, customScript: false },
			ie10       : { scripts: true, styles: true, classes: true, customScript: false },
			ie9        : { scripts: true, styles: true, classes: true, customScript: false },
			ie8        : { scripts: true, styles: true, classes: true, customScript: false },
			ie7        : { scripts: true, styles: true, classes: true, customScript: false },
			ie6        : { scripts: true, styles: true, classes: true, customScript: false },
			retina     : { scripts: true, styles: true, classes: true, customScript: false },
			touch      : { scripts: true, styles: true, classes: true, customScript: false },
			mac        : true,
			win        : true,
			x11        : true,
			linux      : true
		});
		</script>
	</head>
	<body>
	</body>
</html>
```

## Documentation
For full Conditionizr documentation and config definitions please visit the [Docs](http://conditionizr.com/docs.html) page on the website.

## Scaffolding
Project files and folder structure.

```
├── dist/
│   ├── conditionizr.js
│   └── conditionizr.min.js
├── src/
│   └── conditionizr.js
├── .editorconfig
├── .gitignore
├── .jshintrc
├── .travis.yml
├── Gruntfile.js
├── config.json
└── package.json
```

## Grunt tasks
Conditionizr comes pre-configured with `Gruntfile.js` which contains all of Grunt's tasks. These tasks are `grunt-contrib-concat` for concatenating files, `grunt-contrib-uglify` for minifying the code.

## License
MIT license