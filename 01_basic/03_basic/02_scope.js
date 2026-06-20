// var c = 300 ; 

let a = 400 ; 
if(true){
    let a = 10 ; 
    const b = 30 ;
    //console.log("INNER :",a )
}  // block scope 

console.log(a) ;
//console.log(b) ;


// use of let and cost 

function one(){
    const name = "himu" ;

    function two(){
        const website = "youtube" ;  // child function parent variable ko access karta h  is called closure 
        console.log(name) ;
    }
    //console.log(website);

    two() ;
}                                
//one() ;

if(true){
    const username = "himu" ; 

    if(username == "himu"){
        const website = " youtube" ; 
        //console.log(username + website) ;
}
      //console.log(website) ;  error
}
//console.log(username) ;  error 


// ++++++++++++++++++++++++++ INtersting +++++++++++++++++++++++++++++++++++
console.log(oneadd(5)) ; // output is 6
function oneadd(num){
    return num+1 ;
}


twoadd(5) // error
const twoadd = function(num){
    return num+2 ;
 }
 





