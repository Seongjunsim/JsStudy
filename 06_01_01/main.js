function sumTo(num){
    if(num<=1) return 1;
    return num + sumTo(num-1);
}
function sumToByFor(num){
    let sum = 0;
    for(let i=1; i<=num; i++){
        sum += i;
    }
    return sum;
}
function sumToByD(num){
    return num*(num+1)/2;
}
console.log(sumTo(100), sumToByD(100), sumToByFor(100));