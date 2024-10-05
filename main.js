function newMap(arr,cb){
    let len = arr.length;
    for(let i=0;i<len;i++){
        let newVal = cb(arr[i]);
        arr[i] = newVal; 
    }
}

function transform(val){
    return val*2;
}

let arr = [1,7,9]
newMap(arr,transform);
console.log(arr);
