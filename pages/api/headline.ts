import type { NextApiRequest,NextApiResponse } from "next/types";
import axios from "axios";
export default async function headline(
    req:NextApiRequest,
    res:NextApiResponse
)
{   
    await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=05488194d2984be08727f0eda69690ad')
    .then((response:any)=>{
        if(response.data)
        {
            console.log("[+]HEADLINES")
            res.json(response.data)
        }
        else
        {
              console.log("Headline response--->",response)
              console.log("[-]HEADLINES FAILED")
        }
    })
}