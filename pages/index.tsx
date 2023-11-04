import Image from 'next/image'
import { FC, useEffect,useState } from "react";
import axios from 'axios'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import News from '../components/News'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [headlines,setHeadlines]=useState([])
    useEffect(()=>{
        const getHeadline=async()=>{
            await axios.post('/api/headline')
             .then((resp:any)=>{
                console.log("Backend response for headlines-->",resp)
                if(resp.data)
                {
                  if(resp.data?.status=="ok")
                    setHeadlines(resp.data.articles)
                }
             })
        }
        if(headlines.length==0)
          getHeadline()
    },[])
  return (
    <main>
         <Navbar></Navbar>
         <div className='md:mx-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-10'>
            {
              headlines.map((s:any)=>s?.urlToImage!=null&&<News className='border-2 border-[#c7c9c8] rounded-lg cursor-pointer hover:shadow-2xl hover:bg-[#c7c9c8] px-3 py-2' publishedDate={s?.publishedAt} image={s?.urlToImage} title={s?.title} desc={s?.description} source={s?.source?.name} author={s?.author}/>)
            }
         </div>
    </main>
  )
}
