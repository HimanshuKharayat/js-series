// js is dynamically type language .
// premitive  => callback value 

//7 types  string , number , boolean , null , undefine , symbol , bigInt 
const score = 100 ;
const scorevalue = 100.3;
const isloggedIn = false  ; 
let useremail ;

const id = Symbol("123") ;
const anotherid = Symbol("123") ;

console.log(id === anotherid) ;

const bigNumber = 2344343n ;

// reference (non premitive)

// array , functions, objects


const heros = ["saktiman " , "naag" , "doga" ]
let myobj = {
    name: "himu" ,
   // age = 23 ,
} // objects are in under the curly braces

const myfunction = function(){
    console.log("hello") ; 
}


console.log(typeof bigNumber);


// +++++++++++++++++++++++++++++++++++
// stack (primitive) means copy value 
// heap (non - primitive) or reference means original value 

// example  stack 

let myoutube = "talkfootball" ; 

let anotheryoutube = myoutube;
anotheryoutube = "esportslive" ;


console.log(myoutube);
console.log(anotheryoutube);

// example heap 
let userOne = {
    email : "kharayat@gmail",
    uid : "kha@oksbi" 
}

let userTwo = userOne 
userTwo.email = "him@gmail" ;

console.log(userOne);
console.log(userTwo) ;

