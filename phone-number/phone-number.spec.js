var PhoneNumber = require('./phone-number');

/**
 * Write good descriptions for each of these unit tests.
 * Maintain good form by filling in the sentence:
 * ______ should _______.
 * 
 * Look at the other unit tests for the other projects for
 * good examples of proper form.
 */

describe('', function () {

  it('', function () {
    var phone = new PhoneNumber('(123) 456-7890');
    expect(phone.number()).toEqual('1234567890');
  });

  it('', function () {
    var phone = new PhoneNumber('123.456.7890');
    expect(phone.number()).toEqual('1234567890');
  });

  it('', function () {
    var phone = new PhoneNumber('555.456.7890');
    expect(phone.number()).toEqual('5554567890');
  });

  it('', function () {
    var phone = new PhoneNumber('11234567890');
    expect(phone.number()).toEqual('1234567890');
  });

  it('', function () {
    var phone = new PhoneNumber('2  1234567890');
    expect(phone.number()).toEqual('0000000000');
  });

  it('', function () {
    var phone = new PhoneNumber('991234567890');
    expect(phone.number()).toEqual('0000000000');
  });

  it('', function () {
    var phone = new PhoneNumber('123456789');
    expect(phone.number()).toEqual('0000000000');
  });

  it('', function () {
    var phone = new PhoneNumber('1234567890');
    expect(phone.areaCode()).toEqual('123');
  });

  it('', function () {
    var phone = new PhoneNumber('5554567890');
    expect(phone.areaCode()).toEqual('555');
  });

  it('', function () {
    var phone = new PhoneNumber('1234567890');
    expect(phone.toString()).toEqual('(123) 456-7890');
  });

  it('', function () {
    var phone = new PhoneNumber('5554567890');
    expect(phone.toString()).toEqual('(555) 456-7890');
  });
});
