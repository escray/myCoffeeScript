var Class = require("./index.js");

var A = Class({
  foo: function(a, b) {
    return [a, b];
  }
});

var B = Class({
  foo: function(a, b) {
    return this.super("foo", a*10, b*100);
  }
}, A);

var C = Class({
  foo: function(a, b) {
    return this.super("foo", a*10, b*100);
  }
}, B);

var c = new C();
console.log(c.foo(1, 2));