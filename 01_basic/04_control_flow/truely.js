const useremail = [] ;

 if(useremail){
    //console.log("have give access") ;

 }
 else{
    //console.log("doesn't give access") ;
 }

 // falsy values

 //  false , 0 ,-0 , bigInt 0n , "" , null , undefined, Nan 

 // else all are Truthy valuues

 // some truthy values 

 // "0" , 'false' ," " , [] ,{} , function(){}

 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // Nullish Coalescing Operator (??) : null and undefined

 let val1 ; 
 //val1 = 5 ?? 10 ; 
 //val1 = null ?? 5 ;
 //val1 = undefined ?? 10 ;
 val1 = null ?? 10 ?? 20 ;
 console.log(val1) ;


 // Terniary operator

 // condition ? true : false 
const iceprice = 100 ;
iceprice <= 80 ?  console.log("less than 80") : console.log("more than 80");

