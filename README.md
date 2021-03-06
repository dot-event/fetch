# @dot-event/fetch

[dot-event](https://github.com/dot-event/dot-event#readme) universal HTTP fetch

![supernova](supernova.gif)

## Install

```bash
npm install dot-event @dot-event/fetch
```

## Universal

This library works both server and client side.

## Setup

```js
const dot = require("dot-event")()
require("@dot-event/fetch")(dot)
```

## Usage

```js
const { body, ok, status } = await dot.fetch({
  url: "https://google.com",
})
```

## Options

| Option | Description                                                       |
| ------ | ----------------------------------------------------------------- |
| json   | Parse response body                                               |
| store  | Save response body to [store](https://github.com/dot-event/store) |
| url    | Request URL                                                       |

## Credit

This library uses [isomorphic-unfetch](https://github.com/developit/unfetch/tree/master/packages/isomorphic-unfetch) under the hood.
