import React from 'react';
import {Outlet} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";

import {Header, Search} from "../components";
import {useThemeContext} from "../theme";


const MainLayout = () => {
    const { theme } = useThemeContext();
    
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Header/>
                <Search/>
                <Outlet/>
            </ThemeProvider>
        </>
    );
};

export {MainLayout};