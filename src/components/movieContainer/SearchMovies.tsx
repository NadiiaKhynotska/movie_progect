import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooc";
import {movieActions} from "../../redux";
import {useSearchParams} from "react-router-dom";

const SearchMovies = () => {
    const keyword = localStorage.getItem('keyWord')
    const dispatch = useAppDispatch();
    const {searchedMovies} = useAppSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: '1', query: `${keyword}`});
    const page = +query.get('page')


    useEffect(() => {
        dispatch(movieActions.getSearchedMovies({page:page, query:keyword}))
        localStorage.clear()
    }, [keyword]);

    console.log(searchedMovies)

    return (
        <div>
            SearchMovies
        </div>
    );
};

export {SearchMovies};