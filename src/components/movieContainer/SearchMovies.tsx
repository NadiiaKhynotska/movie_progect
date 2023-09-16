import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooc";
import {movieActions} from "../../redux";
import {useSearchParams} from "react-router-dom";
import {Movie} from "./Movie";
import {Card, CardMedia, styled} from "@mui/material";
import movieCamera from '../../assets/movie-camera.png'

interface IProps extends PropsWithChildren {
    keyWord: string
}

const SearchMovies: FC<IProps> = ({keyWord}) => {
    localStorage.setItem('keyWord', keyWord)
    const keyword = localStorage.getItem('keyWord')
    const dispatch = useAppDispatch();
    const {searchedMovies} = useAppSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: '1', query: `${keyword}`});
    const page = +query.get('page')


    useEffect(() => {
        dispatch(movieActions.getSearchedMovies({page:page, query:keyword}))
    }, [keyword]);

    console.log(searchedMovies)
    const Wrapper = styled('div')({
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "center",
        alignItems: "center"
    })

    return (
        <Wrapper>
            {searchedMovies.length === 0 ?
                <Card
                    sx={{
                        height: 400,
                        margin: 1
                    }}>
                    <CardMedia
                        component='img'
                        height={'400'}
                        image={movieCamera}
                        alt={'movie-camera'}
                    />
                </Card>
                :
                searchedMovies.map(movie => <Movie movie={movie} key={movie.id}/>)}
        </Wrapper>
    );
};

export {SearchMovies};