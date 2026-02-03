Array.prototype.myMap = function(callback){
    let res =  [];

    for(let i=0; i<this.length; i++){
        res.push(callback(this[i],i,this));
    }

    return res;
}





let arr = [1,2,3];

let res = arr.myMap(num => num * 2);

console.log(res);