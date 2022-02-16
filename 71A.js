
var num = readline();
for(i = 0; i < num; i++) {
    var x = readline();
    if( x.length > 10) {
        x = x[0] + [x.length - 2] + x[x.length - 1]
        print(x)
    } else{
        print(x)
    } 

}

