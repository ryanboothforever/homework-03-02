class Account{
    constructor(name, balance){
        this.name = name;
        this.balance = balance;
    }
    credit(val){
        return this.balance+=val
    }
    describe(){
        return `Owner: ${this.name}, Balance: ${this.balance}`
    }
}

const sean = new Account("Sean", 0);
const brad = new Account("Brad", 0);
const georges = new Account("Georges", 0);

arr = [sean, brad, georges]

arr.forEach(item => {
    item.credit(1000)
    console.log(item.describe());
})