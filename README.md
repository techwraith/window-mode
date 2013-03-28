window-mode
===========

A small utility to define and check different responsive "modes" for the current window - e.g. "desktop", "tablet", or "mobile"

### Examples

```
windowMode.init();

// resize your browser to 980px or wider and run this code:
windowMode.check(); //=> "desktop"

// resize your browser to less than 980px but more than
// 768px and run it again:
windowMode.check(); //=> "tablet"

// resize your browser again, this time to less than 768px:
windowMode.check(); //=> "mobile"

// check to see if the window is in a specific mode:
windowMode.check('desktop'); //=> false
windowMode.check('mobile'); //=> true

// register a new mode
windowMode.register({name: 'really big', width: 1200, condition: '>='});

// get a list of registered modes
windowMode.modes // [{mode1...}, {mode2...}]

// optionally, use windowMode with browserify
var windowMode = require('window-mode');
```

### Install

Installing via npm is easy:

```
npm install window-mode
```

If you're not using Browserify, just include a script tag in your html:

```
<script src="path/to/window-mode.js"></script>
```
