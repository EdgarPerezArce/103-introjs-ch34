
// let yourName = `Johny`
// if(confirm("Are you "+ yourName + "?")){
//     console.log("Hello " + yourName);
//    }else{
//     console.log("Then what is your name?");
//    }

//    let number = 99;
// if(number == 199){
// console10
// console.log("The number is correct");
// }else{
//     console.log("the number is not correct");
// }

// let num1 = Number(prompt("please enter number1:"))//Number () can convert a string to a
// let num2 = Number(prompt("please enter number2:"));

// console.log(num1,num2);

// if(num1 < num2){
// console.log("num1 is smaller than num2");
// }else if(num2 < num1){
//     console.log("num2 is smaller than num1");
// }else{
//     console.log("The numbers are equal");
// }


let num1 = 1;
let num2 = 2;
let num3 = 3;
let isValid = false;//boo

if(num1<num2 && num3>num2){
console.log("num1 is smaller than num2 AND num3 is larger than num2");
}
if(num1 == 1 || num2 == 1 || num3 == 1){
console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
}
if(!isValid){
console.log("this is true!");
}

const expr = 'Papayas';
switch (expr) {
    case 'Oranges':
        console.log('Orange are $0.59 a pound.');
        break;
        case 'Mangoes':
        case 'Papayas':
            console.log('Mangoes and papayas are $2.79 a pound.');
            // expected output: "Mangoes and papayas are $2.79 a pound"
            break;
            default:
                console.log(`Sorry, we are out of ${expr}.`);
}

let op = '+';
switch(op){
        case '+':
    console.log(1=1);
         case '-':
    console.log(1-1);
        break;

}

console.log("-----------------------LOOP------------------------");
//brute force
//loops
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// start point ; stope condition ; increment
let database = ["Brayan","John","Brianna"];
//i=i+i is the same as i++
for(let i=0;i<=5;i+=1){
    document.write(`<p> ${i} ${database[i]}`);
} 
// document.write(`<p> ${0} ${database[0]}`);
// document.write(`<p> ${0} ${database[1]}`);
// document.write(`<p> ${0} ${database[3]}`);
let database = (2)
for(let e=2;e<13;e+=2){
    document.write(`<p> ${e} `);
}