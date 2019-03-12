/*myCar = {
    mark: 'Ford',
    model: 'Mustang',
    year: 1969,
    parts:{
        engine: [1, 2, true, null],
        body: ['red', 'blue']
    },
    sound: function (){
        console.log('Brum brum');
    },
    drive: function(speed){
        console.log(speed + ' mph')
    }
};

console.log (myCar);
console.log (myCar.sound());
console.log (myCar.drive(120));

function f(x){
    return 2 * x + 2;
}

console.log(f(3)*10);*/

function g(a, b, x){
    return a * x +b;
}

console.log(g(2, 1, 3));

var c = 2;
var d = 1;
function h(x){
    return c * x + d;
}

console.log(h(3));