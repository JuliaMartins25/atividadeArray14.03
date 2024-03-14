//Aula array de javascrip!

//Declaro variavel num para array
let num = [5, 8, 3, 4, 7]
console.log("--- exibir Array ---");
console.log(num)


//colocar em ordem crescente
console.log ("---exibir em ordem crescente---");
num.sort();
console.log(num);

//comprimeto desse array
num.length;
console.log("o vetor tem:");
console.log(num.length);

//juntar dois arrays
console.log("juntando array num com array numeros")
let numeros = num.concat([1, 6, 9]);
console.log(num);
console.log(numeros);

//colocar novo array em ordem crescente
numeros.sort();
console.log(numeros);

//exibir quantas posiçoes tem nesse novo array
numeros.length;
console.log('novo array tem')
console.log(numeros.length);
