'use strict';

/* It's a class that represents a bank account */
class Account {
	constructor(name, balance) {
		this.name = name;
		this.balance = balance;
		this._movements = [];
	}

	/**
	 * It adds the amount to the balance and pushes the amount to the movements array
	 * @param amount - The amount of money to deposit.
	 */
	deposit(amount) {
		this._movements.push(amount);
		this.balance += amount;
	}

	/**
	 * The withdraw function takes an amount as an argument, and then calls the deposit function with the
	 * amount negated, and then subtracts the amount from the balance
	 * @param amount - The amount of money to withdraw from the account.
	 */
	withdraw(amount) {
		this.deposit(-amount);
		this.balance - amount;
	}
	/**
	 * This function returns the value of the private variable _movements.
	 * @returns The movements array.
	 */
	getMovements() {
		return this._movements;
	}

	/**
	 * The print() function is a method of the Account class. It prints the name and balance of the account
	 */
	print() {
		console.log(`${this.name} has ${this.balance} balance`);
	}
	/* It's checking if the amount is greater than the balance. */
	approveLoan(amount) {
		if (amount > this.balance) {
			return false;
		}
		return true;
	}
	/**
	 * If the loan is approved, subtract the amount from the balance and add the amount to the movements
	 * array
	 * @param amount - The amount of money to be loaned.
	 * @returns The return value is the last expression evaluated.
	 */
	requestLoan(amount) {
		if (this.approveLoan(amount)) {
			this.balance -= amount;
			this._movements.push(amount);
			console.log(`${this.name} Loan Approve ${this.balance}`);
			return;
		}
		console.log(`${this.name} Loan Reject ${this.balance}`);
	}
}

/* It's creating a new account with the name John and a balance of 1000. Then it's depositing 100, 200
and withdrawing 50. Then it's printing the account balance and requesting a loan of 500. Then it's
printing the account balance again and logging the account and the movements. */

const account = new Account('John', 1000);
account.deposit(100);
account.deposit(200);
account.withdraw(50);
account.print();
account.requestLoan(500);
account.print();
console.log(account);
console.log(account.getMovements());
