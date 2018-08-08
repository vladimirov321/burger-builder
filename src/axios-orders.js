import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-884fc.firebaseio.com/'
});

export default instance;