var n = 'booyah';
var m = 'hayboo';

var c = 0;



for(let i = 0; i < n.length; i++) {

    var x = n.split('').sort();
    var y = m.split('').sort();

    console.log(x, y)

if(x[i] === y[i]) {
    c++
} 
}

if(n.length == c) {
    console.log('YES');
} else {
    console.log('NO');
}
