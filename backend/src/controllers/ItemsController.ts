import { DetailInterface, Category } from './../models/types';
import { AxiosResponse } from 'axios';
import axios from 'axios';

import { Request, Response } from 'express';
import 'express-async-errors';
import api from '../api';
import SearchResults, { ItemsInterface } from '../models/types';

export default{
    async search(request: Request, response: Response){
        const query = request.query.Q;
        const {data} = await api.get(`sites/MLA/search?q=${query}`);
        
        return response.json(setSearchResult(data))
    },

    async detail(request: Request, response: Response){
        const { id } = request.params;
        const requestDetail = api.get(`items/${id}`);
        const requestDescription = api.get(`items/${id}/description`);

        axios.all([requestDetail, requestDescription]).then(axios.spread((...responses) => {
            const responseDetail = responses[0];
            const responseDescription = responses[1];
            return response.json(setDetailResult(responseDetail, responseDescription))
        }))
    }
}

function setSearchResult(data: any){
    const items = data.results.slice(0,4);
    const categories: Category[] = data.available_filters[0].values;
    categories.sort((a,b) => b.results - a.results);

    let itemsResult: ItemsInterface[] = Object.values(items).map((val: any) => {
        return {
            id: val.id,
            title: val.title,
            price: {
                currency: val.currency_id,
                amount: val.price,
                decimals: 2,
            },
            picture: val.thumbnail,
            condition: val.condition,
            free_shipping: val.shipping.free_shipping,
            address: val.address.state_name,
        };
    });

    const searchResults: SearchResults = {
        author: {name: 'Rafael', lastname: 'Silva'},
        categories,
        items: itemsResult,
    };

    return searchResults;
}

function setDetailResult(detail: AxiosResponse, description: AxiosResponse){
    const detailResponse: DetailInterface = 
    {
        author: {name: 'Rafael', lastname: 'Silva'},
        id: detail.data.id,
        title: detail.data.title,
        price: {
            currency: detail.data.currency_id,
            amount: detail.data.price,
            decimals: 2,
        },
        picture: detail.data.thumbnail,
        condition: detail.data.condition,
        free_shipping: detail.data.shipping.free_shipping,
        sold_quantity: detail.data.sold_quantity,
        description: description.data.plain_text,
    };
    return detailResponse;
}
