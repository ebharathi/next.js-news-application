import { FC, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Lato } from "next/font/google";
import Link from "next/link";
export interface NavbarProps{

}
const lato=Lato({
    subsets: ['latin'],
    weight:'700'
})
const Navbar:FC<NavbarProps>=()=>{
  
    return (
        <nav className={`bg-black grid grid-cols-6 text-white md:mx-40 ${lato.className}`}>
             <div className="col-span-5 md:col-span-1">
                <img className="w-14" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_J6CDogleAwVKvgCax8G2j9wukg1JKMx3A"/>
             </div>
             <div className="col-span-1 md:col-span-1 flex items-center text-[18px] md:border-l-2 md:border-l-[#737a75] pl-2">
                      <AccountCircleIcon className="mt-1 ml-3" fontSize="large"/>
                      <span className="hidden md:block px-2">Sign in</span>
             </div>
             <div className="hidden md:grid col-span-6 md:col-span-3 grid-cols-7">
                        <Link href="/category/sports" className="cursor-pointer hover:bg-[#737a75] text-center pt-4 border-r-2 border-l-2 border-l-[#737a75] border-r-[#737a75]">Sports</Link>
                        <Link href="/category/business" className="cursor-pointer hover:bg-[#737a75] text-center pt-4 border-r-2 border-l-2 border-l-[#737a75] border-r-[#737a75]">Business</Link>
                        <Link href="/category/science" className="cursor-pointer hover:bg-[#737a75] text-center pt-4 border-r-2 border-l-2 border-l-[#737a75] border-r-[#737a75]">Science</Link>
                        <Link href="/category/health" className="cursor-pointer hover:bg-[#737a75] text-center pt-4 border-r-2 border-l-2 border-l-[#737a75] border-r-[#737a75]">Health</Link>
                        <Link href="/category/technology" className="cursor-pointer hover:bg-[#737a75] text-center pt-4 border-r-2 border-l-2 border-l-[#737a75] border-r-[#737a75]">Technology</Link>
                        <li className="cursor-pointer hover:bg-[#737a75] col-span-2 pt-4 border-r-2 border-r-[#737a75]">
                            <span className="text-left pl-3">More</span>
                            <ArrowDropDownIcon className="float-right mr-3"/>
                        </li>
             </div>
             <div className="hidden md:block col-span-6 md:col-span-1 text-left px-2 pt-3">
                <input className="px-1 py-1 outline-none text-black" placeholder="Search"/>
                <span  className="bg-white text-black px-1 py-1.5"><SearchIcon/></span>
             </div>
        </nav>
    )
}
export default Navbar;