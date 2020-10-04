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
        console.log("\n" + this.name + " attacking " + target.name);
        target.decreaseResilience(this.power);
        console.log("\nCard status after the attack");
        target.displayInfo();
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
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    
    play(target){

        this.stat == "power" ? target.increasePower(this.magnitude) : target.increaseResilience(this.magnitude);

    }
}

class Player {
    constructor(unit=undefined, effect=undefined){
        this.unit = unit;
        this.effect = effect;
    }

    summon(unit){
        console.log("\nSummoning the following card");
        unit.displayInfo();
        this.unit = unit;
    }

    play(effect, target){
        console.log("\nApplying " + effect.name + " on " + target.name);
        this.effect = effect;
        effect.play(target);
        console.log("\nCard status after applying the effect");
        target.displayInfo();
    }
}

const redNinjaUnit = new Unit("Red Belt Ninja", 3, 3, 4);

const blackNinjaUnit = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgorithmEffect = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);

const unhandledPromiseRejectionEffect = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);

const pairProgrammingEffect = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2)

const player1 = new Player();

player1.summon(redNinjaUnit);   

player1.play(hardAlgorithmEffect,redNinjaUnit);

const player2 = new Player();

player2.summon(blackNinjaUnit);

player2.play(unhandledPromiseRejectionEffect,redNinjaUnit);


player1.play(pairProgrammingEffect,redNinjaUnit);

player1.unit.attack(blackNinjaUnit);

