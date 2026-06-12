const myarr = [1,2,3,4,5] ;
// or 
const mywarr2 = new Array(1,2,3,4) ;
console.log(myarr[1]) ;
console.log(myarr) ;

// array method 

myarr.push(6) ; // add element
myarr.pop() ;  // remove the last element of array 
console.log(myarr) ;

myarr.unshift(9) ;  // put 9 in the start of the array 
myarr.shift() ; // remove first element of aaray 
console.log(myarr) ;


console.log(myarr.includes(9)) ;
console.log(myarr.indexOf(3)) ;

const newarr = myarr.join() ;  //
console.log(myarr) ; 
console.log(typeof(newarr)) ; // convert into string


// slice , splice 

console.log("A ",myarr);

const myn1 = myarr.slice(1,3) ;

console.log(myn1) ;
console.log("B ",myarr) ; // slice => doesn't change the main array element output is [1,2,3,4,5]
console.log(myn1) ; // B  main array  [ 1, 2, 3, 4, 5 ] output is [ 2, 3 ]

const myn2 = myarr.splice(1,3) ;
console.log("C ",myarr) ; // splice=> original array manipulate ho jata h means change hota h original array output is [4,5,6]
console.log(myn2) ; //C  main array [ 1, 5 ] output is => [ 2, 3, 4 ]

