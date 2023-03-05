if (2*5 == 10){
    console.log("Буде десять!");
} else {
    console.log("Не правильно! ");
}

let num = 100;

if (num < 99){
    console.log("Маловато!");
} else if (num > 200){
    console.log("Забагато!");
} else {
    console.log("Чудово!");
}

(num == 1000) ? console.log("Yes") : console.log("No");

switch (num){
    case num > 100:
        console.log("Багато");
        break;
    case num < 100:
        console.log("Маловато");
        break;
    case 100:
        console.log("Достатьно");
        break;
    case num > 1000:
        console.log("За багато");
        break;
    default:
        console.log("Автоматум");
}