var num = parseInt(readline());
var t = 0;

for(i = 0; i < num; i++) {
    var x = readline().split(' ');
        if(parseInt(x[0]) + parseInt(x[1]) + parseInt(x[2]) > 1) {
            t++;

        }
    } print(t);
