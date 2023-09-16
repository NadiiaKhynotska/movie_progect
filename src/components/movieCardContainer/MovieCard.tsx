import {FC, PropsWithChildren} from 'react';
import {
    Badge,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Rating,
    Stack,
    styled,
    Typography
} from "@mui/material";

import {IGenre, IMovie} from "../../interfaces";
import {posterUrl} from "../../constans";
import {useNavigate} from "react-router-dom";
import notImg from "../../assets/not-found-img.jpg"
import {Casts} from "../creditsContainer/Casts";

interface IProps extends PropsWithChildren {
    genres: IGenre[];
    currentMovie: IMovie;
}

const MovieCard: FC<IProps> = ({currentMovie, genres}) => {
    const {title, poster_path, vote_average, genre_ids, overview,id} = currentMovie
    const navigate = useNavigate();


    const Wrapper = styled('div')({
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    })

    return (
        <Wrapper>
            <Box width='35%'>
                <Card
                    sx={{
                        height: 800,
                        margin: 2,
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        flexFlow: 'column'

                    }}>
                    <CardMedia
                        component='img'
                        height= {'750'}
                        image={!poster_path? notImg : posterUrl + poster_path}
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
                </Card>
            </Box>
            <Box width='60%'>
                <Card
                    sx={{
                        margin: 2,
                        padding:2,
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        flexFlow: 'column'

                    }}
                >
                    <Typography gutterBottom variant='h4' component='div'>
                        {title}
                    </Typography>
                    <Typography gutterBottom variant='h5' component='div'>
                        {overview}
                    </Typography>
                    <Stack spacing={3} direction={'row'} sx={{margin:5}}>
                        <Typography>Genres:</Typography>
                        {genre_ids?.map(movieGenre => (
                        <Badge key={movieGenre} color="primary">{genres?.filter(value => value.id === movieGenre)[0]?.name}</Badge>))}
                    </Stack>
                    <Casts id={id}/>
                    <Button size='large' onClick={()=>navigate(-1)} sx={{marginTop:5}} > Back to all movies</Button>
                </Card>
            </Box>
        </Wrapper>
    );
};

export {MovieCard};