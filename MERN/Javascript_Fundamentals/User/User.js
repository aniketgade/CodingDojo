class User{
    constructor(username, emailAddress){
        this.name = username;
        this.email = emailAddress;
        this.accountBalance = 0;
    }

    makeDeposit(amount){
        this.accountBalance += amount;
    }

    makeWithdrawal(amount){
        this.accountBalance -= amount;
    }

    displayBalance(){
        console.log("User: " + this.name + ", Balance: " + this.accountBalance);
    }

    transferMoney(otherUser, amount){
        otherUser.makeDeposit(amount);
        this.makeWithdrawal(amount);
    }
}


const Aniket = new User("Aniket", "aniket@google.com");
const Prashant = new User("Prashant", "prashant@google.com");
const Andy = new User("Andy", "andy@google.com");

Aniket.makeDeposit(40);
Aniket.makeDeposit(20);
Aniket.makeDeposit(40);
Aniket.makeWithdrawal(20);

Aniket.displayBalance();


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
