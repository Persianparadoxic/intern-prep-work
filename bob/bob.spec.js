var Bob = require('./bob.js');
//var abob = new aBob();
describe('Bob', function () {
  var bob = new Bob();

 
  /**
   * Are there more tests you can think of that would push the limits of
   * what Bob is capable of? How about different types of whitespace like
   * new line, carriage returns, backspaces? What are the responses Bob should
   * give in those situations and what kind of tests would be capable of
   * showing that Bob is able to handle those kinds of input?
   * 
   * What about different combinations of exclamations and questions?
   * One test already shows how this might be problematic, can you write more
   * that demonstrate the logic behind the parsing?
   * 
   * Can you think of any tests that would break Bob (i.e., where the test would fail?)
   *
   * Do you think the test below (about acronyms) is a worthwhile test? Why or why not?
   */

  it('using acronyms in regular speech (.)', function () {
    var result = bob.hey('It\'s OK if you don\'t want to go to the DMV.');
    expect(result).toEqual('Whatever.')})

  it('gets asked a simple question (?)', function () {
    var result = bob.hey('Can you stop acting so rude?');
    expect(result).toEqual('Sure.')})

  it('is shouted at (!)', function () {
    var result = bob.hey('Listen to me!');
    expect(result).toEqual('Woah, chill out!')})

  it('should reply to curse words (!)', function () {
    var result = bob.hey('@%*$!');
    expect(result).toEqual('Woah, chill out!')})

  //it('is shoted at in CAPS but no (!)', function () {
   // var result = bob.hey('STOP IT');
   // expect(result).toEqual('Woah, chill out!')})

  it('is shouted a question', function () {
    var result = bob.hey('Why are you behaving like this?!');
    expect(result).toEqual('Woah, chill out!')})

  it('is not spoken to', function () {
    var result = bob.hey('   ');
    expect(result).toEqual('Fine. Be that way!')})
});
