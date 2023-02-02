import './App.scss'
import AddProduct from "./pages/AddProduct/AddProduct.jsx";
import ProductList from "./pages/ProductList/ProductList.jsx";

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Link,
    Outlet,
    RouterProvider
} from 'react-router-dom'


function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root/>}>
                <Route index element={ <ProductList/>} />
                <Route path="add-product" element={ <AddProduct/>} />
            </Route>
        )
    )

  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  )
}

const Root = () => {
    return <>
        <div>
            <Link to="/">Product list</Link>
            <Link to="/add-product">Add products</Link>
        </div>

        <div>
            <Outlet/>
        </div>
    </>
}

export default App
