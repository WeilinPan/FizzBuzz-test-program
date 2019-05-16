var should = chai.should()
describe('function fizzBuzz', function () {
  it('should be deividable by 3 and return result', function () {
    var result = fizzBuzz(6)
    result.should.be.equal('Fizz')
  })
  it('should be deividable by 5 and return result', function () {
    var result = fizzBuzz(10)
    result.should.be.equal('Buzz')
  })
  it('should be deividable by 3 & 5 and return result', function () {
    var result = fizzBuzz(15)
    result.should.be.equal('FizzBuzz')
  })
  it('should not be deividable by 3 or 5 and return result', function () {
    var result = fizzBuzz(7)
    result.should.be.equal(7)
  })
})