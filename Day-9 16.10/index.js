

let arr = [10,11,5,39,2,7]
let min =arr[0]
let max =arr[0]
let prime=[]

for(i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }
    if(arr[i]>max){
        max=arr[i]
    }
}
// console.log(min,max)

for(j=min ;j<max ;j++){
    if(!arr.includes(arr[j])){
        // console.log(j)
        flag=0
        for(k=2;k<j;k++){
            if(j%k==0){
                flag++
                break;
            }
        
        }
        if(flag==0){
            prime.push(j)
            break;
        }
    }
}
console.log(prime)