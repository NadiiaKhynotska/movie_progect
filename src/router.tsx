import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {GenrePage, MovieCardPage, MoviesByGenrePage, MoviesPage, NotFoundPage} from "./pages";

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
                path:'*',
                element:<NotFoundPage/>
            }
        ]
    }
])

export {
    router
}