import axios from "axios";

const API_KEY = '59690fb8c3cf713288ed91edca8f1f5d'

const tmdbClient = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    timeout: 1000,
    headers: {
        "Content-Type": "text/plain",
    },
    params: {
        'api_key': API_KEY
    }
});


export const getMovies = async () => {
    try {
        const response = await tmdbClient.get('/discover/movie')
        return response.data
    } catch (error) {
        console.log(error)
        return []
    }
}