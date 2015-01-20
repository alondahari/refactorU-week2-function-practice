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

var excite = function(str){
  return str + '!!!';
};

var sun = function(str){
  return str.indexOf('sun') > 0;
};

var tiny = function(num){
  return (num > 0 && num < 1);
};

var getSeconds = function(str){
  return parseFloat(str.substr(0,2))*60 + parseFloat(str.substr(3,2));
};

// tests
tripleFive(3);
console.log(lastLetter('hi there'));
console.log(square(3));
console.log(toArray(3,5,67,'hi'));
console.log(startsWithA('Alon'));
console.log(startsWithA('alon'));
console.log(startsWithA('Bal0on'));
console.log(excite('yes'));
console.log(excite('go'));
console.log(sun('wow the sun\'s out!'));
console.log(sun('Damn it\'s cloudy'));
console.log(tiny(0.2));
console.log(tiny(2.2));
console.log(getSeconds('01:30'));
console.log(getSeconds('10:25'));
