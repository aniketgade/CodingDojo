class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target){
        target.decreaseResilience(this.power);
    }

    increasePower(magnitude){
        this.power += magnitude;
    }

    increaseResilience(magnitude){
        this.resilience += magnitude;
    }

    decreasePower(magnitude){
        this.power -= magnitude;
    }

    decreaseResilience(magnitude){
        this.resilience -= magnitude;
    }

    displayInfo(){
        console.log("Name: " + this.name + "\nCost: " + this.cost + "\nPower: " + this.power + "\nResilience: " + this.resilience);
    }
}

class Effect extends Card {
    constructor(name, cost, text){
        super(name, cost);
        this.text = text;
    }

    getLastWord(text){
        let strArr = text.split(" ")

        return(strArr[strArr.length - 1]);
    }

    play(target){

        let magnitude = this.getLastWord(this.text);

        if(this.text.toLowerCase().includes("increase")){
            this.text.toLowerCase().includes("power") ? target.increasePower(magnitude) : target.increaseResilience(magnitude)
        }

        if(this.text.toLowerCase().includes("decrease")){
            this.text.toLowerCase().includes("power") ? target.decreasePower(magnitude) : target.decreaseResilience(magnitude)
        }
    }
}

const unit1 = new Unit("Red Ninja", 8, 10, 10);

const unit2 = new Unit("Blue Ninja", 8, 10, 10);

const effect1 = new Effect("Destroyer", 12, "decrease target's resilience by 5");

effect1.play(unit1);

unit1.displayInfo();

unit1.attack(unit2);

unit2.displayInfo();