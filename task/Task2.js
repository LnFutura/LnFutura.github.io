// todo: Даны три переменные a и b и с им присвоены целочисленные значения.
// Необходимо вывести значения по возрастанию.


let a = 5;
let b = 3;
let c = 2;

if(a > b){
    let temp = a
    a = b;
    b = temp;
}
if(b > c ){
    let temp = b;
    b = c;
    c = temp;
}
if(a > b) {
    let temp = a
    a = b;
    b = temp;
}
console.log(a,b,c);

