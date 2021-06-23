import axios from 'axios'

const api = axios.create({
    baseURL: 'https://trabalho-react-g2.herokuapp.com/'
});

export default api;