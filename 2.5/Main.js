'use strict';

var int = 12; //числовий тип даних

var string = "Darova"; //строка

var s1mbol = Symbol(); //символ

var boolean = true; // правда або брехня

null //коли не існує console.log(somethig);

undefined //коли інснує але нічого не присвоєнно
{
    let somethig = "Значення";
    console.log(somethig);
}
var objeKt = {}; //об'єкт

console.log(5 / 0); //Infinity когда делить на 0
console.log("Stroka" * 5); //NaN Not-A-Number (не-число)

let person = {
    name: "Антон",
    age: 22,
    isProfession: false
};

console.log(person.name);
console.log(person.age);
console.log(person.isProfession);

let imena = {
    nazva: "Имя - ",
    vozrast: "Возраст - ",
    robota: "Трудоустройство - "
};

console.log(imena.nazva + person.name);
console.log(imena.vozrast + person.age);
console.log(imena.robota + person.isProfession);

let car = {
    name: "BMW",
    positions: 4 + " года",
    motor: 2.0,
    body: "Седан"
};

console.log(imena.nazva + car["name"]);
console.log(imena["vozrast"] + car["positions"]);

let arrOne = ['1', '2', '3', '4', '5'];

console.log(arrOne);
console.log(arrOne[0]);
console.log(arrOne[4]);

// alert("rOne"); виводе оголошення

confirm("Hi, you are here? "); //виводе оголошення з варіантами "ок" або "отмена"

// let quetion = prompt("Hi, you are OK?");

// console.log(quetion);