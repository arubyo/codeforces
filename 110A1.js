
var lucky = 40047;

var a = 7;
var b = 4;


var numArr = lucky.toString().split('').map((lucky) => {
    return Number(lucky);
}
)

console.log(numArr);

let checker = arr => arr.every(v => v === a);
let checkerSecond = arr => arr.every(v => v === b);

console.log(checker(numArr))
console.log(checkerSecond(numArr))

if(checker(numArr) === false || checkerSecond === false) {
    console.log("NO")
} else{
    console.log("YES");
}


var lucky = readline().toString();

var a = 7;
var b = 4;


var numArr = lucky.split('').map((lucky) => {
    return Number(lucky);
}
)