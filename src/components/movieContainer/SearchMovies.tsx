import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {Card, CardMedia, Stack, styled} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooc";
import {movieActions} from "../../redux";
import {Movie} from "./Movie";
import movieCamera from '../../assets/movie-camera.png'
import {PaginationComponent} from "../pagination/PaginationComponent";

interface IProps extends PropsWithChildren {
    keyWord: string
}

const SearchMovies: FC<IProps> = ({keyWord}) => {

    const dispatch = useAppDispatch();
    const {searchedMovies, total_pages} = useAppSelector(state => state.movies);
    localStorage.setItem('keyWord', keyWord)
    const keyword = localStorage.getItem('keyWord')
    const [query] = useSearchParams({page: '1'});
    const page = +query.get('page')

    useEffect(() => {
        dispatch(movieActions.getSearchedMovies({page:page, query:keyword}))
    }, [keyword, page, dispatch]);

    const Wrapper = styled('div')({
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "center",
        alignItems: "center"
    })

    return (
        <Stack>
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

            <Stack sx={{marginX:'auto'}}>{total_pages > 1 && <PaginationComponent/>}</Stack>
        </Stack>
    );
};

export {SearchMovies};