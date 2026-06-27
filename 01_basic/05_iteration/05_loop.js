// forEach loop

 const coding = ["css" , "java ", "python" , "js"] ;

// coding.forEach(function (item) {
//    console.log(item) ;
// })

// coding.forEach((item) =>{
//     console.log(item) ;
// })

// function printme(item){
//     console.log(item) ;
// }

// coding.forEach(printme) 

coding.forEach((item , index ,arr) => {
     console.log(item , index ,arr) ;
})


const mycoding = [
    {
        language : "javascript" ,
        languagefilename : "js" 
    },
    {
        language : "python" ,
        languagefilename : "py"  ,
    },
    {
        language : "java" ,
        languagefilename : "java"  ,
    },
]

mycoding.forEach( (item)=> {
     console.log(item.language)
})