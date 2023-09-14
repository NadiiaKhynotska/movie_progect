import {FC, PropsWithChildren} from 'react';
import {IGenre, IMovie} from "../../interfaces";
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
import {posterUrl} from "../../constans";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    genres: IGenre[];
    currentMovie: IMovie;
}

const MovieCard: FC<IProps> = ({currentMovie, genres}) => {
    const {title, poster_path, vote_average, genre_ids, overview} = currentMovie
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
                        height='750'
                        image={posterUrl + poster_path}
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
                        height: 600,
                        margin: 2,
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
                    <Stack spacing={3}>
                        <Typography>Genres:</Typography>

                        {genre_ids?.map(movieGenre => (
                        <Badge>{genres?.filter(value => value.id === movieGenre)[0]?.name}</Badge>))}
                    </Stack>
                    <Button size='small' onClick={()=>navigate(-1)} sx={{margin:7}}> Back to all movies</Button>
                </Card>
            </Box>
        </Wrapper>
    );
};

export {MovieCard};