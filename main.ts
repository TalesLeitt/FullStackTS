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
