function Accumulator(num){
    this.num = num;
    this.read = function(){
        this.num += +prompt('더할 값 입력', 0);
    }
    this.value = function(){
        return this.num;
    }
}

let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.num); // 최초값과 사용자가 입력한 모든 값을 더해 출력함