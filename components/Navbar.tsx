import { FC } from "react";
import SearchIcon from '@mui/icons-material/Search';
export interface NavbarProps{

}
const Navbar:FC<NavbarProps>=()=>{
    return (
        <nav className="bg-black grid grid-cols-4 text-white  px-2">
             <div className="col-span-1">
                <img className="w-14" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_J6CDogleAwVKvgCax8G2j9wukg1JKMx3A"/>
             </div>
             <ul className="col-span-2 grid grid-cols-8">
                        <li className="text-center pt-2 border-r-2 border-l-2 border-l-[#737a75] border-r-[#737a75]">News</li>
                        <li className="text-center pt-2 border-r-2 border-r-[#737a75]">Sport</li>
                        <li className="text-center pt-2 border-r-2 border-r-[#737a75]">Business</li>
                        <li className="text-center pt-2 border-r-2 border-r-[#737a75]">Entertianment</li>
                        <li className="text-center pt-2 border-r-2 border-r-[#737a75]">Travel</li>
                        <li className="text-center pt-2 border-r-2 border-r-[#737a75]">Science</li>
                        <li className="col-span-2 text-center pt-2 border-r-2 border-r-[#737a75]">More</li>
             </ul>
             <div className="col-span-1 text-right px-2 py-2">
                <input className="px-5 py-1 outline-none text-black" placeholder="Search"/>
                <span  className="bg-white text-black px-1 py-1.5"><SearchIcon/></span>
             </div>
        </nav>
    )
}
export default Navbar;