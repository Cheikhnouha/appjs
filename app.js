const elements = ["a","b","c" ,"b"]
elements.forEach((item)=> console.log(item)
);
const myDonnes = [12,23,34,56,67]
const found = myDonnes.find((item)=> item >12);
console.log(found);


const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));
 
const tableaux = ['nouha','barro',"cheikh"];
tableaux.forEach((item) =>{
 console.log(item);
})
const inclure  = ['nouha','cheikh','zakir','barro'];
console.log(inclure.includes('fallby')); /* includes renvoie que si l'item est dans le 
le tableau cela est vrai sino false */
const elemts = ['Fire', 'Air', 'Water'];

console.log(elemts.join()); /* Concaténation par virgule (),ou part tiret ('-') */

const sum = new Function('a', 'b', 'return a + b');

console.log(sum(120, 110));




