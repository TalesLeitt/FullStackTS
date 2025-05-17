import { CompanyAccount } from "./Class/CompanyAccount";
import { PeopleAccount } from "./Class/PeopleAccount";
import { PeopleAccountPlus } from "./Class/PeopleAccoutPlus";

const companyAccount: CompanyAccount = new CompanyAccount('TalesGabi', 1234, 0);
companyAccount.printBalance();
companyAccount.deposit(1500);
companyAccount.printBalance();
companyAccount.withdraw(1400);
companyAccount.getLoan(2500);
companyAccount.printBalance();

const peopleAccount: PeopleAccount = new PeopleAccount(1234, 'Tales', 4321, 0);
peopleAccount.deposit(1500);
peopleAccount.printBalance();
peopleAccount.withdraw(2000);
peopleAccount.printBalance();

const peopleAccountPlus: PeopleAccountPlus = new PeopleAccountPlus(4321, 'Gabo', 1234, 0);
peopleAccountPlus.deposit(1500);
peopleAccountPlus.printBalance();