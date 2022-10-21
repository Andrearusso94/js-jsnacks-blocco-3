/*A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]*/

const words = ['pippo', 'PLUTO', 'Paperino', 'pAPERINA', 'GASGAS']

console.log(words);

//creo nuovo array usando .map
const wordsMaiusc = words.map(word => {

    let singleWord = word.slice(1).toLowerCase();
    let firstLetter = word[0].toUpperCase();
    
    word = firstLetter + singleWord;
    return word;
});

console.log(wordsMaiusc);