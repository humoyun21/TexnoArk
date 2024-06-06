import request from "../config/http";
import { Request } from "../../interfaces/auth";


const auth:Request = {
    sign_up:(data) => request.post("/auth/admin/sign-up", data),
    sign_in: (data)=> request.post("/auth/sign-in",data),
    admin_id:(id) => request.get(`/admin/${id}`),
    delete_admin: (id)=> request.delete(`/admin/${id}`),
    edit_admin: (data)=> request.put(`/api/admin/${data.id}`, data.updateData),

}

export default auth