import {apiService} from "./apiService";
import {urls} from "../constans";
import {IGenre} from "../interfaces";

const genreInterface = {
    getAll :() => apiService.get<IGenre[]>(urls.genres.base)
}

export {
    genreInterface
}