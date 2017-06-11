var HelloWorld = require('./hello-world');

describe('Hello World', function () {
  var helloWorld = new HelloWorld();

  it('should say hello with no name', function () {
    expect(helloWorld.hello('')).toEqual('Hello, World!');
  });

  it('should say hello to bob', function () {
    expect(helloWorld.hello('Bob')).toEqual('Hello, Bob!');
  });

  it('should say hello to sally', function () {
    expect(helloWorld.hello('Sally')).toEqual('Hello, Sally!');
  });
});
