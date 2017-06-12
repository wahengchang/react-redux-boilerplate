// conf.js

var _sauceUser= process.env.SAUCE_USERNAME,
  _sauceKey= process.env.SAUCE_KEY;

function genSeleniumAddress(){
      return (!process.env.IS_REMOTE)?  'http://127.0.0.1:4444/wd/hub' : "http://" + _sauceUser + ":" + _sauceKey +
              "@ondemand.saucelabs.com:80/wd/hub"
}

exports.config = {
  sauceUser: _sauceUser,
  sauceKey: _sauceKey,

  seleniumAddress: genSeleniumAddress(),
  
  specs: ['specs/*spec.js'],

  // restartBrowserBetweenTests: true,

  onPrepare: function(){
      var caps = browser.getCapabilities()
  },

  multiCapabilities: [{
    browserName: 'chrome',
    version: '41',
    platform: 'Windows 7',
    name: "chrome-tests",
    shardTestFiles: true,
    maxInstances: 25
  }],
  
  jasmineNodeOpts: {
      defaultTimeoutInterval: 10000
  },
  onComplete: function() {

    var printSessionId = function(jobName){
      browser.getSession().then(function(session) {
        console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
      });
    }
    printSessionId("Insert Job Name Here");
  }
}
