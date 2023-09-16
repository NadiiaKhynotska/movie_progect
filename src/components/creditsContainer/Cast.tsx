import {FC, PropsWithChildren} from 'react';
import {Card, CardMedia, Typography} from "@mui/material";

import {ICast} from "../../interfaces";
import {posterUrl} from "../../constans";
import notImg from "../../assets/not-found-img.jpg";

interface IProps extends PropsWithChildren {
    cast: ICast
}

const Cast: FC<IProps> = ({cast}) => {
    const {original_name, profile_path} = cast

    return (
        <Card
            sx={{
                // height: 250,
                margin: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
            <CardMedia
                component='img'
                height={'220'}
                image={!profile_path ? notImg : posterUrl + profile_path}
                alt={original_name}
            />

            <Typography gutterBottom variant='h6' component='p' sx={{marginTop: 2, paddingX: 2}}>
                {original_name}
            </Typography>


        </Card>
    );
};

export {Cast};