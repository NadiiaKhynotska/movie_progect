import React from 'react';
import {TextField} from "@mui/material";

const Search = () => {

    return (
        <>
            <TextField
                id={'search'}
                placeholder={'Search'}
                fullWidth={true}
                sx={{mb:5}}
                variant={'standard'}
            />
        </>
    );
};

export {Search};