import React, {useEffect} from 'react';

import {IMovie} from "../interfaces";
import {useAppDispatch, useAppLocation, useAppSelector} from "../hooc";
import {genreActions} from "../redux";
import {MovieCard} from "../components";

const MovieCardPage = () => {
const {state:currentMovie} = useAppLocation<IMovie>();
const {genres} = useAppSelector(state => state.genres);
const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getAllGenres())
    }, [dispatch]);

    return (
        <div>
            {currentMovie && <MovieCard genres={genres} currentMovie={currentMovie}/>}
        </div>
    );
};

export {MovieCardPage};