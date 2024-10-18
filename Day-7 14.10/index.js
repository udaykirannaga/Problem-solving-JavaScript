



let array = [9,8,7,6,5,4]
let array2 = [9,8,7,6,5,3]
if(array.length!=array2.length){
    console.log("length not match")
}
else{
    count=0
    for(i=0;i<array.length;i++){
        if(array[i]==array2[i]){
            count++
        }
    
    }
if(count==array.length){
    console.log("true")
}
else{
    console.log("false")
}
}
