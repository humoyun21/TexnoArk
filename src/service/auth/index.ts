import request from "../config";
import { Request } from "../../interface/auth";


const auth:Request = {
    signin: (data)=> request.post("/auth/sign-in",data),
    signup: (data)=> request.post("/auth/admin/sign-up",data),
    
    logout: ()=> request.post("/admin/logout"),
    getAdminId: (id)=> request.get(`/admin/${id}`),
    deleteAdminId: (id)=> request.delete(`/admin/${id}`),
    updateAdminId: (data)=> request.put(`/admin/${data.id}`, data.updateData),
}

export default auth