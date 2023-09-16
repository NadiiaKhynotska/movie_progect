import {apiService} from "./apiService";
import {urls} from "../constans";
import {ICast, ICredit, IMovie} from "../interfaces";
import {IPagination} from "../interfaces/paginationInterface";

const movieService = {
    getAll: (page: number) => apiService.get<IPagination<IMovie>>(urls.films.base, {params: {page}}),
    getByGenre:(page:number,with_genres:number) => apiService.get<IPagination<IMovie>>(urls.films.base, {params: {page,with_genres}}),
    getCredits: (id:number)=> apiService.get<ICredit<ICast>>(urls.films.byCredits(id)),
    searchByKeyWord: (query:string, page:number)=> apiService.get<IPagination<IMovie>>(urls.films.search, {params:{query,page}})
}

export {
    movieService
}