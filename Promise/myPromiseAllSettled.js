let p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res(1);
  }, 200);
});
let p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res(2);
    // console.log("hello")
  }, 500);
});
let p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res(3);
  }, 100);
});
let p4 = new Promise((res, rej) => {
  setTimeout(() => {
    rej(4);
  }, 100);
});

let arr = [p1, p2, p3, p4];

Promise.myAllSettled = function (arr) {
  return new Promise((res) => {
    let resultArray = [];
    let c=0;

    arr.forEach((element,i) => {
      element
        .then((data) => {
          resultArray[i] = { status: "success", data };
          c++;
          if (c == arr.length) {
            res(resultArray);
          }
        })

        .catch((error) => {
          resultArray [i]= { status: "failed", error };
          c++;
          if (c == arr.length) {
            res(resultArray);
          }
        });
    });
  });
};

Promise.myAllSettled(arr).then(console.log);