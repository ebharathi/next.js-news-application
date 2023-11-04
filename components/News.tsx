import {FC} from 'react'
export interface NewsProps{
     className:string;
     image?:string,
     publishedDate?:string;
     title?:string,
     source?:string;
     desc?:string;
     author?:String;
}
const News:FC<NewsProps>=({className="",publishedDate="",author="",image,title,source,desc})=>{
    const date = new Date(publishedDate);

const options :any= {
  month: 'short', // Display the month as a three-letter abbreviation (e.g., "Nov").
  day: 'numeric',  // Display the day of the month (e.g., "3").
  hour: 'numeric', // Display the hour in 12-hour format (e.g., "9").
  minute: 'numeric', // Display the minutes (e.g., "00").
  hour12: true,    // Use 12-hour time format (AM/PM).
};

const formattedDate :any= date.toLocaleString('en-US', options);
   return(
    <div className={className}>
        <img src={image} alt='Loading'/>
        <span className='bg-[#8d918e] px-1 mx-2 text-[10px] rounded-md text-white'>{formattedDate}</span>
        <span className='bg-[#8d918e] px-1 text-[10px] rounded-md text-white'>{source}</span>
        <h3>{title}</h3>
        {
      image==null&&
        <p>{desc}</p>
        }
    </div>
   )
}
export default News;