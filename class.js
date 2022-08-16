class Students{
    constructor (name,age,cls){
        this.myname = name;
        this.myage = age;
        this.mycls = cls;
    }
    biodata(){
        console.log(`My name is ${this.myname} my age is ${this.myage} and I am pursuing in ${this.mycls}`)
    }
}

class Player extends Students{
    constructor(name,age,cls,game){
        super(name,age,cls);
        this.mygame = game;
    }
    play_biodata(){
        
    }
}

let obj1 = new Students('Deepti',20,'BCA')
obj1.biodata()