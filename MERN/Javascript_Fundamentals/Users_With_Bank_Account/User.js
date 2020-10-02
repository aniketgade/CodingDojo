class User{
    constructor(username, emailAddress){
        this.name = username;
        this.email = emailAddress;
        this.account = new BankAccount(5, 10);
    }

    makeDeposit(amount){
        this.account.deposit(amount);
        return this;
    }

    makeWithdrawal(amount){
        this.account.withdraw(amount);
        return this;
    }

    displayBalance(){
        this.account.displayAccountInfo();
        return this;
    }

    yieldInterest(){
        this.account.yieldInterest();
        return this;
    }

    transferMoney(otherUser, amount){
        otherUser.makeDeposit(amount);
        this.makeWithdrawal(amount);
    }
}

class BankAccount{
    constructor(interestRate,balance = 0){
        this.balance = balance;
        this.interestRate = interestRate/100;
    }

    deposit(amount){
        this.balance += amount;
        
    }

    withdraw(amount){
        if(this.balance < amount){
            console.log("Insufficient funds: Charging a $5 fee");
            this.balance = this.balance - (amount + 5);
        }
        else{
            this.balance -= amount;
        }
        
    }

    displayAccountInfo(){
        console.log("Balance: $" + this.balance);
        
    }

    yieldInterest(){
        this.balance += this.balance * this.interestRate;
        
    }
}


const Aniket = new User("Aniket", "aniket@google.com");
const Prashant = new User("Prashant", "prashant@google.com");
const Andy = new User("Andy", "andy@google.com");

Aniket.makeDeposit(40).makeDeposit(20).makeDeposit(40).makeWithdrawal(20).yieldInterest().displayBalance();

Prashant.makeDeposit(40);
Prashant.makeDeposit(20);

Prashant.makeWithdrawal(20);
Prashant.makeWithdrawal(10);

Prashant.displayBalance();

Andy.makeDeposit(100);

Andy.makeWithdrawal(10);
Andy.makeWithdrawal(40);
Andy.makeWithdrawal(20);

Andy.displayBalance();

Aniket.transferMoney(Andy,20);

console.log("After balance transfer");

Aniket.displayBalance();
Andy.displayBalance();
