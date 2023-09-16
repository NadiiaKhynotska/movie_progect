import {FC, PropsWithChildren} from 'react';
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../interfaces";

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {name, id} = genre
    const navigate = useNavigate();

    const showAllMoviesByGenres = () => {
        navigate({pathname:`all`},{state:id})
    };

    return (
    <Box width='250px' >
        <Card
            sx={{
                height:150,
                margin:1,
                display:'flex',
                justifyContent:'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' onClick={showAllMoviesByGenres}> More</Button>
            </CardActions>
        </Card>
    </Box>
    );
};

export {Genre};