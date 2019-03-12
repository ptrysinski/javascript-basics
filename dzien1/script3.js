/*var numbers = [];
while (numbers.length < 10) {
  var myNumber = Math.round((Math.random() * 100) + 1);
  console.log(myNumber);
  if(myNumber>50){
      continue;
  }
  numbers.push(myNumber);
}

var array = [1, 2, 3, 4, 5];
console.log(array);

array.unshift(0);
array.push(6);

console.log(array);

array.shift();
array.pop();

console.log(array);*/


var array = []

var length = 6;
for (var i=0; i<length; i++){
    var myNumber = Math.round(Math.random()*100);
    array.push(myNumber);
}
console.log(array);

var startIndex = length / 2 - 2;
var endIndex = length / 2 + 2;

var newArray = array.slice(startIndex, endIndex)
console.log (newArray);