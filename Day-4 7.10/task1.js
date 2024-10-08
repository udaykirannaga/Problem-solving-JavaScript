


// Give a number find the previous prime of that number


n=25;
for(i=n-1;i>=2;i--){
    fact=0;
    for(j=2;j<i;j++){
        if(i%j==0){
            fact++
            break
        }
    }
    if(fact==0){
        console.log("Previous prime number is:",i);
        break;
    }
}