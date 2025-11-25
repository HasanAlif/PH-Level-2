// access >> modify

class Bankaccount {
    readonly userId: number;
    public userName: string;
    // private userBalance: number;
    protected userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    addBalance(amount: number): number {
        return this.userBalance += amount;
    }
    getBalance(): number {
        return this.userBalance;
    }
}

class StudentAccount extends Bankaccount {
    test(){
        this.userBalance;
    }
}

const StudentBankaccount = new Bankaccount(121352865, "Student Alif", 2000);

const alifAccount = new Bankaccount(121352865, "Alif", 5000);
// alifAccount.userBalance += 2000; // Error: Property 'userBalance' is private and only accessible within class 'Bankaccount'.
// console.log(alifAccount.userBalance); // Error: Property 'userBalance' is private and only accessible within class 'Bankaccount'.
alifAccount.addBalance(2000);
console.log(alifAccount.getBalance());