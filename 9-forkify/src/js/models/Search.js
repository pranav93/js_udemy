import axios from 'axios';
import {
    apiUrl
} from "../config";

export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResults() {
        try {
            const res = await axios(`${apiUrl}/api/search?q=${this.query}`);
            this.result = res.data.recipes;
        } catch (error) {
            alert('Something went wrong');
        }
    }
}