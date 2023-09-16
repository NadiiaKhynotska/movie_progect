import {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Rating, Stack} from "@mui/material";

import {IMovie} from "../../interfaces";
import {posterUrl} from "../../constans";
import notImg from "../../assets/not-found-img.jpg"

interface IProps extends PropsWithChildren {
    movie: IMovie;

}

const Movie: FC<IProps> = ({movie}) => {
    const{poster_path,title,vote_average,id}= movie
    const navigate = useNavigate();

    const showMovieInfo = () => {
            navigate({pathname: `${id}`}, {state: {...movie}})
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
                    image={!poster_path? notImg: posterUrl+poster_path}
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
                </CardContent>
                <CardActions>
                    <Button size='medium' onClick={showMovieInfo}> {title}</Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export {Movie};