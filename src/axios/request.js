import axios from "axios";

const instance = axios.create({
    baseURL: 'http://112.74.20.204:8082/login/',
    timeout: 2000
})

export default instance