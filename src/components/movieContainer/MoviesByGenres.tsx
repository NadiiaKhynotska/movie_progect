import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {Stack, styled} from "@mui/material";

import {movieActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooc";
import {Movie} from "./Movie";
import {PaginationComponent} from "../pagination/PaginationComponent";


const MoviesByGenres = () => {
    const id = localStorage.getItem('genreId')
    const {moviesByGenres,total_pages} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const [query] = useSearchParams({page: '1'});
    const page = +query.get('page')


    useEffect(() => {
        dispatch(movieActions.getByGenre({page, with_genres: +id}))
    }, [page,dispatch, id]);


    const Wrapper = styled('div')({
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "center",
        alignItems: "center"
    })

    return (
        <Stack>
            <Wrapper>
                {
                    moviesByGenres?.map(movie => <Movie movie={movie} key={movie.id}/>)
                }
            </Wrapper>
            <Stack sx={{marginX: 'auto'}}>{total_pages > 1 && <PaginationComponent/>}</Stack>
        </Stack>

    );
};

export {MoviesByGenres};