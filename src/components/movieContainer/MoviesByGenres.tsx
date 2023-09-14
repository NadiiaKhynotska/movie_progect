import {PropsWithChildren, FC, useEffect} from 'react';
import {useAppDispatch, useAppLocation, useAppSelector} from "../../hooc";
import {movieActions} from "../../redux";
import {useSearchParams} from "react-router-dom";
import {Movie} from "./Movie";

interface IProps extends PropsWithChildren {

}

const MoviesByGenres: FC<IProps> = () => {
    const {state} = useAppLocation<number>();
    const dispatch = useAppDispatch();
    const {movies} = useAppSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = + query.get('page')

    useEffect(() => {
        dispatch(movieActions.getByGenre({page, with_genres:state}))
    }, [page]);

    return (
        <div>
            {movies.map(movieByGenre => <Movie key={movieByGenre.id} movieByGenre={movieByGenre}/>)}
        </div>
    );
};

export {MoviesByGenres};