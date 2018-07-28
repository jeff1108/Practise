describe('Thermostate', () => {
  var thermostate

  beforeEach(function() {
    thermostate = new Thermostate();
  })

  describe('.temp', () => {
    it('start at 20C', () => {
      expect(thermostate.temp()).toEqual(20);
    });
  });

})
