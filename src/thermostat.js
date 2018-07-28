var Thermostat = function () {
  this.temperature = 20
}

Thermostat.prototype.temp = function() {
  return this.temperature
}

Thermostat.prototype.up = function(degrees) {
  return this.temperature += degrees
}

Thermostat.prototype.down = function(degrees) {
  return this.temperature -= degrees
}
