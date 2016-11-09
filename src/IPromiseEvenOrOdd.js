const evenOrOdd = () => {
  return new Promise((resolve, reject) => {
    for(let i = 0; i < 1000000000; i++) {
      ;
    }
    let now = Date.now();
    if(now & 1) {
      reject(`${now} is odd.`);
    }
    else {
      resolve(`${now} is even.`);
    }
  });
};

evenOrOdd()
  .then((x) => {
    console.log(x);
  })
  .catch((e) => {
    console.log(e);
  });
