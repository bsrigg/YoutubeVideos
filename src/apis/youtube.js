import Axios from 'axios';

// KEY is All CAPS because it represents a variable that's value should never change.
const KEY = 'AIzaSyC6WAvylBDQpOESbg5fnQZ2poQElWmO0os';

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

