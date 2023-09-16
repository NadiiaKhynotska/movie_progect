import React from 'react'

import {MoviesByGenres} from "../components/movieContainer/MoviesByGenres";
import {useAppLocation} from "../hooc";

const MoviesByGenrePage = () => {
    const {state:id} = useAppLocation<number>();
    if (id) {
        localStorage.setItem('genreId', id.toString())
    }
    return (
        <div>
            <MoviesByGenres/>
        </div>
    );
};

export {MoviesByGenrePage};