var Thermostat = function () {
  this.temperature = 20
  this.minimum = 10
}

Thermostat.prototype.temp = function() {
  return this.temperature
}

Thermostat.prototype.up = function(degrees) {
  return this.temperature += degrees
}

Thermostat.prototype.down = function(degrees) {
  if(this.temperature - degrees < this.minimum) {
    throw new Error('lower than minimum degree')
  } else {
    this.temperature -= degrees
  }
  return this.temperature
}
