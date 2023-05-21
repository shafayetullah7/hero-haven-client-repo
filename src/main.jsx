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
import Blog from './components/blogs/Blog.jsx'
import PageTitle from './components/PageTitle.jsx'

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
            element:<>
            <PageTitle title={'Home'}></PageTitle>
            <Home></Home>
            </>
          },
          {
            path:'/add-toy',
            element:<>
            <PageTitle title={'Add toy'}></PageTitle>
            <PrivateRoute><AddToy></AddToy></PrivateRoute>
            </>
          },
          {
            path:'/all-toys',
            element:<>
            <PageTitle title={'All toys'}></PageTitle>
            <AllToys></AllToys>
            </>
          },
          {
            path:'/my-toys',
            element:<>
            <PageTitle title={'My toys'}></PageTitle>
            <PrivateRoute><MyToys></MyToys></PrivateRoute>
            </>
          },
          {
            path:'/update-toys/:id',
            element:<>
            <PageTitle title={'Update toy'}></PageTitle>
            <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>
            </>,
            loader:({params})=>fetch(`https://hero-haven-server.vercel.app/toys/${params.id}`)

          },
          {
            path:'/login',
            element:<>
            <PageTitle title={'Login'}></PageTitle>
            <Login></Login>
            </>
          },
          {
            path:'/register',
            element:<>
            <PageTitle title={'Register'}></PageTitle>
            <Register></Register>
            </>
          },
          {
            path:'/details/:id',
            element:<>
            <PageTitle title={'Toy | Details'}></PageTitle>
            <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>
            </>,
            loader:({params})=>fetch(`https://hero-haven-server.vercel.app/toys/${params.id}`)
          },
          {
            path:'/blog',
            element:<>
            <PageTitle title={'Blog'}></PageTitle>
            <Blog></Blog>
            </>
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
