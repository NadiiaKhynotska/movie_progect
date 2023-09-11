import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooc/useAppSelector";
import {useAppDispatch} from "../../hooc/useAppDispatch";
import {movieActions} from "../../redux/slices/movieSlice";
import {useSearchParams} from "react-router-dom";

const Movies = () => {
    const {movies} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = +query.get('page')

    useEffect(() => {
        dispatch(movieActions.getAll({page}))
        setQuery(prev => ({...prev, page: prev.get('page')}))
    }, [page, setQuery,dispatch]);

    console.log(movies)

    return (
        <div>

        </div>
    );
};

export {Movies};