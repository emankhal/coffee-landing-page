import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './component/Layout/Layout'
import Home from './component/Home/Home'
import { Toaster } from 'react-hot-toast'

function App() {
 
    let router=createBrowserRouter([{ path:'/', element:<Layout/>, children:[
      {path:'/', element:<Home/> },

    ]
    }])
  return <>
  <RouterProvider router={router}/>
  <Toaster position="top-center" />
  </>
}

export default App
