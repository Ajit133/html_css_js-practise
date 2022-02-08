if(false){
    console.log("if statement Executed!")
}else{
    console.log("Else statement Executed!")
}

console.log("Out of Statement!")

// var age = 50;
// if ( age > 50 ){
//     console.log("Old")
// }else if( age < 50 && age >= 30 ){
//     console.log("Under 50 but above or equal 30!")
// }else if( age < 40 && age >= 20){
//     console.log("Undr 40 but above or equal 10!")
// }else if()

// Nested if find out largest number 
var n1 = parseInt(prompt("Enter the Number: "))
var n2 = parseInt(prompt("Enter the Third Number: "))
var n3 = parseInt(prompt("Enter the 3rd Number: "))
 
if (n1 >= n2){
    if(n1 >= n3){
        console.log(n1 + " is the largest!");
    }
    else{
        console.log(n3 + " is the largest!")
    }

}else {
    if ( n2 >= n3){
        console.log(n2 + " is the largest!")
    }
    else{
        console.log(n3  + " is the largest")
    }
}