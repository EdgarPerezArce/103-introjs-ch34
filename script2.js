//Save the following information in variables
//
// let userName= prompt("Enter your name:");
// let userEmail = prompt ("Enter your email");
// let userpassword = "1234";
// let userage = 40;
// let usercountry = "US";
// let monthlySalary = promt("Enter monthly salary:");


// document.write(`
// <p>User: ${userName}<p>
// <p>Email: ${userEmail}<p>
// <p>Salary:${monthlySalary}<p>
// `)


// console.log(userName,userEmail,monthlySalary);

//creating functions

//function declaration
function greeting(){
    //body of the function
    console.log("Hello world");
    // alert("Hello")
    // document.write("Hello");
    return "Samantha";
}
//global varibel
let global;

function sum(a,b){
    //loacal variable
    global="affected"
    return a+b;
}
    
    console.log(sum(10,50));
    console.log(global);
//function expression

let displayValues = function(){
    console.log("Displaying values ... ")
}
displayValues();

//arrow function
let traveling = country => "Traveling to ... " + country;

travel = traveling("Italy");
console.log(travel);

let total=0;

function addCart(price){
    total = total + price;
    console.log(total);
    return total;
}

function calculateTaxes(subtotal){
    subtotal=addCart(2);

    let totalTax = subtotal *1.11;

    document.getElementById("receipt").
    innerHTML=
        `<p>Subtotal = ${subtotal}<p>
         <p> Total = {$total}<p>`
    

}
