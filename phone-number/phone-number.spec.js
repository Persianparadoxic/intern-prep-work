var PhoneNumber = require('./phone-number');

/**
 * Write good descriptions for each of these unit tests.
 * Maintain good form by filling in the sentence:
 * ______ should _______.
 * 
 * Look at the other unit tests for the other projects for
 * good examples of proper form.
 */

describe('number()', function () {

  it('should remove spaces, parentheses, and dashes from 10 digits starting with 1', function () {
    var phone = new PhoneNumber('(123) 456-7890');
    expect(phone.number()).toEqual('1234567890');
  });

  it('should remove (.)s from 10 digits stating with 1', function () {
    var phone = new PhoneNumber('123.456.7890');
    expect(phone.number()).toEqual('1234567890');
  });

  it('should remove (.s) from 10 digits starting with !1', function () {
    var phone = new PhoneNumber('555.456.7890');
    expect(phone.number()).toEqual('5554567890');
  });

  it('should remove the 1 in front of an 11 digit number', function () {
    var phone = new PhoneNumber('11234567890');
    expect(phone.number()).toEqual('1234567890');
  });

  it('should return 00.... for an 11 digit number !starting with 1', function () {
    var phone = new PhoneNumber('2  1234567890');
    expect(phone.number()).toEqual('0000000000');
  });

  it('should return 00.... for a 12+ digit number !starting with 1', function () {
    var phone = new PhoneNumber('991234567890');
    expect(phone.number()).toEqual('0000000000');
  });

  it('should return 00.... to a number less than 9 digits', function () {
    var phone = new PhoneNumber('123456789');
    expect(phone.number()).toEqual('0000000000');
  });
});

describe('areaCode()', function () {

  it('should return the first three digits of a 10 digit number starting with 1', function () {
    var phone = new PhoneNumber('1234567890');
    expect(phone.areaCode()).toEqual('123');
  });

  it('should return the first three digits of a 10 digit number starting with !1', function () {
    var phone = new PhoneNumber('5554567890');
    expect(phone.areaCode()).toEqual('555');
  });
});

describe('toString()', function () {
  it('should add parenthesis around the first three digits of a 10 digit number !starting with 1, add a space, then the next three numbers, a dash, and the final four digits.', function () {
    var phone = new PhoneNumber('5554567890');
    expect(phone.toString()).toEqual('(555) 456-7890');
  });
    it('should add parenthesis around the first three digits of a 10 digit number starting with 1, add a space, then the next three numbers, a dash, and the final four digits.', function () {
    var phone = new PhoneNumber('1234567890');
    expect(phone.toString()).toEqual('(123) 456-7890');
  });
});