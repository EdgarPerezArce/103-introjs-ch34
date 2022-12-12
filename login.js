//global variables (database)
let dbUser ="admin@yamazon.com";
let dbPass ="sharedbpass1234";

function login(){
//    get the name and password from the users
let username = prompt("Enter your username");
let password = prompt("Enter your password");

console.log(username,password);
// compare the name and pass with the database
if(username==dbUser && password==dbPass){
    //display login success HTML
    document.getElementById
    ("login-result").
    innerHTML=`<h2 style="font-family";arial;>Welcome to the admin site!<h2>`;
    }else{
        document.getElementById
    ("login-result").
    innerHTML=`<p class="alert-error">Invalid credentials. Please try again`;
    }
}