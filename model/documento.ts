import { retry } from "rxjs";

export default 
class Documento{
    private EMAIL: string = '';
    private numero!: string;
    private tipoDeDocumento:string = ''
    private valores:number=0;
    private desc:string =''


    set email(email:string){
        this.EMAIL = email
    }
    set identificacaoDocumento(ide:string){
        this.tipoDeDocumento = ide

    }
    set numerodocumento(numero:string){
        this.numero = numero
    }

    set transferencia(valor:number){
        this.valores = valor
    }
    
    set descricao(descricao:string){
        this.desc = descricao
    }
    get email():string{
        return this.EMAIL
    }

    get identificacaoDocumento():string{
        return this.tipoDeDocumento
    }
    get numerodocumento():string{
        return this.numero
    }

    get transferencia():number{
        return this.valores
    }

    get descricao():string{
        return this.desc
    }

}