import { Home } from "./Pages/Home"
import { NotFound } from "./Pages/NotFound"
import { LayoutPrincipal } from "./Layouts/LayoutPrincipal"
import { Cities } from "./Pages/Cities"
import { City } from "./Pages/City"
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import './App.css'

let router = createBrowserRouter([{
  element:<LayoutPrincipal></LayoutPrincipal>,
  children:[{
  path:"/",element: <Home></Home>
},{
  path:"/home",element: <Home></Home>
},{
  path:"/city",element: <City></City>
},{
  path:"/cities",element: <Cities></Cities>
}]},{
  path:"/*",element: <NotFound></NotFound>
}])
function App() {


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
