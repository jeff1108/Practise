describe('Thermostat', () => {
  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('.temp', () => {
    it('start at 20C', () => {
      expect(thermostat.temp()).toEqual(20);
    });
  });

  describe('.up', () => {
    it('can increases the temp', () => {
      expect(thermostat.up(1)).toEqual(21);
    });
  });

  describe('.down', () => {
    it('can decreases the temp', () => {
      expect(thermostat.down(1)).toEqual(19);
    });
  });

});
