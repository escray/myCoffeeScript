var Class = function(obj, parent) {
  
  var child;

  if(obj.hasOwnProperty('initialize')) {
    child = obj['initialize'];
  }
  else {
    child = new Function;
  }
  
  obj.__super__ = parent || Object;
  
  if (parent) {
    child.prototype = new parent();
    child.prototype.prototype = parent.prototype;
    child.prototype.constructor = child;
    child.prototype._super = child.prototype;
  }
  
  

  for (var method in obj) {
    if (method != 'initialize') {
      child.prototype[method] = obj[method];
    }
  }

  




  return child;
}

module.exports = Class;