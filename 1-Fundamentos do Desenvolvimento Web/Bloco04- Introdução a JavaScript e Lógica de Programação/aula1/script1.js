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



const ang1 = 60;
const ang2 = 60;
const ang3 = 60;

if (ang1 + ang2 + ang3 == 180) {
    console.log(true);
}else if (ang1<0 || ang2<0 || ang3<0) {
    console.log("Inválido")
}
else {
    console.log(false);
}

let peca = "Cavalo";
let resultado = peca.toLowerCase();

if(peca ="peão") {
    console.log("1 casa para a frente ou na diagonal em caso de captura");
}
else if (peca= torre){
    console.log("todas as casas na vertical ou horizontal");
}
else if (peca= cavalo){
    console.log("Movimenta-se sempre eum L (2 casas horizontal e uma vertical ou vice versa");
}
else if (peca=bispo){
    console.log("todas as casas na diagonal");
}
else if (peca= rei){
    console.log("1 casa em qualquer direção");
}
else if (peca= rainha){
    console.log("todas as casas na vertical horizontal ou diagonal");
}
 else {
    console.log("Adicione uma peça válida");
}

let nota = 59;

if (nota>89 && nota <101) {
    console.log("A");
}else if (nota>79 && nota <90){
    console.log("B");
}else if (nota>69 && nota <80){
    console.log("C");
}else if (nota>59 && nota <70){
    console.log("D");
}else if (nota>49 && nota <60){
    console.log("E");
}else if (nota>0 && nota <50){
    console.log("F");
}else {
    console.log("Resultado Inválido");
}