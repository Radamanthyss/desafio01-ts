import { DioAccount } from "./DioAccount";

export class NiceAccount extends DioAccount{

    constructor(name:string,accountNumber:number){
        super(name,accountNumber);
    }

    depositoManeiro(valor:number){
        this.saldo += valor+10;
        console.log(`Após este depósito maneiro,seu saldo agora é de ${this.saldo}`)
    }
}
