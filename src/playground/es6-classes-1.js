class Person{
    constructor(name = "Anonymous", age = 0){
        this.name = name;
        this.age = age > 0 ? age + " years" : age + " year";
    }
    getGreeting(){
        return `Hi, I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} old.`;
    } 
}

class Traveller extends Person{
    constructor(name, age, homeTown = ""){
        super(name, age);
        this.homeTown = homeTown;
    }
    getGreeting(){
        let desc = super.getGreeting();

        if(this.homeTown)
            desc += ` I came from ${this.homeTown}.`;

        return desc;
    }
}

const me = new Traveller("Shahriar", 21, "Faridpur");
const an = new Traveller();

console.log(me.getGreeting());
console.log(an.getGreeting());