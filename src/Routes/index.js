import FooterPage from "../pages/FooterPage/FooterPage";
import HomePage from "../pages/HomePage/HomePage";
import NotfoundPage from "../pages/NotFoundPage/NotfoundPage";
import Orderpage from "../pages/OrderPage/Orderpage";
import ProductPage from "../pages/ProductPage/ProductPage";

export const routes = [

    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    
    {
        path: '/order',
        page: Orderpage,
        isShowHeader: true
    },
    
    {
        path: '/product',
        page: ProductPage,
        isShowHeader: true
    },
     {
        path: '*',
        page: NotfoundPage,
    }

]