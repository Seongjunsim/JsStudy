function Calculator(){
    
    this.read = function(){
        this.num1 = +prompt("first",0);
        this.num2 = +prompt("secont",0);
    }

    this.sum = function(){
        return this.num1+this.num2;
    }

    this.mul = function(){
        return this.num1 * this.num2;
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
alert(3===3);