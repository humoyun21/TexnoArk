import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import App from "../App";
import {SignIn, SignUP, Error, Main,  Category,Product, Brand, Settings, SubCategory,BrandCategory,ProductDetail, Profile, Stock } from "@pages"

const index = ()=>{
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route index element={<SignIn />} />
                <Route path="/signup" element={<SignUP />} />
                <Route path="/main/*" element={<Main />} >
                    <Route index element={<Category />} />
                    <Route path="*" element={<Error />} />
                    <Route path="products" element={<Product />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="products/:id" element={<ProductDetail/>} />
                    <Route path="category/:subcategory" element={<SubCategory /> } /> 
                    <Route path="brand" element={<Brand />} />
                    <Route path="brand-category" element={<BrandCategory />} />
                    <Route path="stock" element={<Stock />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
                <Route path="*" element={<Error />} />
                
            </Route>
            )
        );
        return <RouterProvider router={router} />;
}

export default index;