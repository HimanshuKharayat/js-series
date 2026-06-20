const user = {
    name : "himu" , 
    price : "199" ,

    welcomemessage : function(){
        console.log(`${this.username}, welcome to website`); // this => current context ko refer karta hai
        //console.log(this) ;
    }
}

// user.welcomemessage() ;
// user.username = "sam" ;
// user.welcomemessage() ;


// console.log(this) ;

// function chai(){
//     let username = "hitest" ;
//     console.log(this.username) ; // function me use ni hota this object k andar use hota hai 
// }
// chai() ;

// const chai = function(){
//     let username = "hitest" ;
//     console.log(this.username) ; 
// }
// chai() ;

const chai = () => {
    let username = "hitest" ;
    console.log(this.username) ; 
}
// chai()

// +++++++++++++++++++++++++++ Arrow Function +++++++++++++++++++++++++++++++

// const addtwo = (num1 , num2)=>{    // explicit return 
//   return num1+ num2 ;
// }

//const addtwo = (num1 , num2) => num1+ num2 ; // emplicit return 

// const addtwo = (num1, num2) => (num1+num2) ; // emplicit return 

const addtwo = (num1, num2) => ({username : "himu"}) ;

console.log(addtwo(3,4)) ;

// this 
// Browser me output?
//Window

// this
//Node me output?
//{}