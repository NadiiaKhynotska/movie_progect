import React, {useState} from 'react';
import {Container, TextField} from "@mui/material";

import { SearchMovies} from "../components";

const SearchMoviePage = () => {
    const [keyWord, setKeyWord] = useState(''|| localStorage.getItem('keyWord'))

    return (
        <div>
            <Container sx={{marginY:3,marginX:'auto'}}>
                <TextField
                    fullWidth
                    label='Search movie by key word'
                    value={keyWord}
                    variant= {"standard"}
                    onChange={(event)=>setKeyWord(event.target.value)}
                />
            </Container>
            <SearchMovies keyWord={keyWord}/>
        </div>
    );
};

export {SearchMoviePage};