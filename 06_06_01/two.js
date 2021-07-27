function sum(value){
    let currentSum = value;
    function f(b){
        currentSum += b;
        return f;
    }
    f.toString = function(){
        return currentSum;
    }

    return f;

}
