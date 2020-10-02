class BankAccount{
    constructor(interestRate,amount = 0){
        this.balance = amount;
        this.interestRate = interestRate/100;
    }

    deposit(amount){
        this.balance += amount;
        return this;
    }

    withdraw(amount){
        if(this.balance < amount){
            console.log("Insufficient funds: Charging a $5 fee");
            this.balance = this.balance - (amount + 5);
        }
        else{
            this.balance -= amount;
        }
        return this;
    }

    displayAccountInfo(){
        console.log("Balance: $" + this.balance);
        return this;
    }

    yieldInterest(){
        this.balance += this.balance * this.interestRate;
        return this;
    }
}


const AniketAccount = new BankAccount(5);

const AmarAccount = new BankAccount(10, 100);

AniketAccount.deposit(20).deposit(40).deposit(40).withdraw(20).yieldInterest().displayAccountInfo();

AmarAccount.deposit(100).deposit(100).withdraw(400).withdraw(50).withdraw(25).withdraw(25).yieldInterest().displayAccountInfo();