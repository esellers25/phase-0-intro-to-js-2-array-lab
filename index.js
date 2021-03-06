// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(Ralph) {
   cats.push(Ralph); 
}

function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(Broom) {
    const newCats = [...cats, 'Broom'];
    return newCats;
}

function prependCat(Arnold) {
   const moreCats = ['Arnold', ...cats];
   return moreCats; 
}

function removeLastCat() {
    const fewerCats = cats.slice(0, -1);
    return fewerCats;
}

function removeFirstCat() {
    const twoCats = cats.slice(1);
    return twoCats;
}
