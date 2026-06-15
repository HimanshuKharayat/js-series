// const tinderuser = new object()   // singelton object 

const tinderuser = {} // non singleton object 

tinderuser.id = "123abc" ;
tinderuser.name= "himu" ;
tinderuser.isLoggedIn = "false";

//console.log(tinderuser) ;

const user = {
    email : "himu@gmail.com" ,
    userfullname : {
         name : "himanshu" ,
         id : "45"
    }
}
//console.log(user.name); 

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"} ;

//const obj3 = Object.assign({},obj1,obj2) ; // merge two object use Object.assign
//console.log(obj3);

const obj3 = {...obj1,...obj2} ; // use this over assign this method called spread 

const users = [
    {
        name : "himu" , 
        id : "34abc" , 
    },
     {
        name : "himu" , 
        id : "34abc" , 
    },
     {
        name : "himu" , 
        id : "34abc" , 
    },
     {
        name : "himu" , 
        id : "34abc" , 
    },
]
users[1].name ;

// console.log(tinderuser) ;
// console.log(Object.keys(tinderuser));  // output => keys 
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));  // first property key second property value [ [ 'id', '123abc' ], [ 'name', 'himu' ], [ 'isLoggedIn', false ] ] 

//  console.log(tinderuser.hasOwnProperty('isLoggedIn')) ; // it checks the code property is available or not which we are used 


// +++++++++++++++++++++++++++++++ Object destructor ++++++++++++++++++++++++++++++++++++++

const course = {
     coursename  : "js in hindi" ,
     price : "999" ,
     courseinstructor : "hitesh" ,

}

// course.courseinstructor 

const {courseinstructor : instructor} = course ;  // destructure of array 
console.log(instructor);


// +++++++++++API JSON in object ++++++++++++++++++
// {
//     "name" = "himu" ,  // key bhi string hogi or value bhi string hogi 
//     "coursename" = "jsinhindi" ,
//     "price" = "free" 
// }

// In array 
[
   {},
   {},
  {}
]