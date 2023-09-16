import {FC, PropsWithChildren, useEffect} from 'react';
import {Stack} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooc";
import {creditActon} from "../../redux";
import {Cast} from "./Cast";

interface IProps extends PropsWithChildren {
    id: number
}

const Casts: FC<IProps> = ({id}) => {
    const dispatch = useAppDispatch();
    const {casts} = useAppSelector(state => state.credits);

    useEffect(() => {
        dispatch(creditActon.getAllCasts({id}))
    }, [dispatch, id]);

    const renderCasts = casts.slice(0, 8)

    return (
        <Stack spacing={{xs: 1, sm: 2}} direction="row" useFlexGap flexWrap="wrap"
               sx={{
                   display: 'flex',
                   justifyContent: 'center',
                   alignItems: 'center'
               }}>
            {renderCasts.map(cast => <Cast key={cast.id} cast={cast}/>)}
        </Stack>
    );
};

export {Casts};