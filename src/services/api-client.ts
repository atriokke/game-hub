import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '92645d9185114a97abddc9d05d764791'
    }
})