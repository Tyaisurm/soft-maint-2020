const chai = require('chai'); // assertion library; mocha is JS test framework
//const sinon = require('sinon'); // test spies, stubs and mocks (test setup). dunno if even needed....
const {getFibonacci} = require('../fibonacci');
const fs = require('fs');
const path = require('path');

describe('getFibonacci()', function () {
    it('should not throw normal input', function () {
        let x = 5; // start
        let y = 2; // amount
        
        chai.expect(() => getFibonacci(x,y)).to.not.throw();    
      });
  it('should return an array', function () {
    let x = 5; // start
    let y = 2; // amount
    let fiboarr1 = [5,8];

    let fiboarr2 = getFibonacci(x, y);

    chai.expect(fiboarr2 instanceof Array).to.be.true;

  });
  it('should return y amount of items', function () {
    let x = 20; // start
    let y = 8; // amount
    let fiboarr1 = [21,34,55,89,144,233,377,610];

    let fiboarr2 = getFibonacci(x, y);

    chai.expect(fiboarr2.length).to.be.equal(y);
  });
  it('should return items starting from x', function () {
    let x = 87; // start
    let y = 4; // amount
    let fiboarr1 = [89,144,233,377].reverse().pop();

    let fiboarr2 = getFibonacci(x, y).reverse().pop();

    chai.expect(fiboarr1).to.be.equal(fiboarr2);
  });
  it('should return fibonacci sequence correct for 20 items', function () {
    let x = 5; // start
    let y = 20; // amount
    let fiboarr1 = [5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368];

    let fiboarr2 = getFibonacci(x, y);

    chai.expect(fiboarr1).to.eql(fiboarr2);
  });
  it('should handle nonexisting arguments', function () {
    let fiboarr1 = [1,1,2,3,5,8,13,21,34,55]
    let fiboarr2 = getFibonacci();

    chai.expect(fiboarr1).to.eql(fiboarr2);
  });
  it('should fail with invalid arguments', function () {
    let x = "asdasd"; // start
    let y; // amount

    //let fiboarr1 = getFibonacci(x, y);

    chai.expect(() => getFibonacci(x,y)).to.throw(); 
  });
  it('should write file with function output as content', function () {
    let x = 5; // start
    let y = 5; // amount
    let fiboarr1 = "5 8 13 21 34"
    
    getFibonacci(x, y);

    chai.expect(fs.existsSync("fibonacci_assignment.txt")).to.be.true;
    chai.expect(fs.readFileSync("fibonacci_assignment.txt", 'utf8')).to.equal(fiboarr1)
  });
});