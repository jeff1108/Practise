describe('Thermostat', () => {
  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  describe('.temp', () => {
    it('start at 20C', () => {
      expect(thermostat.temp()).toEqual(20);
    });
  });

})
