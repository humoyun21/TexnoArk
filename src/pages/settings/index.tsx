import { useEffect , useState } from "react"
import auth from "../../service/auth";
import{getDataFromCookie} from "../..//utils/tokenService"
import Logo from '../../assets/TexnoArkLogo.svg'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Index = () => {

    const navigate = useNavigate()

    const [admin_data, setAdminData] = useState<any>({})

    const getAdminDataTexno = async(id:number) => {
        try{
            const respons = await auth.admin_id(id)
            if(respons.status === 200){
                setAdminData(respons.data.data)
            }
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        const admin_Id = Number(getDataFromCookie("admin-id"));
        getAdminDataTexno(admin_Id);
    
    },[]);
    const backCategory = () => {
        navigate("/main")
    }
    const deleteAdmin = async (id: number) => {
        try {
            const response = await auth.delete_admin(id);
            if (response.status === 200) {
                navigate("/signup");
            }
        } catch (err) {
            console.log(err);
        }
    };
    const editAdmin = async(id:number) => {
        try{
            const response = await auth.admin_id(id)
            if(response.status === 200){
                navigate("/edit")
            }   
        }catch(err){   
            console.log(err)
        }
    }
    return (
        <div className="h-[623px] items-center justify-center flex-col gap-8 p-5 bg-[#FFF] rounded-[10px]">
            <div className="flex">
                <div className='w-[700px] border border-solid ml-5 rounded-[10px] bg-[#F0F0F0]'>
                    <div className='w-[650px] h-[80px] bg-[#FFF] shadow-2xl rounded-[10px] flex ml-5 mt-5'>
                        <img src={Logo} className='w-[60px] h-[60px] ml-7 mt-3'/>
                        <h1 className='text-[35px] font-bold ml-2 mt-3'>TexnoArk </h1>
                        <Button
                            variant='contained'
                            sx={{
                                ml:'auto',mr:2,mt:2,
                                width:150, 
                                height:50,
                                bgcolor:'#1EB91E',
                                color:'#FFF',
                                ":hover":{bgcolor:'#1EB91E'
                        }}}
                        onClick={backCategory}
                        >  
                            Back
                        </Button>
                    </div>
                    <div className='w-[650px] h-[440px] bg-[#FFF] shadow-2xl rounded-[10px] ml-5 mt-5 flex gap-3'>
                        <div className="w-[310px] pt-10 ">
                            <h1 className="font-semibold ml-[20px] text-lg text-gray-600 ">Ismi: {admin_data?.first_name}</h1>
                            <h1 className="font-semibold ml-[20px] text-lg text-gray-600 mt-3">Familiyasi: {admin_data?.last_name}</h1>
                            <h1 className="font-semibold ml-[20px] text-lg text-gray-600 mt-3">Telefon raqami: {admin_data?.phone_number}</h1>
                            <h1 className="font-semibold ml-[20px] text-lg text-gray-600 mt-3">Email: {admin_data?.email}</h1>
                        </div>

                        <div className="w-[330px] pt-10">
                            <h1  className="font-semibold ml-[20px] text-lg text-gray-600 ">Created Data:{admin_data?.createdAt ? admin_data?.createdAt.slice(0, 10) :"" }</h1>
                            <h1  className="font-semibold ml-[20px] text-lg text-gray-600 ">Updated Data:{admin_data?.updatedAt ? admin_data.updatedAt.slice(0,10) : ""}</h1>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Index
