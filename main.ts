import MercadoPago from './mercadopagocli/mercadopago';
import Documento from "./model/documento";
import gerarcodigo from './mercadopagodata/data';
import vencimentopix from './mercadopagodata/vencimentodocumento';


//const accessToken = 'TEST-45468-110709-ea35bc01fa20d6049f87-256921779';


const accessToken = 'APP_USR-xxxxxxxxxx-xxxx-xxxx-xxx';

const mercadopagoAPI = new MercadoPago();
const documento = new Documento();

documento.email = "jefersoncardoso.dev@gmail.com";
documento.identificacaoDocumento ='cpf'
documento.numerodocumento = '02680574192';
documento.transferencia = 0.4
const minutos: number = 7
documento.descricao = "teste"


mercadopagoAPI.get_https(accessToken,gerarcodigo(documento,vencimentopix(minutos))).then(response => {
console.error(response);

});


