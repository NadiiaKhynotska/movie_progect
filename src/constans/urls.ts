const baseURL = process.env.REACT_APP_API

const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmM2NjUxMDA5NGExYTUyNmJlYzMwMDdhMDA1NTEwNyIsInN1YiI6IjY0YmZkNGU3MDE3NTdmMDBmZjVlYzc2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q3Y9mzjW9fomRNxRrO73gpKzVmesQoVHMohB46YsGRU'
const posterUrl = 'https://image.tmdb.org/t/p/w500'
const movie = '/movie';


const urls = {
    films:{
        base: `/discover${movie}`,
        byId: (id:number) =>`${movie}/${id}`,
        search: `/search${movie}`,
        byCredits: (id:number)=>`${movie}/${id}/credits`
    },
    genres:{
        base:`genre${movie}/list`
    }
}


export {
    baseURL,
    urls,
    access,
    posterUrl
}