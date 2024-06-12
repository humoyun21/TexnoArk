
import React from "react";
import GrainIcon from '@mui/icons-material/Label';
import New from '@mui/icons-material/PublishRounded'
import Neww from '@mui/icons-material/BrandingWatermarkRounded'
import And from '@mui/icons-material/Category'
import Grid3x3Icon from '@mui/icons-material/Grid3x3';



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
        icon: <New/>
    },
    {
        path: "/main/brand",
        content: "Brand",
        icon: <Neww/>
    },
    {
        path: "/main/brand-category",
        content: "Brand Category",
        icon: <And/>
    },
    {
        path: "/main/stock",
        content: "Stock",
        icon: <Grid3x3Icon/>
    }
]

export default routes