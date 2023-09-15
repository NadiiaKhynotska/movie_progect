import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppLocation, useAppSelector} from "../../hooc";
import {movieActions, searchActions} from "../../redux";
import {Movie} from "./Movie";
import {styled} from "@mui/material";
import {Search} from "../searchComponent/Search";


const Movies = () => {
    const {movies,total_pages} = useAppSelector(state => state.movies);
    const {state:id} = useAppLocation<number>();
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: '1', query:''});
    const page = +query.get('page')

    useEffect(() => {
        // if(href===`http://localhost:3000/genres/all?${page}`){
        //     dispatch(movieActions.getByGenre({page, with_genres:id}))
        // }else if(href ===` http://localhost:3000/movies?${page}`){
            dispatch(movieActions.getAll({page}))
            // dispatch(searchActions.getSearchedMovies({page:page, query:queryVal}))
        // }
        setQuery(prev => ({...prev, page: prev.get('page')}))
    }, []);

    console.log(movies, 'idddd',id,'MOVIES')


const Wrapper = styled('div')({
    display:"flex",
    flexFlow: "wrap",
    justifyContent:"center",
    alignItems:"center"
})

    return (
        <Wrapper>
            {
                movies?.map(movie => <Movie movie={movie} key={movie.id}/>)
            }
        </Wrapper>
    );
};

export {Movies};