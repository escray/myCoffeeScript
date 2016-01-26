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
        //console.log("here");
        current = child;
      }
      var result;
      var temp = current;
      current = current.prototype;
      var functionName = arguments[0];
      result = current.proptype[functionName].apply(this, [].slice.call(arguments, 1));
      current = temp;
      return result;
    }
    
  }();
  




  return child;
}

module.exports = Class;