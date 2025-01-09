import axios from 'axios';

export default class MercadoPago{
    private endpoint:string = 'https://api.mercadopago.com/v1/payments'
    private uniqueIdempotencyKey = 'unique-idempotency-key-' + new Date().getTime(); 
    async get_https(accessToken:string, data:object){
        try {
        const response = await axios.post(this.endpoint, data, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'X-Idempotency-Key': this.uniqueIdempotencyKey,
            },
        });
        return response.data.point_of_interaction.transaction_data.qr_code
    } catch (error: any) {
        if (error.response) {
            return `Erro ao criar pagamento via Pix: ${JSON.stringify(error.response.data)}`
        } 
    }

    }
}
