import Image from 'next/image'
import { FC, useEffect,useState } from "react";
import axios from 'axios'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import News from '../components/News'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [headlines,setHeadlines]=useState([])
    const [data,setData]=useState([])
    const [loader,setLoader]=useState(true);
    const [search,setSearch]=useState("");
    useEffect(()=>{
        const getHeadline=async()=>{
            await axios.post('/api/headline')
             .then((resp:any)=>{
                console.log("Backend response for headlines-->",resp)
                if(resp.data)
                {
                  if(resp.data?.status=="ok")
                  setHeadlines(resp.data.articles)
                  setData(resp.data.articles)
                  setLoader(false);
                }
             })
        }
        if(headlines.length==0)
          getHeadline()
    },[])
    useEffect(()=>{
      console.log("--->",search)
      if(search!="")
       {
        let arr=headlines.filter((s:any)=>s?.title.toLowerCase().includes(search.toLowerCase()))
        console.log("filtered--?",arr)
        setHeadlines(arr);
       }
       else 
        setHeadlines(data);
    },[search])
  return (
    <main>
         <Navbar setSearch={setSearch}></Navbar>
         {
          loader?
        <div className="flex justify-center mt-40 text-[30px]">
            <span>FETCHING NEWS...</span>
        </div>
          :
         <div className='md:mx-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-10'>
            {
              headlines.map((s:any)=>s?.urlToImage!=null&&<News className='border-2 border-[#c7c9c8] rounded-lg cursor-pointer hover:shadow-2xl hover:bg-[#c7c9c8] px-3 py-2' publishedDate={s?.publishedAt} image={s?.urlToImage} title={s?.title} desc={s?.description} source={s?.source?.name} author={s?.author}/>)
            }
         </div>
         }
    </main>
  )
}
