var x = readline().split(' ');

var n = x[0];
var k = x[1];

for(i = 0; i < k; i++) {
    if(n%10==0){
        n/=10;
    } else {
        n--;
    }
}
print(n);

