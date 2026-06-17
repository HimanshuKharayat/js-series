function saymyname(){
     console.log("h");
     console.log("i");
     console.log("m");
     console.log("u");
}
//saymyname() ;
console.log(saymyname()) ;

// function addtwonumbers(number1 , number2){ // (number1 , number2 ) parameters
//     console.log(number1 + number2);
// }
//  addtwonumbers(3,5) ; // (3,5) arguments

//  const result = addtwonumbers(3,5) ;
//  console.log("result:",result) ;

function addtwonumbers(number1 , number2){
    //let result = number1 + number2 ;
    //return result ;
    //  OR 
    return number1+number2 ;
}
 
 const result = addtwonumbers(3,5) ;
 //console.log("result:",result) ;

 function loginusermessage(username){
    if(!username){
       console.log("please enter a username");
       return ;
    }
    return `${username} just log in` ;

 }

 //console.log(loginusermessage("himu")) ;
  console.log(loginusermessage())