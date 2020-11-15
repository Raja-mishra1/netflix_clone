import axios from 'axios';

/** base url to make request to the movie database */
const instance = axios.create({
    fetchUrl: "https://api.themoviedb.org/3",
});

export default instance ;





