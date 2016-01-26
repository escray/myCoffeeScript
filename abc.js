var Class = require("./index.js");

var A = Class({
  foo: function(a, b) {
    console.log("A#foo", a, b);
    return [a, b];
  }
});

var B = Class({
  foo: function(a, b) {
    console.log("B#foo", a, b);
    // this.super === C.prototype.super
    // this calls B.prototype.foo
     return this.super("foo", a*10, b*100);
    // fix 1
    
    //return B.prototype.super("foo", a*10, b*100);

    // return this.constructor.__super__.foo(a*10, b*100);
  }
}, A);

var C = Class({
  foo: function(a, b) {
    console.log("C#foo", a, b);
    // this.super === C.prototype.super
    // this calls B.prototype.foo
    return this.super("foo", a*10, b*100);
    // fix 1
    // console.log(this.constructor.__super__.foo);
    // return C.prototype.super("foo", a*10, b*100);
    // return this.constructor.__super__.foo(a*10, b*100);
  }
}, B);

var c = new C();
console.log(c.foo(1, 2));

var test = "test";
var tmp = function() {
    console.log(test)
    var test = "new test"
    console.log(test)
}

tmp();