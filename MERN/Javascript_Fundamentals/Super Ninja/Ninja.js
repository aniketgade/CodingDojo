class Ninja{
    constructor(name, health, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log("My name is " + this.name);
        return this;
    }

    showStats(){

        console.log("Name: " + this.name + "\nStrength: " + this.strength + "\nSpeed: " + this.speed + "\nHealth: " + this.health);
        return this;
    }

    drinkSake(){
        console.log("Drinking Sake to increase my health");
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, wisdom=10){
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Its not who am I from deep within, its what I do that defines me");
    }
}

const ninja1 = new Ninja("Fujibayashi Nagato",100,20,100);

ninja1.drinkSake();

ninja1.showStats();

const superSensei = new Sensei("Master Splinter");

superSensei.speakWisdom();

superSensei.showStats();