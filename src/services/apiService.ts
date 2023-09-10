import axios from "axios";
import {access, baseURL} from "../constans";

const apiService = axios.create({baseURL})

apiService.interceptors.request.use(req => {
    req.headers.Authorization = `Bearer ${access}`

    return req
})

export {
    apiService
}