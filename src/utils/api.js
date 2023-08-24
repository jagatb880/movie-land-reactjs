import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjc1MWQ5MTQ1ODE1ODk5OWEzZjI2MjFiMDc3ZGQ5NyIsInN1YiI6IjY0ZGNjYzk3Yjc3ZDRiMTEzZTA1YTZkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5EUgK7QTQElx63rnfTw-wO7wK-03tXLsJF4-J-QPD1s`
const TMDB_TOKEN = import.meta.env.VITE_MOVIELAND_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
}

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers, params
        })
        console.log(data);
        return data;
    } catch (err) {
        console.log(err)
        return err;
    }
}