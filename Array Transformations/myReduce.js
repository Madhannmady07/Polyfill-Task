Array.prototype.myReduce = function (callback, init) {
  let res = init;

  for (let i = 0; i < this.length; i++) {
    res = callback(res, this[i]);
  }

  return res;
};

let arr = [1, 2, 3];

let res = arr.myReduce((acc, num) => acc * num, 1);

console.log(res);
