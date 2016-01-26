var Class = function(obj, parent) {
  
  var child;

  if(obj.hasOwnProperty('initialize')) {
    child = obj['initialize'];
  }
  else {
    child = new Function;
  }
  
  //child.__super__ = parent || Object;
  
  if (parent) {
    child.prototype = new parent();
    child.prototype.prototype = parent.prototype;
    child.prototype.constructor = child;
    child.prototype._super = child.prototype;
    child.__super__ = parent;
  }
  else
  {
    child.__super__ = Object;
  }
  
  for (var method in obj) {
    if (method != 'initialize') {
      child.prototype[method] = obj[method];
    }
  }

  var current;
  child.prototype.super = function() {
    return function() {
      // only first time assignment
      if (!current) {
        current = child;
      }
      if (arguments.length != 0) {
        
        var result;
        var temp = current;

        current = current.__super__;
        
        result = current.prototype[arguments[0]].apply(this, [].slice.call(arguments, 1));

        current = temp;
        return result;
      }
    }
  }();

  // Implement John Reig's_super Method
  var fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;

  /*
  var _super = ((parent == undefined) ? Object : parent.prototype) ;

  for (var name in obj) {
    if ( _super != Object &&
      typeof obj[name] == "function" && 
      typeof _super[name] == "function" && 
      fnTest.test(obj[name])) {
      (function(name, fn) {      
        return function() {
          
          var tmp = _super;          
          _super = _super[name];          
          var ret = fn.call(_super, arguments);
          console.log(ret);
          _super = tmp;
          return ret;
        };
      })(name, obj[name]);
    }
    else {
      obj[name];
    };
  }
  */
   var _super = function() {
    var curr = child.initialize;
    function makesuper() {
      var tmp = curr;
      curr = curr.__supper__;
      ret = curr.prototype[arguments[0]].apply(this, _list_s.call(arguments, 1, arguments.length));
      curr = tmp;
      return ret;
    }
    return makesuper;
   }

  return child;
}

module.exports = Class;