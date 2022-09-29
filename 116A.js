
//var n = readline();
var prompt = require('prompt');

prompt.start();
prompt.get('number');

prompt.get('enter number', function(err, result) {

    console.log(result.numStops);

});
var m = 0;
var c = 0; 

var first = [0, 3];
var second = [2, 5];
var third = [4, 2];
var forth = [4, 0];


for (let i = 0; i < numStops; i++) {

   var count = readline().split(' ');
   count.map(e => parseInt(e));
   c = count[0] + count[1]
   if (c > m) {
    m = c;
   }
}