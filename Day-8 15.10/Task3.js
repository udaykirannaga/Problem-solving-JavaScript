



let arr=[1,2,3,4,5,6,1,2,3,5]
        original=[]
        duplicate=[]
        for(i=0;i<arr.length;i++){
            if(!original.includes(arr[i])){
                original.push(arr[i])
            }
            else{
                duplicate.push(arr[i])
            }
        }
        console.log(original,duplicate)