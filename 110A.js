var lucky = readline();

var c = 0;

for(i = 0; i < lucky.length; i++) {
    if(lucky[i] === 7 || lucky[i] === 4) {
        c++
    } 
}

if(c === 4 || c === 7) {
    print("YES");
} else{
    print("NO");
}
