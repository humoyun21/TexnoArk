import { useState, useEffect } from "react";
import Table from "@table";
import useCategoryStore from "../../store/category";
import { Button } from "@mui/material";
import { Category } from "@modals"
import GlobalPagination from "../../components/ui/pagination";
import GlobalSearch from "../../components/ui/global-search/index"
import { useLocation, useNavigate } from "react-router-dom";
const index = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search);
  const { getCategory, data, isLoading, totalCount } = useCategoryStore();
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState({});
  const [change , setChange] = useState(searchParams.get('search') || '')
  const [search, setsearch] = useState('')
  const [params , setParams] =useState({ page:1, limit:8 , name: change})
  const hendalChange = (e:any)=>{
    const search = e.target.value;
   
    setsearch(e.target.value)
    setChange(search)
    setParams(preParams=>({
        ...preParams,
        search
    }))
    const searchParams = new URLSearchParams(location.search);
          searchParams.set("search", search)
          navigate (`?${searchParams}`)
  
  }
  const editItem = (item: any) => {
    setModal(true);
    setItem(item);
  }
  const handleClose = () => {
    setModal(false);
    setItem({});
  }
  const headers = [
    { title: "№", value: "index" },
    { title: "Category name", value: "category_name" },
  ];
  const action = [{ action: "edit", action2: "delete" }];
  useEffect(() => {
    getCategory(params);
  }, [params, change]);

  useEffect(() => {
    
    const params = new URLSearchParams(location.search);
    const page = params.get("page");
    const pageNumber = page ? parseInt(page) : 1;
    const searchString =  search? search  : ""
    setParams((prevParams) => ({
      ...prevParams,
      page: pageNumber,
      name:searchString
    }));
    setChange(searchString)
  }, [location.search]);
  const changePage = (value: number) => {
    setParams((prevParams) => ({
      ...prevParams,
      page: value,
    }));
  };
  return (
    <div>
       < GlobalSearch search={change}  hendelChange={hendalChange}/>
      {modal && <Category open={modal} handleClose={handleClose} item={item} />}
      <div className="flex justify-end">
        <Button variant="contained"onClick={()=>setModal(true)}>
          Add category
        </Button>
      </div>
      <Table
        headers={headers}
        body={data}
        action={action}
        isLoading={isLoading}
        editItem={editItem}
      />
      <GlobalPagination
        totalCount={totalCount}
        page={params.page}
        setParams={changePage}
      />
    </div>
  );
};

export default index;
