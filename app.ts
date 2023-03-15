import { CompanyAccount } from './class/CompanyAccount'
import { NiceAccount } from './class/NiceAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100)
peopleAccount.withdraw(90)
const companyAccount: CompanyAccount = new CompanyAccount('Google',2724)
companyAccount.getLoan(1000)
const maneiro: NiceAccount = new NiceAccount('Laercio',167)
maneiro.depositoManeiro(50)