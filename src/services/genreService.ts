import {apiService} from "./apiService";
import {urls} from "../constans";
import {IGenre} from "../interfaces";
import {IGenresResponseInterface} from "../interfaces/genresResponseInterfase";

const genreService = {
    getAll :() => apiService.get<IGenresResponseInterface<IGenre>>(urls.genres.base)
}

export {
    genreService
}