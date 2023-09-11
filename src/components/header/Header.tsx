import {FC, PropsWithChildren} from 'react';
import TheatersIcon from '@mui/icons-material/Theaters';
import Face3Icon from '@mui/icons-material/Face3';
import {AppBar, Button, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";


interface IProps extends PropsWithChildren {

}

const Header: FC<IProps> = () => {
    const navigate = useNavigate();


    return (
        <AppBar position={"static"} color={"transparent"}>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <TheatersIcon/>
                </IconButton>
                <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                    MOVIE PROJECT
                </Typography>
                <Stack direction='row' spacing={2} >
                    <Button color='inherit' onClick={() => navigate('movies')}>All movies</Button>
                    <Button color='inherit' onClick={() => navigate('genres')}>All genres</Button>
                    <Button color='inherit'>About</Button>

                    <Stack  >
                        <IconButton size='medium' edge='end' color='inherit' aria-label='logo'>
                            <Face3Icon/>
                        </IconButton>
                        <Typography variant='h6' component='div'>
                            Nadiia
                        </Typography>
                    </Stack>
                    {/*<Button*/}
                    {/*    color='inherit'*/}
                    {/*    id='resources-button'*/}
                    {/*    aria-controls={open ? 'resources-menu' : undefined}*/}
                    {/*    aria-haspopup='true'*/}
                    {/*    aria-expanded={open ? 'true' : undefined}*/}
                    {/*    // endIcon={<KeyboardArrowDownIcon />}*/}
                    {/*    onClick={handleClick}>*/}
                    {/*    Resources*/}
                    {/*</Button>*/}
                    {/*<Button color='inherit'>Login</Button>*/}
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export {Header};