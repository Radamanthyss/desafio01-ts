import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan (valor:number): void{
    if(this.status){
      this.saldo += valor
      console.log(`Após este empréstimo,seu saldo agora é de ${this.saldo}`)
    }
  }
}
