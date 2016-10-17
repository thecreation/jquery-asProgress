# [jQuery asProgress](https://github.com/amazingSurge/jquery-asProgress) ![bower][bower-image] [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url] [![prs-welcome]](#contributing)

> A jQuery plugin that animate the progress bar.

## Table of contents
- [Main files](#main-files)
- [Quick start](#quick-start)
- [Requirements](#requirements)
- [Usage](#usage)
- [Examples](#examples)
- [Options](#options)
- [Methods](#methods)
- [Events](#events)
- [No conflict](#no-conflict)
- [Browser support](#browser-support)
- [Contributing](#contributing)
- [Development](#development)
- [Changelog](#changelog)
- [Copyright and license](#copyright-and-license)

## Main files
```
dist/
├── jquery-asProgress.js
├── jquery-asProgress.es.js
├── jquery-asProgress.min.js
└── css/
    ├── asProgress.css
    └── asProgress.min.css
```

## Quick start
Several quick start options are available:
#### Download the latest build

 * [Development](https://raw.githubusercontent.com/amazingSurge/jquery-asProgress/master/dist/jquery-asProgress.js) - unminified
 * [Production](https://raw.githubusercontent.com/amazingSurge/jquery-asProgress/master/dist/jquery-asProgress.min.js) - minified

#### Install From Bower
```sh
bower install jquery-asProgress --save
```

#### Install From Npm
```sh
npm install jquery-asProgress --save
```

#### Install From Yarn
```sh
yarn add jquery-asProgress
```

#### Build From Source
If you want build from source:

```sh
git clone git@github.com:amazingSurge/jquery-asProgress.git
cd jquery-asProgress
npm install
npm install -g gulp-cli babel-cli
gulp build
```

Done!

## Requirements
`jquery-asProgress` requires the latest version of [`jQuery`](https://jquery.com/download/).

## Usage
#### Including files:

```html
<link rel="stylesheet" href="/path/to/asProgress.css">
<script src="/path/to/jquery.js"></script>
<script src="/path/to/jquery-asProgress.js"></script>
```

#### Required HTML structure

```html
<div class="progress" role="progressbar" data-goal="100" aria-valuemin="0" data-step="2" aria-valuemax="100">
  <div class="progress__meter"><span class="progress__label"></span></div>
</div>
```

#### Initialization
All you need to do is call the plugin on the element:

```javascript
jQuery(function($) {
  $('.progress').asProgress({
    namespace: 'progress',
  }); 
});
```

## Examples
There are some example usages that you can look at to get started. They can be found in the
[examples folder](https://github.com/amazingSurge/jquery-asProgress/tree/master/examples).

## Options
`jquery-asProgress` can accept an options object to alter the way it behaves. You can see the default options by call `$.asProgress.setDefaults()`. The structure of an options object is as follows:

```
{
  namespace: 'progress',
  bootstrap: false,
  min: 0,
  max: 100,
  goal: 100,
  speed: 20, // speed of 1/100
  easing: 'ease',
  labelCallback(n) {
    const percentage = this.getPercentage(n);
    return `${percentage}%`;
  },
  
  // callbacks
  onStart: function(){},
  onStop: function(){},
  onUpdate: function(){},
  onFinish: function(){},
  onReset: function(){}
}
```

## Methods
Methods are called on asProgress instances through the asProgress method itself.
You can also save the instances to variable for further use.

```javascript
// call directly
$().asProgress('start');

// or
var api = $().data('asProgress');
api.start();
```

#### start()
Start the progress animation.
```javascript
$().asProgress('start');
```

#### stop()
Stop the progress animation.
```javascript
$().asProgress('stop');
```

#### finish()
Finish the progress animation. The progress value will update to the goal value immediately.
```javascript
$().asProgress('finish');
```

#### reset()
Reset the progress to first value.
```javascript
$().asProgress('reset');
```

#### go(value)
Update the progress to the specific value.
```javascript
$().asProgress("go", 50);
$().asProgress("go", '50%');
```

#### enable()
Enable the progress animate functions.
```javascript
$().asProgress('enable');
```

#### disable()
Disable the progress animate functions.
```javascript
$().asProgress('disable');
```

#### destroy()
Destroy the progress instance.
```javascript
$().asProgress('destroy');
```

## Events
`jquery-asProgress` provides custom events for the plugin’s unique actions. 

```javascript
$('.the-element').on('asProgress::ready', function (e) {
  // on instance ready
});

```

Event   | Description
------- | -----------
init    | Fires when the instance is setup for the first time.
ready   | Fires when the instance is ready for API use.
start   | Fired when the `start` instance method has been called.
stop    | Fired when the `stop` instance method has been called.
update  | Fires when the progress value is changing. 
finish  | Fires when the animation is finished, Or the `finish` instance method has been called.
reset   | Fired when the `reset` instance method has been called.
destroy | Fires when an instance is destroyed. 

## No conflict
If you have to use other plugin with the same namespace, just call the `$.asProgress.noConflict` method to revert to it.

```html
<script src="other-plugin.js"></script>
<script src="jquery-asProgress.js"></script>
<script>
  $.asProgress.noConflict();
  // Code that uses other plugin's "$().asProgress" can follow here.
</script>
```

## Browser support

Tested on all major browsers.

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/safari/safari_32x32.png" alt="Safari"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/chrome/chrome_32x32.png" alt="Chrome"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/firefox/firefox_32x32.png" alt="Firefox"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/edge/edge_32x32.png" alt="Edge"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/internet-explorer/internet-explorer_32x32.png" alt="IE"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/opera/opera_32x32.png" alt="Opera"> |
|:--:|:--:|:--:|:--:|:--:|:--:|
| Latest ✓ | Latest ✓ | Latest ✓ | Latest ✓ | 9-11 ✓ | Latest ✓ |

As a jQuery plugin, you also need to see the [jQuery Browser Support](http://jquery.com/browser-support/).

## Contributing
Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md). Make sure you're using the latest version of `jquery-asProgress` before submitting an issue. There are several ways to help out:

* [Bug reports](CONTRIBUTING.md#bug-reports)
* [Feature requests](CONTRIBUTING.md#feature-requests)
* [Pull requests](CONTRIBUTING.md#pull-requests)
* Write test cases for open bug issues
* Contribute to the documentation

## Development
`jquery-asProgress` is built modularly and uses Gulp as a build system to build its distributable files. To install the necessary dependencies for the build system, please run:

```sh
npm install -g gulp
npm install -g babel-cli
npm install
```

Then you can generate new distributable files from the sources, using:
```
gulp build
```

More gulp tasks can be found [here](CONTRIBUTING.md#available-tasks).

## Changelog
To see the list of recent changes, see [Releases section](https://github.com/amazingSurge/jquery-asProgress/releases).

## Copyright and license
Copyright (C) 2016 amazingSurge.

Licensed under [the LGPL license](LICENSE).

[⬆ back to top](#table-of-contents)

[bower-image]: https://img.shields.io/bower/v/jquery-asProgress.svg?style=flat
[bower-link]: https://david-dm.org/amazingSurge/jquery-asProgress/dev-status.svg
[npm-image]: https://badge.fury.io/js/jquery-asProgress.svg?style=flat
[npm-url]: https://npmjs.org/package/jquery-asProgress
[license]: https://img.shields.io/npm/l/jquery-asProgress.svg?style=flat
[prs-welcome]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[daviddm-image]: https://david-dm.org/amazingSurge/jquery-asProgress.svg?style=flat
[daviddm-url]: https://david-dm.org/amazingSurge/jquery-asProgress