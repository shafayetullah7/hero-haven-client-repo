import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage.jsx'
import Home from './components/home/Home.jsx'
import AuthProvider from './components/access/AuthProvider.jsx'
import Login from './components/access/Login.jsx'
import Register from './components/access/Register.jsx'
import Main from './components/Main.jsx'
import AddToy from './components/addToy/AddToy.jsx'
import AllToys from './components/allToys/AllToys.jsx'
import DetailsPage from './components/detailsPage/DetailsPage.jsx'
import PrivateRoute from './components/access/PrivateRoute.jsx'
import MyToys from './components/mytoys/MyToys.jsx'
import UpdateToy from './components/mytoys/UpdateToy.jsx'

const routes = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Main></Main>,
        children:[
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'/add-toy',
            element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
          },
          {
            path:'/all-toys',
            element:<AllToys></AllToys>,
          },
          {
            path:'/my-toys',
            element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
          },
          {
            path:'/update-toys/:id',
            element:<PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
            loader:({params})=>fetch(`https://hero-haven-server.vercel.app/toys/${params.id}`)

          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/register',
            element:<Register></Register>
          },
          {
            path:'/details/:id',
            element:<PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
            loader:({params})=>fetch(`https://hero-haven-server.vercel.app/${params.id}`)
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={routes}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
