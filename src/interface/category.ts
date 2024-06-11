import request from "../service/config"

export interface postCategory{
    name: string,
    parent_category_id?:number ;
}

export interface UpdateCategory {
    id:string;
    updateData : postCategory
}

export interface GetCategory{
    search?: string,
    page?:number;
    limit?:number;
}




interface Category{
    getCatigory : (data:GetCategory)=> any,
    getCatigoryOnly : (data:GetCategory)=> any,
    postCatigory : (data:postCategory)=> any,
    deleteCategory : (id:string)=> any,
    updateCategory : (data:UpdateCategory)=> any,
}

export interface StoreCategory {
    isLoader:boolean;
    dataCategory:any[];
    totlCount:number;
    getDataCategory: (data:GetCategory)=> Promise <any>;
    deleteDataCategory: (id:string)=> Promise <any>;
    postDatacategory: (data:postCategory)=> Promise <any>;
    updateDataCategory: (data:UpdateCategory)=> Promise <any>;
}




export const category:Category = {
    getCatigory: (data)=> request.get(`/category/search?search=${data?.search}&limit=${data?.limit}&page=${data?.page}`),
    getCatigoryOnly: (data)=> request.get(`/category/search?limit=${data?.limit}&page=${data?.page}`),
    deleteCategory: (id)=> request.delete(`/category/delete/${id}`),
    postCatigory: (data)=> request.post("/category/create" , data),
    updateCategory: (data)=> request.patch(`/category/update/${data.id}`, data.updateData),
}