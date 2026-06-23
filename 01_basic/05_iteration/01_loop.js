for(let i= 0 ;  i<= 10 ; i++){
      const element = i ;  
      if(element == 5){
        console.log("5 number") ;
      }
      
      // console.log(element) ;
  }

  for(let i = 0 ; i<= 10 ; i++){
    console.log(`outer loop : ${i}`) ;
    for(let j = 0 ; j <= 10 ; j++){
        console.log(`inner loop value ${j} and inner loop${i}`) ;
         console.log(i + '*' + j + '=' + i*j) ;
    }
  }
   const myarray = ['spiderman' , 'batman ', 'batman'] ;
  for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element) ;
    
  }