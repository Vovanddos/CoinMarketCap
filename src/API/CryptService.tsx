import axios from "axios";

export default class CryptService {
    static async getAll(limit:number) {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            params: {
                limit:limit
            },
            headers: {
                'X-CMC_PRO_API_KEY': 'insert your API key',
            }

        })
        return response.data.data
    }

    static async getInfo(id: number) {
        const response = await axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${id}`, {
            headers: {
                'X-CMC_PRO_API_KEY': 'insert your API key'
            },
        })
        return response.data.data
    }
}