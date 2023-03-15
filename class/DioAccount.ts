export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  protected status: boolean = true
  protected saldo: number = 0

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit (valor:number): void{
    if(this.validateStatus()){
      this.saldo += valor
      console.log(`Após este depósito,seu saldo agora é de ${this.saldo}`)
    }
  }

  withdraw (valor:number): void{
    if(this.validateStatus()){
      if(this.saldo > valor){
        this.saldo -= valor
        console.log(`Após este saque,seu saldo agora é de ${this.saldo}`)
      }else{
        console.log('Você não tem saldo suficiente pra efetuar este saque!')
      }
    }

  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
