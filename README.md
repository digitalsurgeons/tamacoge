# TAMACOGE

![Stability Experimental](https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square)

> **TA**g **MA**nager **CO**de **GE**nerator

Give it a selector, an event listener, and a payload object for Google Tag Manager, and it outputs the code to add to your website.

## Usage

```js
var tamacoge = require('tamacoge')

var code = tamacoge('main > section .btn', 'click', {'event': 'click'})
```

outputs

```js
dataLayer = window.dataLayer || []
var el = document.querySelector('main > section .btn')
el.addEventListener('click', function () {
  dataLayer.push({"event":"click"})
})
```

## API

```js
var tamacoge = require('tamacoge')
```

### var code = tamacoge(selector, eventType, payload))

Output `String` of code that can be used to push the payload after the passed event type is triggered on the selector.

- `selector` (required) - Selector or path to selector. String.
- `eventType` (required) - Type of event to listen for on the selector. String.
- `payload` (required) - Data to push to Tag Manager's dataLayer.


## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install tamacoge
```

## License

MIT

