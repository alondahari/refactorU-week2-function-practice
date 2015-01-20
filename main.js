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

tripleFive(3);
console.log(lastLetter('hi there'));
console.log(square(3));
