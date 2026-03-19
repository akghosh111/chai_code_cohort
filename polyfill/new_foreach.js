const arr = [1,2,3,4,5];

function printSomething(el) {
    console.log(el);
}

Array.prototype.newForEach = function (cb) {
    for(let i= 0; i< this.length; i++) {
        cb(this[i], i, this);
    }
};

arr.newForEach(printSomething);