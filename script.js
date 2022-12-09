console.log("Script file");
var age=100;//initialization and assignation
let userName="Mike";
const taxes = 11.5;
const URL = "http://www/thisisprivateEndPoint/project";

console.log(age,userName,taxes);//dispaly the age, userName and URL

//add extra notes using the comments
// <!-- <script>
// // //JS zone
// // //alert("hello world");
// // console.log("This is a message on the console")
// // console.error("Fatal error your computer is not working!");
// // console.warn("This is a warning");
// // console.log(10+10);// math operations
// // console.log("10"+"10");// This is a log
// </script> -->
userName="Edward";// changing the userName value
// taxes=12;//changing the tax value
console.log("my user is" + userName + "in" + URL);// displaying the userName and URL
let numberChildren = "1";
let partnersName = "Naomi";
let geoLocation = "San Diego";
let jobTitle = "Commercial Manager";

//concatenation
// console.log("you will be a" + jobTitle + "in" + geoLocation + "and married" + partnersName + "with" + numberChildren + "kids");

document.write(`<p>you will be a ${jobTitle} in ${geoLocation},  and married ${partnersName} with ${numberChildren} + kids</p>`);