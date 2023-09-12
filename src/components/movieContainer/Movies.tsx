import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooc";
import {movieActions} from "../../redux";
import {MovieCard} from "./MovieCard";
import {styled} from "@mui/material";


const Movies = () => {
    const {movies,total_pages} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = +query.get('page')

    useEffect(() => {
        dispatch(movieActions.getAll({page}))
        setQuery(prev => ({...prev, page: prev.get('page')}))
    }, [page, setQuery,dispatch]);

    console.log(movies)

const Wrapper = styled('div')({
    display:"flex",
    flexFlow: "wrap",
    justifyContent:"center",
    alignItems:"center"
})

    return (
        <Wrapper>
            {
                movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)
            }
        </Wrapper>
    );
};

export {Movies};