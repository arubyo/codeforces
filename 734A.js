var n = readline();
var str = readline().split('');
var a = 0;
var b = 0; 

for(var i = 0; i < n; i++) {
if(str[i] === 'A'){
    a++;
} else {
    b++;
}
}

if(a > b) {
    print('Anton');
} else if( b > a) {
    print('Danik');
} else {
    print('Friendship');
}