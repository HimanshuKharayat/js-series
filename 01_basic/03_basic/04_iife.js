// Imeediately Invoked function Expression (IFFE)
// global scope k variable(pollution) ko htane k liye IFFE use hota h immediate execution karta h   
(function chai(){
    console.log(`DB Connected`) ; // named IFFE
})() ; // semicolon(;) is imp in IFFE

( (name) => {
    console.log(`DB Connnected two ${name}`);
} ) ("himu") ;


