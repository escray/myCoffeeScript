var Class = require('./');
/*
var A = Class({
    a: 1,
    fa: function() {
      return 1;
    },
    
  });
*/
var A = Class({ 
  a: 1,
  fa: function(){
    return 1;
  }
});


var B = Class({
  b: 2,
  fb: function(){
    return 2;
  },
}, A);

var b = new B();
b.c = 3;

console.log(b.c);
console.log(b.b);
console.log(b.a);

var a = new A();
console.log(a.fa());
console.log(a.b);

var b = new B();
console.log(b.fa());
console.log(b.fb());
