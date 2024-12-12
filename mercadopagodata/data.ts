import Documento from "../model/documento";


export default function gerarcodigo(documento: Documento, vencimento:string){
        if (!documento.email || !documento.numerodocumento) {
            throw new Error("Dados incompletos: 'email' e 'cpf' são obrigatórios.");
        }

        return  {
            transaction_amount: documento.transferencia, 
            payment_method_id: 'pix',  
            payer: {
                email: documento.email,
            identification: {
                type: documento.identificacaoDocumento,  
                number: documento.numerodocumento
                }
            },
            description: documento.descricao, 
            external_reference: 'MP' + new Date().getTime(),  
            installments: 1,
            date_of_expiration: vencimento

        }
    }
