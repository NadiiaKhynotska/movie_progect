import {useState} from 'react';
import {Container, TextField} from "@mui/material";


const Search= () => {
    const [keyWord, setKeyWord] = useState(''|| localStorage.getItem('keyWord'))
    localStorage.setItem('keyWord', keyWord)
    
    return (
        <Container sx={{marginY:3,marginX:'auto'}}>
            <TextField
                fullWidth
                label='Search movie by key word'
                value={keyWord}
                variant= {"standard"}
                onChange={(event)=>setKeyWord(event.target.value)}
            />
        </Container>
    );
};

export {Search};