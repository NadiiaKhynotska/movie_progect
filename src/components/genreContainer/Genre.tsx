import {FC, PropsWithChildren} from 'react';
import {IGenre} from "../../interfaces";
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {name} = genre

    return (
    <Box width='250px' >
        <Card
            sx={{
                height:150,
                margin:1,
                display:'flex',
                justifyContent:'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'> More</Button>
            </CardActions>
        </Card>
    </Box>
    );
};

export {Genre};