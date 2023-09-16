import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {GenrePage, MovieCardPage, MoviesByGenrePage, MoviesPage, NotFoundPage, SearchMoviePage} from "./pages";

const router = createBrowserRouter([
    {
        path: '',
        element:<MainLayout/>,
        children:[
            {
                index: true,
                element:<Navigate to={'movies'}/>
            },
            {
                path: 'movies',
                element:<MoviesPage/>
            },
            {
                path:'movies/:id',
                element:<MovieCardPage/>
            },
            {
                path: 'genres',
                element: <GenrePage/>
            },
            {
                path: 'genres/:all',
                element: <MoviesByGenrePage/>
            },
            {
                path: 'genres/all/:id',
                element:<MovieCardPage/>
            },
            {
                path:'search',
                element:<SearchMoviePage/>
            },
            {
                path:'search/:id',
                element:<MovieCardPage/>
            },
            {
                path:'*',
                element:<NotFoundPage/>
            }
        ]
    }
])

export {
    router
}