const accountId = 234534;
let accountEmail= "hk@gmail.com" ;
var accountPass = "234" ;
accountCity= "jaipur";
let accountState;

// accountId = 2 ;  not allowed 
accountEmail = "him@gmail.com" ;
accountPass = "12";
accountCity = "delhi";
console.log(accountId);

/* prefer var not to use 
because of issue in function scope and functional scope */

console.table([accountEmail,accountPass,accountCity,accountState]);