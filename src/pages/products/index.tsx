import { useState, useEffect } from "react";
import Table from "@table";
import useProductsStore from "../../store/products";
import { Product } from "../../components/modals";
import GlobalPagination from "../../components/ui/pagination";
import GlobalSearch from "../../components/ui/global-search/index"
import { useLocation, useNavigate } from "react-router-dom";
const index = () => {
  const { getData, data, isLoading, totalCount } = useProductsStore();
  const location = useLocation()
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search);
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
  
  const headers = [
    { title: "№", value: "index" },
    { title: "Product name", value: "product_name" },
    { title: "Color", value: "color" },
    { title: "Cost", value: "cost" },
    { title: "", value: "action" },
  ];
  const action = [{ action: "show", action2: "image" }];
  useEffect(() => {
    getData(params);
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
      <div className="flex justify-end">
      < GlobalSearch search={change}  hendelChange={hendalChange}/>
        <Product />
      </div>
      <Table
        headers={headers}
        body={data}
        action={action}
        isLoading={isLoading}
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
