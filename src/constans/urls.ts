const baseURL = process.env.REACT_APP_API

const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDNiNmQxYWQ4NGY4ZDkzODc4YzQ5ODBmNmY2ZGRjZCIsInN1YiI6IjY0YmZkNGU3MDE3NTdmMDBmZjVlYzc2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7CYb-OMcG54QOMco0YkjyATafDTnzrOVkNqmheF3DW0'
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