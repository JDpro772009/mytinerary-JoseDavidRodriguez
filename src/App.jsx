import { Home } from "./Pages/Home"
import { NotFound } from "./Pages/NotFound"
import { LayoutPrincipal } from "./Layouts/LayoutPrincipal"
import { Cities } from "./Pages/Cities"
import { City } from "./Pages/City"
import { SignIn } from "./Pages/SignIn"
import { SignUp } from "./Pages/SignUp"
import PrivateRoute from "./Components/PrivateRoutes"

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
  path:"/signIn",element: <PrivateRoute><SignIn></SignIn></PrivateRoute>
},{
  path:"/signUp",element: <SignUp></SignUp>
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
