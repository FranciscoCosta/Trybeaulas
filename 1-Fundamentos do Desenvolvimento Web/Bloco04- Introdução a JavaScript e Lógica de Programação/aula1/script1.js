const a = 2;
const b = 4;
const c = 4;

let adicao = a+b;
let subtracao = a-b;
let multi = a*b;
let divisao = a/b;
let mod = a%b;




console.log(adicao);
console.log(subtracao);
console.log(multi);
console.log(divisao);
console.log(mod);

if (a>b) {
    console.log(a);
} else if (a==b) {
    console.log("São numeros iguais");
}else {
    console.log(b);
}

if (a>b && a>c) {
    console.log(a);
}else if (b>a && b>c) {
    console.log(b)
}else if (c>a && c>b) {
    console.log(c)
} else {
    console.log("Existem dois ou mais numeros iguais");
}

if (a>0) {
    console.log("positive");
}
else if (a<0) {
    console.log("negative");
}else {
    console.log("0");
}

