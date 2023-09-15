import React from 'react';
import {Movies} from "../components";
import {MoviesByGenres} from "../components/movieContainer/MoviesByGenres";
import {useAppLocation} from "../hooc";

const MoviesByGenrePage = () => {
    const {state:id} = useAppLocation<number>();

    console.log(id)
    return (
        <div>
            <MoviesByGenres state={id}/>
        </div>
    );
};

export {MoviesByGenrePage};