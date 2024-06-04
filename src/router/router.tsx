
import React from "react";
import GrainIcon from '@mui/icons-material/Grain';




interface Route {
    path: string;
    content: string;
    icon: React.ReactElement;
}

export const routes: Route[] = [
    {
        path: "/main",
        content: "Category",
        icon: <GrainIcon/>
    },
    {
        path: "/main/products",
        content: "Products",
        icon: <GrainIcon/>
    },
    {
        path: "/main/brand",
        content: "Brand",
        icon: <GrainIcon/>
    },
]

export default routes