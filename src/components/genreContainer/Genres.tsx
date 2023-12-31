import React, {useEffect} from 'react';
import {styled} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooc";
import {genreActions} from "../../redux";
import {Genre} from "./Genre";

const Genres = () => {
    const dispatch = useAppDispatch();
    const {genres} = useAppSelector(state => state.genres);
    
    useEffect(() => {
        dispatch(genreActions.getAllGenres())
    }, [dispatch]);


    const Wrapper = styled('div')({
        display:"flex",
        flexFlow: "wrap",
        justifyContent:"center",
        alignItems:"center"
    })

    return (
        <Wrapper>
            {genres.map(genre =><Genre key={genre.id} genre={genre}/>)}
        </Wrapper>
    );
};

export {Genres};