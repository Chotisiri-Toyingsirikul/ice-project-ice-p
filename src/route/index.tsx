import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Homepage from '../pages/Homepage';
import DetailPage from '../pages/DetailPage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/detail/:id",
        element: <DetailPage />,
    },


]);