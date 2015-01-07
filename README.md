meteor-deb [![Build Status](https://travis-ci.org/zhouzhuojie/meteor-deb.svg?branch=master)](https://travis-ci.org/zhouzhuojie/meteor-deb)
================

Deb.js for Meteor, a very userful tool for debugging in the browser. If you mark the function with `deb()`, and everytime you run it, it will log all the details including arguments, output and stacktraces of the function.

Install
-------------
```
meteor add mrt:deb
```

Basic usage
-------------

Add `.deb()` After the definition of your functions.

```js
var calculateSomething = function(cb) {
    // ...
}.deb();
```

For coffeescript users, there is a global function `deb` and `debc`.
```coffeescript
calculateSomething = deb (cb) ->
  # ...
```

----

Example
-----------

```js
Template.hello.events({
    'click input': function () {
        console.log("You pressed the button");
    }.deb()
});

```

![](https://camo.githubusercontent.com/4aa7d221e8366270d8bd13a5e439ccc1f1e79845/687474703a2f2f776f726b2e6b726173696d697274736f6e65762e636f6d2f6769742f6465626a732f6465626a732e6a7067)

Credits
-----------
Thanks to [@krasimir](https://github.com/krasimir) for the great debugging tool.
Official Documentation for Deb.js: [https://github.com/krasimir/deb.js](https://github.com/krasimir/deb.js)


LICENSE
----------
MIT
