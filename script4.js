// creating an array
let gpas = [2.2,3,1.2,3.3,4,3.5,1.5];
// console.log(gpas);
// console.table(gpas);

function register(){
    let newGPA= Number(document.getElementById("gpa-input").value);// getting the new GPA from the input
    gpas.push(newGPA); // adding the newGPA to the array
    displayGPAS(); // display new gpa
}

function displayGPAS(){
    //get the HTML element
    const DIV = document.getElementById("users-gpas");
    let tmp="";
    // travel the array
    // for(let i=0;i<7;i++){
    //     console.log(gpas[i]);
    // }
    
    for(let i=0;i<gpas.length;i++){
        
        if(gpas[i]<2){
            //create the tmp (HTML)
            tmp+=`
        <p style="color:red;">ID ${i} --> ${gpas[i]} Fail </p>`;
        }else if (gpas[i]>=3.5) {
            tmp+=`
        <p style="color:green;">ID ${i} --> ${gpas[i]} Pass </p>`;
         
        }else{
            tmp+=`
        <p>ID ${i} --> ${gpas[i]}</p>`;
        
        }
        
    
        
    
        //insert the tmp on the HTML
    }
    
    DIV.innerHTML=tmp;


}

displayGPAS();
