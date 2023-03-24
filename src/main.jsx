import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider , Route } from 'react-router-dom'



//páginas 
import Home from './routes/home/Home'
import NewPost from './routes/new-post/NewPost'
import Post from './routes/post/Post'

const router = createBrowserRouter([
  {
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/new",
        element: <NewPost/>
      },
      {
        path:"/post?/:id?/:userId?",
        element: <Post/>
      }

    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
