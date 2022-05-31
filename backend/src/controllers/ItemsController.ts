import { ItemsInterface, ItemInterface } from './../../../web/src/services/types';
import { Request, Response } from 'express';
import 'express-async-errors';
import api from '../api';
import SearchResults from '../models/types';

export default{
    async search(request: Request, response: Response){
        const query = request.query.Q;
        const {data} = await api.get(`sites/MLA/search?q=${query}`);
        
        return response.json(setSearchResult(data))
    },

    async detail(request: Request, response: Response){
        const { id } = request.params;
        const {data} = await api.get(`/items/${id}`);
        return response.json(data)
    }
}

function setSearchResult(data: any){
    const items = data.results.slice(0,4);
    let itemsResult: ItemsInterface[] = Object.values(items).map((val: any) => {
        return {
            id: val.id,
            title: val.title,
            price: {
                currency: val.currency_id,
                amount: val.price,
                decimals: 0,
            },
            picture: val.thumbnail,
            condition: val.condition,
            free_shipping: val.shipping.free_shipping,
        };
    });

    const searchResults: SearchResults = {
        author: {name: 'Rafael', lastname: 'Silva'},
        categories: [],
        items: itemsResult,
    };

    return searchResults;
}
