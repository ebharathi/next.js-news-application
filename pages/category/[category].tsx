import Navbar from "@/components/Navbar";
import News from "@/components/News";
import { useRouter } from "next/router";
import {useState,useEffect} from 'react'
import axios from 'axios';
const Category=()=>{
    const router=useRouter();
    const [data,setData]=useState([]);
    const [loader,setLoader]=useState(true);
    useEffect(()=>{
        console.log("Useffect calling[+]")
        const getData=async()=>{
        setLoader(true);
        if(router?.query?.category)    
         await axios.post('/api/category',{category:router?.query?.category})
         .then((response:any)=>{
              console.log("[+]RESPONSE FROM BACKEND FOR CATEGORY ",router?.query?.category," ->",response?.data);
              if(response?.data?.status=="ok")
              {
                  console.log("inside")
                  setData(response?.data?.articles)
                  setLoader(false);
              }
            }) 
        else
         console.log("router undefined")  
        }
        getData();
    },[router?.query?.category])
    return(
        <main>
             <Navbar/>
             {
                loader?
            <div className="flex justify-center mt-40 text-[30px]">
                <span>FETCHING NEWS...</span>
            </div>
                :
             <div className='md:mx-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-10'>
            {
                data.map((s:any)=>s?.urlToImage!=null&&<News className='border-2 border-[#c7c9c8] rounded-lg cursor-pointer hover:shadow-2xl hover:bg-[#c7c9c8] px-3 py-2' publishedDate={s?.publishedAt} image={s?.urlToImage} title={s?.title} desc={s?.description} source={s?.source?.name} author={s?.author}/>)
            }
         </div>
             }
        </main>
    )
}
export default Category;