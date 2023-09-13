import {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../interfaces";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Rating, Stack, Typography} from "@mui/material";
import {posterUrl} from "../../constans";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    movie: IMovie;
}

const Movie: FC<IProps> = ({movie}) => {
    const{poster_path,title,vote_average,id}= movie
    const navigate = useNavigate();

    const showMovieInfo = () => {
        navigate({pathname:`${id}`},{state:{...movie}})
    };

    return (
        <Box width='350px' >
            <Card
                sx={{
                    height:600,
                    margin:1
                }}>
                <CardMedia
                    component='img'
                    height='450'
                    image={posterUrl+poster_path}
                    alt={title}
                />
                <CardContent>
                    <Stack spacing={2}>
                        <Rating
                            max={10}
                            value={vote_average}
                            precision={0.5}
                            size='small'
                            readOnly
                        />
                    </Stack>
                    <Typography gutterBottom variant='h5' component='div'>
                        {title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' onClick={showMovieInfo}> More</Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export {Movie};