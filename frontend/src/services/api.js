import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export const apifootball = axios.create({
    baseURL: 'https://api-football-v1.p.rapidapi.com/'
});