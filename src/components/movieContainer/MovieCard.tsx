import {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../interfaces";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {posterUrl} from "../../constans";

interface IProps extends PropsWithChildren {
    movie: IMovie;
}

const MovieCard: FC<IProps> = ({movie}) => {
    const{poster_path,title,vote_average}= movie

    return (
        <Box width='300px' >
            <Card>
                <CardMedia
                    component='img'
                    height='400'
                    image={posterUrl+poster_path}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'> More</Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export {MovieCard};