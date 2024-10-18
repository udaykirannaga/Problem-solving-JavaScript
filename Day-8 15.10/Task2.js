



let array = [4,5,2,8,3,9,11]
let maximum=array[0] //9
let minimum=array[0] //9
for(i=0;i<array.length;i++){ 
    if(array[i]>maximum){   
        maximum=array[i] 
    }
    if(array[i]<minimum){
        minimum=array[i] 
    }
}
let sum = minimum+maximum
console.log(sum)
