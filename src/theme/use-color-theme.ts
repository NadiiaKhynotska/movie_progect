import {createTheme, PaletteMode} from "@mui/material";
import React from "react";

import theme from "./theme";


export const useColorTheme = () => {
    let currentTheme = localStorage.getItem('theme')
    const [mode, setMode] = React.useState<PaletteMode>(currentTheme === 'dark'?'dark':'light');
    const toggleColorMode = () => {
        if (mode === 'light') {
            localStorage.setItem('theme', 'dark')
            setMode('dark')
        } else {
            localStorage.setItem('theme', 'light')
            setMode('light')
        }
    }

    const modifiedTheme = React.useMemo(
        () =>
            createTheme({
                ...theme,
                palette: {
                    ...theme.palette,
                    mode,
                },
            }),
        [mode]
    );
    return {
        theme: modifiedTheme,
        mode,
        toggleColorMode,
    };
}