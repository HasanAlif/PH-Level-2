//Getter and Setter in TypeScript


class Bankaccount {
    readonly userId: number;
    public userName: string;
    private userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    set addBalance(balance: number) {
        this.userBalance = this.userBalance + balance;
    }

    get getBalance(): number {
        return this.userBalance;
    }
}
const alifAccount = new Bankaccount(121352865, "Alif", 5000);
alifAccount.addBalance = 2000;
// console.log(alifAccount.userBalance); // Error: Property 'userBalance' is private and only accessible within class 'Bankaccount'.
console.log(alifAccount);
alifAccount.addBalance = 3000; // Error: Property 'addBalance' does not have an initializer and is not definitely assigned in the constructor.
console.log(alifAccount);