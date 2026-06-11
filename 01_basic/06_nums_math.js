let score = 400 ; 
//console.log(score);

const balance = new Number(100) ;
//console.log(balance) ;

//console.log(balance.toString().length);
//console.log(balance.toFixed(2)); // output is 100.00

const anothervalue = 123.8956 ;
//console.log(anothervalue.toPrecision(3)); // focus on how many value output is 124 .

const hundreds = 10000000 ; 
//console.log(hundreds.toLocaleString("en-In")); //  output is 1,00,00,000


// +++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++
 console.log(Math) ; // object  
 console.log(Math.abs(-4)) ; // output is 4 
 console.log(Math.round(4.6)) ; // output is 5 
 console.log(Math.ceil(4.2)) ; // output is 5
 console.log(Math.floor(4.9)) ; // output is 4
 console.log(Math.min(4, 2,3,1,6)) ; //output is 1 
 console.log(Math.max(4, 2,3,1,6)) ; //output is 6


 console.log(Math.random()) ;
 console.log((Math.random()*10)+1) ;
 console.log(Math.floor(Math.random()*10)+1) ;

 const min = 10 ;
 const max = 20 ;

 console.log(Math.floor(Math.random()*(max-min+1))+min) ;
 
