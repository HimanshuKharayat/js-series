let myDate = new Date() ;
console.log(myDate);
console.log(myDate.toString());  // output is Thu Jun 11 2026 23:32:42 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // output is  Thu Jun 11 2026
console.log(myDate.toLocaleString()); // output is 11/6/2026, 11:32:42 pm

console.log(typeof myDate); // object 

let mycreateDate = new Date("2023-02-23") ;
console.log(mycreateDate.toString());
console.log(mycreateDate.toLocaleString());


let myTimeStamp = Date.now() ;
//console.log(myTimeStamp) ;
//console.log(mycreateDate.getTime()) ;

console.log(Math.floor(Date.now()/1000)); // convert milisec into sec

myDate.toLocaleString('default',{
    weekday : 'long' 
})
