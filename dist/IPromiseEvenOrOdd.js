"use strict";

var evenOrOdd = function evenOrOdd() {
  return new Promise(function (resolve, reject) {
    for (var i = 0; i < 1000000000; i++) {
      ;
    }
    var now = Date.now();
    if (now & 1) {
      reject(now + " is odd.");
    } else {
      resolve(now + " is even.");
    }
  });
};

evenOrOdd().then(function (x) {
  console.log(x);
}).catch(function (e) {
  console.log(e);
});