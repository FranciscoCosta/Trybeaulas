// Ex 1//

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


// Ex 2//
if (a>b) {
    console.log(a);
} else if (a==b) {
    console.log("São numeros iguais");
}else {
    console.log(b);
}
// Ex 3//
if (a>b && a>c) {
    console.log(a);
}else if (b>a && b>c) {
    console.log(b)
}else if (c>a && c>b) {
    console.log(c)
} else {
    console.log("Existem dois ou mais numeros iguais");
}
// Ex 4//
if (a>0) {
    console.log("positive");
}
else if (a<0) {
    console.log("negative");
}else {
    console.log("0");
}
// Ex 5//
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
// Ex 6//
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


// Ex 7//
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
// Ex 8//
const num1 = 1;
const num2 = 3;
const num3 = 5;

if (num1%2 == 0 || num2%2 == 0 || num3%2 == 0) {
    console.log(true);
}else {
    console.log(false);
}
// Ex 9//
if (num1%2 != 0 || num2%2 != 0 || num3%2 != 0) {
    console.log(true);
}else {
    console.log(false);
}

// Ex 10//

let compra =100;
let venda = 200;

let Custototal = compra*1.20;
let lucro = venda - Custototal;

if (compra < 0 || venda <0 ) {
    console.log("Error valor não válido")
} else {
    console.log(lucro, "$$$")
}
// Ex 11//

let salarioBruto = 5000;
let salarioBase = 0;
let INSS = 0;

if (salarioBruto <= 1556.94) {
    INSS = 0.08;
    salarioBase = salarioBruto - (salarioBruto * INSS);
}else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    INSS = 0.09;
    salarioBase = salarioBruto - (salarioBruto * INSS);
}else if (salarioBruto >= 2594.93 && salarioBruto <=  5189.82) {
    INSS = 0.11;
    salarioBase = salarioBruto - (salarioBruto * INSS);
}else if (salarioBruto >= 5189.82 ) {
    INSSV = 570.88;
    salarioBase = salarioBruto - INSSV;
}else {
    console.log("Intruduza valores válidos")
}

if (salarioBase<= 1903.98) {
    salarioLiquido = salarioBase;
}else if (salarioBase>= 1903.99 && salarioBase<= 2826.25) {
    Aliquota = 0.075;
    Parcela = 142.80;
    IR = (salarioBase* Aliquota) - Parcela;
    salarioLiquido = salarioBase - IR;
}else if (salarioBase>= 2826.66 && salarioBase<= 3751.05) {
    Aliquota = 0.15;
    Parcela = 354.80;
    IR = (salarioBase* Aliquota) - Parcela;
    salarioLiquido = salarioBase - IR;
}else if (salarioBase>= 3751.06 && salarioBase<= 4664.68) {
    Aliquota = 0.225;
    Parcela = 636.13;
    IR = (salarioBase* Aliquota) - Parcela;
    salarioLiquido = salarioBase - IR;
}else if (salarioBase>= 4664.68) {
    Aliquota = 0.275;
    Parcela = 869.36;
    IR = (salarioBase* Aliquota) - Parcela;
    salarioLiquido = salarioBase - IR;
}else {
    console.log("Intruduza valores válidos");
}

console.log("o Salário liquido é de :" , salarioLiquido);
