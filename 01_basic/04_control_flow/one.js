// if 

// const temperatue = 43  ;
// if(temperatue === 40){
//     console.log("less than 50") ;
// }
// else{
//     console.log("temperatue is greater than 50" ) ;
// }

//  < , > , <= , >= , == , === strict checking type , != , !==  

// const score = 200 ; 
// if(score > 100){
//     const power = "fly" ;  // do not use var because it  is complete global scope 
//     console.log(`user power : ${power}`) ;
// }
// console.log(`user power : ${power}`) ;   

const balance = 1000 ; 

//if(balance > 500) console.log("test") ;    // implicit scope 

// Nesting

// if(balance < 500){
//     console.log("less than 500") ;
// }
// else if(balance < 750){
//     console.log("less than 750")
// }
// else {
//     console.log("less than 1200") ;
// }


const userloggedin  = true ; 
const userloginfromgoogle  = false ;
const userloginfromemail = true ;

if(userloggedin && userloginfromgoogle){
    console.log("allow login") ;
}
if(userloggedin || userloginfromgoogle){
    console.log("allow login") ;
}






