// EX 1 //

// let fact = 1;

// for (let index = 1; index <= 10; index += 1) {
//   fact = index * fact;
// }
// console.log(fact);

// EX 2 //

// let word = "tryber";
// novaPalavra = [];

// for (let index1 = 0; index1 < word.length; index1 += 1) {
//   novaPalavra.unshift(word[index1]);
// }
// let novaString = novaPalavra.join("");
// console.log(novaString);

// EX 3.1  //

// let array = ["java", "javascript", "python", "html", "css"];

// let count = 0;
// let maior = 0;
// for (let index3 = 0; index3 < array.length; index3 += 1) {
//   if (array[index3].length > count) {
//     maior = index3;
//     count = array[index3].length;
//   } else {
//     count = count;
//   }
// }
// console.log(array[maior]);

// EX 3.2  //

// let count1 = array[0].length;
// let menor = 0;
// for (let index4 = 0; index4 < array.length; index4 += 1) {
//   if (array[index4].length < count1) {
//     menor = index4;
//     count1 = array[index4].length;
//   } else {
//     count1 = count1;
//   }
// }
// console.log(array[menor]);

// EX 4  //

// for (let index5 = 50; index5 > 0; index5 -= 1) {
//   if (
//     index5 % 2 != 0 &&
//     index5 % 3 != 0 &&
//     index5 % 7 != 0 &&
//     index5 % 11 != 0
//   ) {
//     console.log(index5);
//     index5 = 0;
//   }
// }

// // EX Bonus 1 //

let n = 5;
var estrela = "*";
for (let i = 0; i < n; i += 1) {
  console.log(estrela.repeat(n));
}
// // EX Bonus 2 //

let j = 5;
for (let i1 = 0; i1 < j; i1 += 1) {
  console.log(estrela.repeat(i1 + 1));
}

// // Ex  Bonus 3 //

let q = 5;
var espaco = " ";
for (let i2 = 0; i2 < q; i2 += 1) {
  console.log(espaco.repeat(q - (i2 + 1)), estrela.repeat(i2 + 1));
}

// Ex  Bonus 4 //
let k=10;
dim = 1;
for (let i3 =1; i3 <= k; i3 +=2) {
    if (i3 < k) {
        console.log(espaco.repeat((k-(dim+i3))/2),estrela.repeat(i3));
    } else {
        console.log(estrela.repeat(i3));
    }
}

// Ex  Bonus 5 //
let t = 7;
dem = 1;
for(let i4 =1 ; i4 <= t; i4 +=2) {
    if (i4 < t) {
        console.log(espaco.repeat((t-(dem+i4))/2),estrela.repeat(i4));
    } else {
        console.log(estrela.repeat(i4));
    }
}


// Ex  Bonus 7 //
resultado = [];
function primo (n) {
  if(n<=1) {
    console.log("Sem numeros")
  }else {
    for (let i5 = 2 ; i5 < n ; i5+=1) {
      if (i5%2 != 0 && i5%3!= 0 && i5%5!= 0  && i5%7!= 0  && i5%11!= 0) {
        resultado.push(i5)
      }
    }
    console.log(resultado);
  }

}
primo(103);