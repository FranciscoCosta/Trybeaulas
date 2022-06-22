// Ex 1 //

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index+=1){
    console.log(numbers[index]);
}

// Ex 2 //
let soma = 0;
for(let index = 0; index < numbers.length; index+=1){
    soma = soma + numbers[index];
}
console.log(soma);

// Ex 3 //

let media = (soma/numbers.length);
console.log(media);

// Ex 4 //

if (media> 20){
    console.log("valor maior que 20")
}
else {
    console.log("valor menor ou igual a 20")
}

// Ex 5 //

let maior = numbers[0];
for (let index1 = 0; index1 < numbers.length ; index1+=1){
    if (numbers[index1]> maior) {
        maior = numbers[index1];
    }
    else {
        maior = maior;
    }
}
console.log(maior);

// Ex 6 //
let impar = 0;
for (let index2 = 0; index2 < numbers.length ; index2+=1) {
    if (numbers[index2] % 2 !== 0) {
        impar = impar + 1;
    }
    else {
        impar = impar;
    }
}
if(impar>0){
    console.log(impar);
}else{
    console.log('nenhum valor ímpar encontrado');
}

// Ex 7 //

let menor = numbers[0];

for (let index3 = 0; index3 < numbers.length ; index3+=1){
    if (numbers[index3]< menor) {
        menor = numbers[index3];
    }
    else {
        menor = menor;
    }
}
console.log(menor);

// Ex 8 //

let array25 = [];
for(let index4 = 1 ; index4<= 25; index4+=1){
    array25.push([index4]);
}
console.log(array25);

// Ex 9 //

let dividido = [];
for(let index5 = 0; index5 < array25.length; index5 +=1){
    dividido.push(array25[index5]/2);
}
console.log(dividido);