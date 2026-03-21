
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './componant/Navbar/Navbar'
import Layout from './componant/Layout/Layout'
import Home from './componant/Home/Home'

function App() {
 
    let router=createBrowserRouter([{ path:'/', element:<Layout/>, children:[
      {path:'/', element:<Home/> },

    ]
    }])
  return <>
  <RouterProvider router={router}/>
  </>
}

export default App
