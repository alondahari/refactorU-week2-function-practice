var tripleFive = function(i){
  console.log('Five!');
  if (--i) tripleFive(i);
};
var lastLetter = function(str){
  return str.substr(-1,1);
};

var square = function(num){
  return num*num;
};

var toArray = function(){
  var arr = [];
  for (var i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  return arr;
};

var startsWithA = function(str){
  return (str.substr(0,1) == 'a' || str.substr(0,1) == 'A');
};


// tests
tripleFive(3);
console.log(lastLetter('hi there'));
console.log(square(3));
console.log(toArray(3,5,67,'hi'));
console.log(startsWithA('Alon'));
console.log(startsWithA('alon'));
console.log(startsWithA('Bal0on'));
