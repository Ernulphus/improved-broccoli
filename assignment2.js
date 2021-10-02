// Due Thursday 10/7/21

// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
  for (let i = 0; i < this.length; i++)
  {
    if (this[i] === undefined) continue;
    callbackFn(this[i],i,this);
  }
  return undefined;
};

const arr = [1,2,3,,4];
// Testing foreach
console.log("Testing foreach");
arr.myEach( (x,i,t) => console.log(x,i,t));
console.log(" ");
arr.forEach( (x,i,t) => console.log(x,i,t));
console.log(" ");

// MAP //
Array.prototype.myMap = function() {

};


// FILTER //
Array.prototype.myFilter = function() {

}


// SOME //
Array.prototype.mySome = function() {
};


// EVERY //
Array.prototype.myEvery = function() {

};



// REDUCE //
Array.prototype.myReduce = function() {

};


// INCLUDES //
Array.prototype.myIncludes = function() {

};

// Come back after checking what sameValueZero is (no internet right now)

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function(*elements) {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};

