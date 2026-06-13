// singleton => object.create() constructor  m use hota h singleton 

// Js Literals 
let mySym = Symbol("key1") ; // symbol  to use symbol in objext use this [mysym] : []refers to symbol   ;
const jsuser = {
    name : "himu" ,
    "full name " : "himanshu",
    [mySym] : "mykey1" , 
    age : 18 ,
    location : "pith" ,
    email : "kharayat@gmail.com"

}
//  console.log(jsuser.name) ;
//  console.log(jsuser["name"]) ; // it is imp than jsuser.name to access all use jsuser[""]  
//  console.log(jsuser["full name "])   
//  console.log(jsuser[mySym]) ;

 // In object change the value 
 jsuser.email = "kharayat@gmail.com" ; // use this for change the value
 //Object.freeze(jsuser) ; // (freeze) use for doesn't change the value it freeze the value and value doesn't change  ;
 jsuser.email = "hhimu@gmail.com";
//  console.log(jsuser["email"]) ; 
 

 jsuser.greeting = function() {
    console.log("hello js user") ;

 }

 jsuser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`) ; // 
 }
 console.log(jsuser.greeting()) ;
 console.log(jsuser.greeting2()) ;

 