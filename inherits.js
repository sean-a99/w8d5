Function.prototype.inherits = function(SuperClass) {
  function Surrogate() {}
  Surrogate.prototype = SuperClass.prototype
  this.prototype = new Surrogate()
  this.prototype.constructor = this
}

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);
debugger

Function.prototype.inherits2 = function(SuperClass) {
  function Surrogate() {}
  Surrogate.prototype = SuperClass.prototype
  this.prototype = new Surrogate()
  this.prototype.constructor = this
}
