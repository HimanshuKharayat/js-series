// forin loop 

const myobject = {
    js : "javascript" ,
    cpp : "c++" ,
    rd : "ruby"
    
}
for(const key in myobject){
    console.log(`${key} shortcut is for ${myobject[key]}`) ;
}

const programming = ["css" , "java ", "python" , "js"] ;

for(const key in programming){
    console.log(programming[key]) ;
}


const map = new Map() ;
map.set('IN', "India") ;

//console.log(map) ;  // in maps values are unique 

for(const key in map){
    console.log("key") ;  // no output in forin loop for maps use of forof loop
}