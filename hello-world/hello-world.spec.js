var HelloWorld = require('./hello-world');

describe('Hello World', function() {
  var helloWorld = new HelloWorld();

  it('should say hello with no name');

  it('should say hello to bob');

  it('should say hello to sally');
});
