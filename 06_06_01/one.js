function makeCounter(){
    function counter(){
        return ++counter.count;
    }
    counter.count = 0;
    counter.set = function(value){
        counter.count = value;
        return counter.count;
    }
    counter.decrease = function(){
        return --counter.count;
        
    }

    return counter;
}

let counter = makeCounter();
console.log(counter());
console.log(counter.decrease())
console.log(counter.set(20))