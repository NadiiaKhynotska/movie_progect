import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooc";
import {movieActions, searchActions} from "../../redux";
import {Movie} from "./Movie";
import {styled} from "@mui/material";
import {Search} from "../searchComponent/Search";


const Movies = () => {
    const {movies,total_pages} = useAppSelector(state => state.movies);
    const {searchedMovies} = useAppSelector(state => state.searchMovies);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: '1', query:''});
    const page = + query.get('page')
    const [queryVal, setQueryVal] = useState(query.get('query'))


    useEffect(() => {
        if(searchedMovies.length ===0){
            dispatch(movieActions.getAll({page}))
        }else{
            dispatch(searchActions.getSearchedMovies({page:page, query:queryVal}))
        }
        setQuery(prev => ({...prev, page: prev.get('page')}))
    }, [page, setQuery,dispatch]);

    console.log(movies, searchedMovies, queryVal)

const Wrapper = styled('div')({
    display:"flex",
    flexFlow: "wrap",
    justifyContent:"center",
    alignItems:"center"
})

    return (
        <Wrapper>
            {/*<Search setQueryVal={setQueryVal}/>*/}
            {searchedMovies.length !== 0 ?
                searchedMovies.map(movie => <Movie movie={movie} key={movie.id}/>) :
                movies.map(movie => <Movie movie={movie} key={movie.id}/>)
            }
        </Wrapper>
    );
};

export {Movies};