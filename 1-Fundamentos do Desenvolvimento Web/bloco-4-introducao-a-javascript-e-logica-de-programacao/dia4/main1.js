// Ex 1 //
console.log("Inicio exercicio 1");
console.log("///////////////////");
console.log(" ");

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log("Bem vinda ," + " " + info.personagem);
console.log("");

// Ex 2 //

console.log("Inicio exercicio 2");
console.log("///////////////////");
console.log(" ");

info["recorrente"] = "sim";
console.log(info);
console.log("");

// Ex 3 //

console.log("Inicio exercicio 3");
console.log("///////////////////");
console.log(" ");

for (i in info) {
  console.log(i);
}
console.log("");

// EX 4 //

console.log("Inicio exercicio 4");
console.log("///////////////////");
console.log(" ");

for (i in info) {
  console.log(info[i]);
}
console.log("");

// Ex 5 //

console.log("Inicio exercicio 5");
console.log("///////////////////");
console.log(" ");

let info1 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dells Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "sim",
};
for (i in info1) {
  console.log(info[i] + " " + "e" + " " + info1[i]);
}
console.log("");

// Ex 6 //

console.log("Inicio exercicio 6");
console.log("///////////////////");
console.log(" ");

let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

console.log(
  "O livro favorito de" +
    " " +
    leitor.nome +
    " " +
    leitor.sobrenome +
    " " +
    " se chama" +
    " " +
    leitor.livrosFavoritos[0].titulo +
    "!"
);
console.log("");

// Ex 7 //

console.log("Inicio exercicio 7");
console.log("///////////////////");
console.log(" ");

console.log(leitor.livrosFavoritos);

leitor.livrosFavoritos[""] = {
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editora: "Rocco",
};
console.log(leitor);

// Ex 8 //

console.log("Inicio exercicio 8");
console.log("///////////////////");
console.log(" ");

let size = Object.keys(leitor.livrosFavoritos).length;

console.log(leitor.nome + " " + "tem " + size + " " + "livros favoritos");

// Ex Funções //

// Ex 1 //

console.log("Inicio exercicio 1");
console.log("///////////////////");
console.log(" ");

function verificaPalindrome(palavra) {
  comp = [];
  for (i in palavra) {
    comp.unshift(palavra[i]);
  }
  let junto = comp.join("");
  if (junto == palavra) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaPalindrome("teste"));

// Ex 2 //

console.log("Inicio exercicio 2");
console.log("///////////////////");
console.log(" ");

function maximo(array) {
  var max = Math.max(...array);
  max1 = array.indexOf(max);
  return max1;
}
console.log(maximo([1, 4, 6, 3, 2]));

// Ex 3 //

console.log("Inicio exercicio 3");
console.log("///////////////////");
console.log(" ");

function minimo(array) {
  var min = Math.min(...array);
  return min;
}
console.log(minimo([5, 4, 6, 3, 2]));

// Ex 4 //

console.log("Inicio exercicio 4");
console.log("///////////////////");
console.log(" ");

function contaltras(array) {
  let cont = 0;
  palavra = "";
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > cont) {
      palavra = array[i];
      cont = array[i].length;
    } else {
      palavra = palavra;
      cont = cont;
    }
  }
  return palavra;
}

console.log(contaltras(["asdasdasd", "asdasda", "asd"]));

// Ex 5 //

console.log("Inicio exercicio 5");
console.log("///////////////////");
console.log(" ");

function contador(array) {
  let cont = 0;
  let maxCont = 1;
  let item;
  for (let i = 0; i < array.length; i += 1) {
    for (let i1 = 0; i1 < array.length; i1 += 1) {
      if (array[i] == array[i1]) {
        cont += 1;
      }
      if (cont > maxCont) {
        maxCont = cont;
        item = array[i];
      }
    }
    cont = 0;
  }
  return item;
}

console.log(contador([5, 4, 6, 3, 2, 2, 2, 4, 1]));

// Ex 6 //

console.log("Inicio exercicio 6");
console.log("///////////////////");
console.log(" ");

function somador(n) {
  soma = 0;
  for (let i = 1; i <= n; i += 1) {
    soma += i;
  }
  return soma;
}
console.log(somador(5));

// Ex 7 //

console.log("Inicio exercicio 7");
console.log("///////////////////");
console.log(" ");

