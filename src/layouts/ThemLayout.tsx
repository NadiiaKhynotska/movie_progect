import React, {PropsWithChildren, FC} from 'react';
import {createTheme, CssBaseline, styled, ThemeProvider} from "@mui/material";


interface IProps extends PropsWithChildren {
    children: React.ReactNode
}

const ThemLayout: FC<IProps> = ({children}) => {

    const darkThem = createTheme({
        palette: {
            mode: 'dark'
        }
    })

    const Wrapper = styled('div')({
        margin:24,
        width: "auto",

    })
    return (
        <div>
            <ThemeProvider theme={darkThem}>
                <Wrapper>
                    <CssBaseline/>
                    {children}
                </Wrapper>
            </ThemeProvider>
        </div>
    );
};

export {ThemLayout};

