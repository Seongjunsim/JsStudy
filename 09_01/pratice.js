class User{
    // constructor(name){
    //     this.name = name;
    // }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }
}

let user = new User();
user.name = "HI";
console.log(user.name);