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