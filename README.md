meteor-deb [![Build Status](https://travis-ci.org/zhouzhuojie/meteor-deb.svg?branch=master)](https://travis-ci.org/zhouzhuojie/meteor-deb)
================

Deb.js for Meteor, a very userful tool for debugging in the browser. If you mark the function with `deb()`, and everytime you run it, it will log all the details including arguments, output and stacktraces of the function.

Install
-------------
```
mrt add deb
```

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

![](http://i.minus.com/jTPvPSSrVDLNW.jpg)

Credits
-----------
Thanks to [@krasimir](https://github.com/krasimir) for the great debugging tool.
Official Documentation for Deb.js: [https://github.com/krasimir/deb.js](https://github.com/krasimir/deb.js)


LICENSE
----------
MIT
