// let student = {
//     name :"Francisco",
//     lastName : "Costa",
//     nickname : "Xico",
//     age : 29,
//     skills : ["Css","JavaScript","Html"]
// };

// console.log("O aluno" +" " + student.name + " " + student.lastName)

// let diasDaSemana = {
//     1: 'domingo',
//     2: 'segunda',
//     3: 'terça',
//     4: 'quarta',
//     5: 'quinta',
//     6: 'sexta',
//     7: 'sábado',
//   }; 
//   console.log(diasDaSemana['1']);

// let alunos = {
//     name:'Marta',
//     lastName : 'Silvia',
//     age:34,
//     medals : { golden :2,
//                 silver :3
//                 } }

// // console.log("A aluna" , " ", alunos.name ," ", alunos.lastName, "tem" , alunos.age , "e possui", alunos.medals.golden , "medalhas de ouro")

// // alunos["ferquencia"] = [A , B, C];
// // console.log(alunos)


let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for(let index in names) {
    console.log("olá : "+ " " + names[index])
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let index1 in car ){
    console.log("Chave :" + " " + index1 +"///" + " Valor : " + car[index1])
}
const trybeStudent = { 
    name: "Luiza",
    age: 25,
    class: 15,
    };
console.log(trybeStudent)

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(property + ' = ' + object[property]);
}




function sum(a, b) {
  a + b;
}
console.log(sum(1, 2));

// let arquivo = "Ta tudo ligado"
// let arraynomes = arquivo.split(" ");
// console.log(arraynomes);

// let numeros = [ 2,4,1,6,5,3,5,1,8,1,10];
// let maiorNumero = Math.max.apply(null, numeros);
// console.log(maiorNumero);

// function soma (a,b) {
//     return a + b;
// }

// soma(1,3);
// console.log(soma(1,3));

// let nomes1 = ["jose","xico","gi"]
// let idades = [31,29,29]

// function nomes (arraynomes,arrayidades) {
//     let arraynomeseidades = [];
//     for (let index = 0; index < arraynomes.length; index +=1){
//         arraynomeseidades.push({nome : arraynomes[index], idade : arrayidades[index]})
//     }
//     return arraynomeseidades;
// }
// console.log(nomes(nomes1,idades));

// as = ["a","b","c"]
// ab = [1,2,3]
// array = [];

// for(i in as){
//     array.push({nome : as[i], idade : ab[i]})
// }
// console.log(array);
