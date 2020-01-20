const fs = require("fs");
const path = require("path");

exports.getFibonacci = function(start = 1, amount = 10) {
  /* get fibonacci series starting from 'start', and give 'amount' of them */

  let a = 1,
    b = 0,
    temp,
    test = true,
    arr = [];

  /* Testing input variables */
  if (typeof start !== "number") {
    throw new Error("Start type not number!");
  }
  if (typeof amount !== "number") {
    throw new Error("Amount type not number!");
  }
  if (isNaN(Number.parseInt(start))) {
    throw new Error("Start value NaN!");
  }
  if (isNaN(Number.parseInt(amount))) {
    throw new Error("Amount value NaN!");
  }
  start = Number.parseInt(start);
  amount = Number.parseInt(amount);

  while (test) {
    temp = a;
    // a = a + a
    a = a + b;
    b = temp;
    if (b >= start) {
      if (amount > 0) {
        arr.push(b);
      } else {
        test = false;
      }
      amount--;
    }
  }
  let data = arr.join(" ");
  fs.writeFileSync("fibonacci_assignment.txt", data);
  return arr;
};
