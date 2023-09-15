import React, {useEffect} from 'react';
import {movieActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooc";
import {useSearchParams} from "react-router-dom";
import {styled} from "@mui/material";
import {Movie} from "./Movie";


const MoviesByGenres = () => {
    const id = localStorage.getItem('genreId')
    const {moviesByGenres} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: '1', query: id});
    const page = +query.get('page')


    useEffect(() => {
        dispatch(movieActions.getByGenre({page, with_genres: +id}))
        setQuery(prev => ({...prev, page: prev.get('page'), query: id}))

    }, []);


    const Wrapper = styled('div')({
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "center",
        alignItems: "center"
    })

    return (
        <Wrapper>
            {
                moviesByGenres?.map(movie => <Movie movie={movie} key={movie.id}/>)
            }
        </Wrapper>

    );
};

export {MoviesByGenres};