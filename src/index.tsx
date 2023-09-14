import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";

import {router} from "./router";
import {store} from "./redux";
import {ThemeContextProvider} from "./theme";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
       <ThemeContextProvider>
            <RouterProvider router={router}/>
       </ThemeContextProvider>
    </Provider>
);


