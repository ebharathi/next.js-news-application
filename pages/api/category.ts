import type { NextApiRequest,NextApiResponse } from "next";
import axios from 'axios'
export default async function category(
    req:NextApiRequest,
    res:NextApiResponse
)
{
    await axios.get(`https://newsapi.org/v2/top-headlines?category=${req.body.category}&country=us&apiKey=05488194d2984be08727f0eda69690ad`)
    .then((resp:any)=>{
        if(resp?.data)
        {
            console.log("[+]CATEGORY--->",req.body.category)
            res.json(resp.data)
        }
        else
         console.log("[-]ERRR IN CATEGORY FECTHING")
    })
}