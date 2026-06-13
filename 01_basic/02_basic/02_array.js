const marvel_heros  = ["thor" , "ironman" , "spiderman"] ;
const dc_heros = ["batman","superman" , "flash"] ;

//marvel_heros.push(dc_heros);
//console.log(marvel_heros) ; // output is [ 'thor', 'ironman', 'spiderman', [ 'batman', 'superman', 'flash' ] ]

const all_heros = marvel_heros.concat(dc_heros) ; // [ 'thor', 'ironman', 'spiderman', 'batman', 'superman', 'flash' ]
//console.log(all_heros) ;


// mainly we use spread over concat 
//example 
const allnew_heros = [...marvel_heros,...dc_heros] ; // [ 'thor', 'ironman', 'spiderman', 'batman', 'superman', 'flash' ]
//console.log(allnew_heros) ; 

const another_array = [1,2,3,[4,5,4],2,[6,7,8]] ;
const new_another_array = another_array.flat(Infinity);   // change this array into normal araay 
//console.log(new_another_array) ;  //output is [ 1, 2, 3, 4, 5,4, 2, 6, 7, 8]


console.log(Array.isArray("hitesh")) ; //output is false
console.log(Array.from("hitesh")) ; // output is [ 'h', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name : "hitesh"})) ; // [] 

let score1 = 100 ; 
let score2  =200 ; 
let score3 = 300 ; 

console.log(Array.of(score1,score2,score3)); // [100,200,300] ;