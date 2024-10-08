  
// Largest prime number in between two numbers 50 to 100 

  n=100;
  for(i=n-1;i>=50;i--){
      fact=0;
      for(j=2;j<i;j++){
          if(i%j==0){
              fact++
              break
          }
      }
      if(fact==0){
          console.log("Largest prime number between two numbers is:",i);
          break;
      }
  }