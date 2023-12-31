import TheatersIcon from '@mui/icons-material/Theaters';
import Face3Icon from '@mui/icons-material/Face3';
import {AppBar, Button, IconButton, Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import NightModeToggle from "./NightModeToggle";

const Header = () => {
    const navigate = useNavigate();

    return (
        <AppBar position={"sticky"} color={"primary"}>
                <Stack direction='row' spacing={12} sx={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}} >
                    <Stack direction='row' spacing={2} sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                                 <TheatersIcon/>
                        </IconButton>
                        <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                            MOVIE PROJECT
                        </Typography>
                    </Stack>

                    <Stack spacing={2} direction={"row"}>
                        <Button size='large'  color='inherit' onClick={() => navigate('movies')}>All movies</Button>
                        <Button size='large'  color='inherit' onClick={() => navigate('genres')}>All genres</Button>
                        <Button size='large'  color='inherit' onClick={() => navigate('search')}>Search movies</Button>
                    </Stack>

                    <Stack spacing={2} direction='row'>
                        <NightModeToggle/>
                        <Stack>
                            <IconButton size='medium' edge='end' color='inherit' aria-label='logo'>
                            <Face3Icon/>
                            </IconButton>
                            <Typography variant='h6' component='div'>
                                Nadiia
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
        </AppBar>
    );
};

export {Header};