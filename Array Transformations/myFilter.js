Array.prototype.myFilter = function (callback) {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    if(callback(this[i],i,this)){
        res.push(this[i])
    }
  }

  return res;
};

let arr = [1, 2, 3, 4];

let res = arr.myFilter((num) => num > 2);

console.log(res);
