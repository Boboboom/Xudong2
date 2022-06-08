import axios from "axios";

const instance = axios.create({
    baseURL: 'http://35.77.87.80:8082/login/',
    timeout: 20000
})

export default instance