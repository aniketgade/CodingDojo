class User{
    constructor(username, emailAddress){
        this.name = username;
        this.email = emailAddress;
        this.accountBalance = 0;
    }

    makeDeposit(amount){
        this.accountBalance += amount;
        return this;
    }

    makeWithdrawal(amount){
        this.accountBalance -= amount;
        return this;
    }

    displayBalance(){
        console.log("User: " + this.name + ", Balance: " + this.accountBalance);
        return this;
    }

    transferMoney(otherUser, amount){
        otherUser.makeDeposit(amount);
        this.makeWithdrawal(amount);
        return this;
    }
}


const Aniket = new User("Aniket", "aniket@google.com");
const Prashant = new User("Prashant", "prashant@google.com");
const Andy = new User("Andy", "andy@google.com");

Aniket.makeDeposit(40).makeDeposit(20).makeDeposit(40).makeWithdrawal(20).displayBalance();

Prashant.makeDeposit(40).makeDeposit(20).makeWithdrawal(20).makeWithdrawal(10).displayBalance();

Andy.makeDeposit(100).makeWithdrawal(10).makeWithdrawal(40).makeWithdrawal(20).displayBalance();

Aniket.transferMoney(Andy,20);

console.log("After balance transfer");

Aniket.displayBalance();
Andy.displayBalance();
