import Home from "../page/home/Home"
import ProductList from "../page/product/ProductList"
const router = [
    {
        path: '/',
        element: Home,
        layout: null,
    },
    {
        path: '/products',
        element: ProductList,
        layout: null,
    },
]
export {router}