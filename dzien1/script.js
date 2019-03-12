/*var h = 2;
console.log(h--);
console.log(h);
console.log(--h);
console.log(h);

var j = 5;
var k = '5';

console.log(j == k);
console.log(j === k);
console.log(j != k);
console.log(j !== k);

console.log(!(j == k));
console.log(j == !k);
console.log(!j == k);
console.log(!j == !k);

var a = 1;
var b = 'b';
var c = true;
var d = '1';
var e = 0;
var f = NaN;
var g = null;

console.log(a > b);
console.log(f == g);
console.log(a > d);

console.log(czyCieplo || czySlonce);
console.log(!czyCieplo || czySlonce);
console.log(czyCieplo || !czySlonce);
console.log(czyCieplo && czySlonce);
console.log(!czyCieplo && czySlonce);

var a1 = 1;

if (a1 === 1){
    console.log(1)
}
    else if(a1 == 1){
        console.log(2)
    }

    else{
        console.log(0)
    }


var czyCieplo = false;
var czySlonce = true;

var czyPiwo;

if(czyCieplo || czySlonce){
    czyPiwo = true;
} else{
    czyPiwo = false;
}

console.log(czyPiwo)
*/

var x = '1';

switch (x){
    case 1:
        console.log(1);
        break;
    case '1':
        console.log(2);
        break;
    case x:
        console.log(x);
        break;
    default:
        console.log(0);
        break;
}

