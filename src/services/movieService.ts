import {apiService} from "./apiService";
import {urls} from "../constans";
import {ICredit, IMovie} from "../interfaces";
import {IPagination} from "../interfaces/paginationInterface";

const movieService = {
    getAll: (page: number) => apiService.get<IPagination<IMovie>>(urls.films.base, {params: {page}}),
    getById: (id:number, page:number) => apiService.get<IMovie>(urls.films.byId(id),{params:{page}}),
    getCredits: (id:number,page:number)=> apiService.get<ICredit[]>(urls.films.byCredits(id), {params:{page}}),
    searchByKeyWord: (query:string, page:number)=> apiService.get<IPagination<IMovie>>(urls.films.search, {params:{query,page}})
}

export {
    movieService
}