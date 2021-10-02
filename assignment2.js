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

// MAP //
Array.prototype.myMap = function(callbackFn) {
  let newarr = new Array(this.length);
  for (let i = 0; i < this.length; i++)
  {
    if (this[i] === undefined) continue;

    newarr[i] = callbackFn(this[i],i,this);
  }
  return newarr;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  let newarr = [];
  for (let i = 0; i < this.length; i++)
  {
    if (this[i] === undefined) continue;

    if (callbackFn(this[i],i,this))
    {
      newarr.length++;
      newarr[newarr.length - 1] = this[i];
    }
  }
  return newarr;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  for (let i = 0; i < this.length; i++)
  {
    if (callbackFn(this[i], i, this))
      return true;
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  for (let i = 0; i < this.length; i++)
  {
    if (this[i] === undefined) continue;

    if (!callbackFn(this[i], i, this))
      return false;
  }
  return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn, initialValue) {
  let reduced = 0;
  if (initialValue !== undefined)
    reduced = initialValue;
  for (let i = 0; i < this.length; i++)
  {
    if (this[i] === undefined) continue;
    reduced = callbackFn(reduced, this[i], i, this);
  }

  return reduced;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement, fromIndex = 0) {
  if (fromIndex < 0)
    fromIndex = this.length + fromIndex;

  for (let i = fromIndex; i < this.length; i++)
  {
    if (this[i] === searchElement)
      return true;
  }
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement, fromIndex = 0) {
  if (fromIndex < 0)
    fromIndex = this.length + fromIndex;

  for (let i = fromIndex; i < this.length; i++)
  {
    if (this[i] === searchElement)
      return i;
  }
  return -1;
};

// PUSH //
Array.prototype.myPush = function(...elements) {
  let len = this.length;
  let argCount = elements.length;

  elements.myEach((x,i,t) =>
  {
    this.length++;
    this[len + i] = x;
  })
  return this.length;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement, fromIndex = (this.length - 1)) {
  if (fromIndex >= this.length)
  {
    fromIndex = this.length - 1;
  }
  if (fromIndex < 0)
  {
      fromIndex = (this.length - 1) + fromIndex;
  }

  for (let i = fromIndex; i >= 0; i--)
  {
      if (this[i] === searchElement)
      {
        return i;
      }
  }
  return -1;
};

// KEYS //
Object.grabKeys = function(obj) {
  let keys = [];
  for (let key in obj)
  {
    keys.myPush(key);
  }
  return keys;
};

// VALUES //
Object.grabValues = function(obj) {
  let values = [];
  for (let key in obj)
  {
    values.myPush(obj[key]);
  }
  return values;
};

/* TESTING
const arr = [1,2,3,,4];

// Testing foreach
console.log("Testing foreach");
arr.myEach( (x,i,t) => console.log(x,i,t));
console.log(" ");
arr.forEach( (x,i,t) => console.log(x,i,t));
console.log(" ");

// Testing map
console.log("Testing map");
arr2 = arr.myMap( (x, i) => x * i );
console.log(arr2);
console.log(" ");
arr2 = arr.map( (x, i) => x * i );
console.log(arr2);
console.log(" ");

// Testing filter
console.log("Testing filter");
arr2 = arr.myFilter( (x) => x%2 == 0 );
console.log(arr2);
console.log(" ");
arr2 = arr.filter( (x) => x%2 == 0 );
console.log(arr2);
console.log(" ");

// Testing some
console.log("Testing some");
console.log(arr.mySome( (x) => x - 3 == 1));
console.log(arr.some( (x) => x - 3 == 1));
console.log(" ");

// Testing every
console.log("Testing every");
console.log(arr.myEvery( (x) => x < 5));
console.log(arr.every( (x) => x < 5));
console.log(" ");

// Testing reduce
console.log("Testing reduce");
console.log(arr.myReduce((a,b) => a + b, 10));
console.log(arr.reduce((a,b) => a + b, 10));
console.log(" ");

// Testing includes
let inclarr = ["A"];
console.log("Testing includes");
console.log(inclarr.myIncludes("a"));
console.log(inclarr.includes("a"));
console.log(" ");

// Testing indexOf
console.log("Testing indexOf");
console.log(arr.myIndexOf(3));
console.log(arr.indexOf(3));
console.log(" ");

// Testing push
console.log("Testing push");
let arr3 = [1,2,3];
let arr4 = [4,5,6];
arr3.myPush(...arr4);
console.log(arr3);
arr3.myPush(7,8);
console.log(arr3);
console.log(" ");

// Testing lastIndexOf
console.log("Testing lastIndexOf");
console.log(arr.myLastIndexOf(3));
console.log(arr.lastIndexOf(3));
console.log(" ");
console.log("Testing keys");
let obj = {
  1 : "a",
  2 : "b",
  3 : "c"
}
console.log(Object.keys(obj));
console.log(Object.grabKeys(obj));
console.log(" ");

// Testing values
console.log("Testing values");
console.log(Object.values(obj));
console.log(Object.grabValues(obj));
console.log(" ");

*/