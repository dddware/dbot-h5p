var AsyncSpec = require('jasmine-async')(jasmine)
  , h5p = require('./dbot-h5p');

// Mock regex matches
var request = 'fontface'
  , matches = ['', request]
  , expectation = "fontface:\nInternet Explorer: 9\nFirefox: 3.5\nChrome: 4\nSafari (desktop): 3.2\nOpera (desktop): 10.0-10.1\nSafari (iOS): 4.2-4.3\nOpera (mobile): 10\n";

describe('h5p', function () {
  var async = new AsyncSpec(this)
    , asyncResult;

  async.it('should retrieve expected results', function (done) {
    h5p.callback(matches).then(function (result) {
      expect(result).toEqual(expectation);

      done();
    });
  });
});