function verificaFimPalavra(string1, string2) {
  teste = string1.indexOf(string2, string1.length - string2.length);
  if (teste !== 1) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaFimPalavra("Trybe", "be"));

// Bonus 1//

console.log("Inicio exercicio 1");
console.log("///////////////////");
console.log(" ");

numeros = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

string = "XIV";

function romanosInt(string) {
  let soma = 0;
  for (let i = 0; i < string.length; i += 1) {
    for (j in numeros) {
      if (string[i] === j) {
        if (numeros[string[i]] < numeros[string[i + 1]]) {
          soma = soma - numeros[string[i]];
        } else {
          soma = soma + numeros[string[i]];
        }
      }
    }
  }
  return soma;
}
console.log(romanosInt("XIV"));

// Bonus 2//

console.log("Inicio exercicio 2");
console.log("///////////////////");
console.log(" ");

function arrayOfNumbers(vector) {
  let par = [];
  for (let i = 0; i < vector.length; i += 1) {
    for (index of vector[i]) {
      if (index % 2 == 0) {
        par.push(index);
      }
    }
  }
  return par;
}

console.log(
  arrayOfNumbers([
    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
  ])
);

// Bonus 3//

console.log("Inicio exercicio 3");
console.log("///////////////////");
console.log(" ");

const basket = [
  "Melancia",
  "Abacate",
  "Melancia",
  "Melancia",
  "Uva",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Uva",
  "Laranja",
  "Melancia",
  "Banana",
  "Uva",
  "Pera",
  "Abacate",
  "Laranja",
  "Abacate",
  "Banana",
  "Melancia",
  "Laranja",
  "Laranja",
  "Jaca",
  "Uva",
  "Banana",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Uva",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Melancia",
  "Melancia",
  "Laranja",
  "Pera",
  "Banana",
  "Jaca",
  "Laranja",
  "Melancia",
  "Abacate",
  "Abacate",
  "Pera",
  "Melancia",
  "Banana",
  "Banana",
  "Abacate",
  "Uva",
  "Laranja",
  "Banana",
  "Abacate",
  "Uva",
  "Uva",
  "Abacate",
  "Abacate",
  "Melancia",
  "Uva",
  "Jaca",
  "Uva",
  "Banana",
  "Abacate",
  "Banana",
  "Uva",
  "Banana",
  "Laranja",
  "Laranja",
  "Jaca",
  "Jaca",
  "Abacate",
  "Jaca",
  "Laranja",
  "Melancia",
  "Pera",
  "Jaca",
  "Melancia",
  "Uva",
  "Abacate",
  "Jaca",
  "Jaca",
  "Abacate",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Jaca",
  "Pera",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Jaca",
  "Banana",
  "Laranja",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Uva",
];
fruta = {};
conta = 0;
final = [];
function contaFruta(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (j of basket) {
      if (j == array[i]) {
        conta += 1;
        fruta[j] = conta;
      }
    }
    conta = 0;
    final.push(fruta);
  }
  return final;
}

console.log(contaFruta(["Melancia", "Abacate", "Melancia", "Melancia", "Uva"]));

// Bonus 4 //

console.log("Inicio exercicio 4");
console.log("///////////////////");
console.log(" ");

let moradores = {
  blocoUm: [
    {
      nome: "Luiza",
      sobrenome: "Guimarães",
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: "William",
      sobrenome: "Albuquerque",
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: "Murilo",
      sobrenome: "Ferraz",
      andar: 8,
      apartamento: 804,
    },
    {
      nome: "Zoey",
      sobrenome: "Brooks",
      andar: 1,
      apartamento: 101,
    },
  ],
};

console.log(
  "O morador do bloco 2 de nome" +
    " " +
    moradores.blocoDois[1].nome +
    " " +
    moradores.blocoDois[1].sobrenome +
    " " +
    "mora no" +
    " " +
    moradores.blocoDois[1].andar +
    "º andar,apartamento" +
    " " +
    moradores.blocoDois[1].apartamento +
    "."
);

// Bonus 5 //

console.log("Inicio exercicio 5");
console.log("///////////////////");
console.log(" ");

for (let i = 0; i < moradores.blocoUm.length; i += 1) {
  console.log(moradores.blocoUm[i].nome + " " + moradores.blocoUm[i].sobrenome);
}
for (let j = 0; j < moradores.blocoDois.length; j += 1) {
  console.log(
    moradores.blocoDois[j].nome + " " + moradores.blocoDois[j].sobrenome
  );
}
