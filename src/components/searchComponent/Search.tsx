import React, {useEffect, useState} from 'react';
import {TextField} from "@mui/material";
import {useAppDispatch} from "../../hooc";
import {useSearchParams} from "react-router-dom";
import {searchActions} from "../../redux";

const Search = () => {
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: '1', query:''});
    const page = + query.get('page')
    const [queryVal, setQueryVal] = useState(query.get('query'))

    console.log(page,queryVal)
    const inputOnChange = (event:any) => {
        if(!event.target.value){
            return
        }
        setQueryVal(event.target.value)
    };

    useEffect(() => {
        dispatch(searchActions.getSearchedMovies({page:page, query:queryVal}))
        setQuery(prev => ({...prev, page: prev.get('page')}))
    }, [page, dispatch, queryVal]);
    return (
        <>
            <TextField
                id={'search'}
                placeholder={'Search'}
                fullWidth={true}
                sx={{mb:5}}
                variant={'standard'}
                InputProps={{
                    onChange: inputOnChange
                }}
            />
        </>
    );
};

export {Search};