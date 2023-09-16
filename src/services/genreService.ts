import {apiService} from "./apiService";
import {urls} from "../constans";
import {IGenre, IGenresResponseInterface} from "../interfaces";

const genreService = {
    getAll :() => apiService.get<IGenresResponseInterface<IGenre>>(urls.genres.base)
}

export {
    genreService
}