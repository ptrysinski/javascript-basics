/*var arg=1;

var result = (arg===1) 
? 1:(x==='1')
    ? 2:(x===2)
        ?x:0;

console.log(result);

var numbers = [];

for (var i = 0; i < 10000; i++){
    numbers.push(1);
}


console.time('in loop');
for (var i = 0; i <= numbers.length; i++) {
  console.log(numbers[i]);
}
console.timeEnd('in loop')

console.time('in loop');
var length = numbers.length;
for (var i = 0; i <= length; i++) {
  console.log(numbers[i]);
}
console.timeEnd('in loop')

var numbers = [];

for (i=0; i<10; i++){
    var myNumber = Math.round((Math.random()*100)+1);
    numbers.push(myNumber);
}
for (i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

console.log("od tyłu");

for (i=9; i>=0; i--){
    console.log(numbers[i]);
}

var numbers = [];

for (i=0; i<10; i++){
    var myNumber = Math.round((Math.random()*100)+1);
    numbers.push(myNumber);
}

var numbers = [];

console.log("while");

while(numbers.length<10) {
    var myNumber = Math.round((Math.random()*100)+1);

    var found=false;
    for (var i=0; i<numbers.length; i++){
        if (myNumber == numbers[i]){
            found=true;
        }
    }

    if(!found){
        numbers.push(myNumber);
        console.log(myNumber);
    }
  
}*/

numbers = [];
while (numbers.length < 10) {
  var myNumber = Math.round((Math.random() * 100) + 1);
  if (!numbers.includes(myNumber)) {
    numbers.push(myNumber);
    console.log(myNumber);
  }
}