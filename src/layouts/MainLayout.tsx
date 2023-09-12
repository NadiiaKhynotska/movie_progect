import React from 'react';
import {Outlet} from "react-router-dom";
import {Header, Search} from "../components";


const MainLayout = () => {
    
    return (
        <>
            <Header/>
            <Search/>
            <Outlet/>
        </>
    );
};

export {MainLayout};