import React from 'react';
import {Outlet} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";

import {Header} from "../components";
import {useThemeContext} from "../theme";


const MainLayout = () => {
    const { theme } = useThemeContext();
    
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Header/>
                <Outlet/>
            </ThemeProvider>
        </>
    );
};

export {MainLayout};