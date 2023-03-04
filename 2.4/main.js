// let incr = 10,
//     decr = 10;

// ++incr
// --decr

// console.log(incr);
// console.log(decr);


// console.log(++incr); 11
// console.log(--decr); 9
// ++ або -- на початку це префіксна форма

// console.log(incr++); 10
// console.log(decr--); 10
// ++ або -- в кінці це постфіксна форма, зміна значення відбувається після виконання  форми

//console.log(5%2); //оператор % повертає залишок від ділення двох чисел = 1

// = присвоєння
// == перевірка на рівність
// === строга перевірка по типам данних

//console.log("2" == 2);  // == перевірка на рівність

//console.log("2" === 2); // === строга перевірка по типам данних

let checkA = true,
    checkB = true,
    checkC = false;

console.log(checkA && checkB); //&& логічне і, коли два значення правдиві = true
console.log(checkA && checkC); //false
console.log(checkA || checkC); // || логічне або, коли одне із значень = true

// !checkA - ! оператор отрицания і перетвоює значення в обернене правда -> брехня
console.log(checkA || !checkC); //true
 