(function() {

  describe('Example Jasmine Test Suite', function() {
    it('should pass', function() {
      return expect(1 + 2).toEqual(3);
    });
    return it('should be on a supported domain', function() {
      var result;
      result = $.inArray(window.location.hostname, ['twitter.com', 'mail.google.com', 'linkedin.com', 'facebook.com', 'hootsuite.com']);
      return expect(result).toBeGreaterThan(-1);
    });
  });

}).call(this);
