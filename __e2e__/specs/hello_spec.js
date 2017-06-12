// spec.js

var url = 'http://localhost:3000/topic'

describe('Protractor Demo App1', function() {
  browser.driver.get(url);

  beforeEach(function() {
      return browser.ignoreSynchronization = true;
  });

  it('should greet the named user', function() {
    expect($('h1').getText()).toEqual('Hello');
    $('button').click();
    expect($('h1').getText()).toEqual('Hello, World!');
  });
});
