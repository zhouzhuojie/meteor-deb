meteor-deb [![Build Status](https://travis-ci.org/zhouzhuojie/meteor-deb.svg?branch=master)](https://travis-ci.org/zhouzhuojie/meteor-deb)
================

Deb.js for Meteor

Basic usage
-------------

Add `.deb()` After the definition if your functions.

```js
var calculateSomething = function(cb) {
    // ...
}.deb();
```

For coffeescript users, there is a global function `deb` and `debc`.
```coffeescript
calculateSomething = deb (cb) ->
    // ...
    cb()
    return somethingElse
```

More
-----------

Official Documentation for Deb.js: [https://github.com/krasimir/deb.js](https://github.com/krasimir/deb.js)
