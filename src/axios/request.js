import axios from "axios";

const instance = axios.create({
    baseURL: 'http://52.194.122.239:8082/login/',
    timeout: 20000
})

export default instance