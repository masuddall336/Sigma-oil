import { IoCallSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiArrowSortedUp } from "react-icons/ti";

import './navbar.css'



import icon from '../../public/icons/sigma-oil-logo.png'
import { NavLink } from "react-router";



const Navbar = () => {
    return (
        <>
            <div className="flex justify-between items-center  px-5 bg-[#002776] py-2">
                <NavLink>
                    <img width='35%' height='35%' src={icon} alt="" />
                </NavLink>
                <nav className="flex-1 h-full pr-2">
                    <ul id="main_nav" className="flex justify-end gap-[1%] text-sm">
                        <NavLink className="flex items-center" >
                            <li id="automotive" className="relative py-[29%] flex">Automotive

                                <ul id="" className="automotive_sub absolute  bg-[#FF6319] text-[#fff] p-[1%] w-[250%]">
                                    <TiArrowSortedUp className="top_arrow absolute top-[-12%] left-[29%] text-[#FF6319] text-4xl z-0" />
                                    <li className="z-20">Motorcycle</li>
                                    <li>Three Wheeler</li>
                                    <li>Passenger Car</li>
                                    <li>Light Duty</li>
                                    <li>Heavy Duty</li>
                                </ul>
                                <MdKeyboardArrowDown className="text-xl"/>
                            </li>
                        </NavLink>
                        <NavLink className="flex items-center" >
                            <li>Industrial</li>
                            <MdKeyboardArrowDown className="text-xl " />
                        </NavLink>
                        <NavLink className="flex items-center" >
                            <li>Marin</li>
                            <MdKeyboardArrowDown className="text-xl " />
                        </NavLink>
                        <NavLink className="flex items-center" >
                            <li>Agriculture</li>
                            <MdKeyboardArrowDown className="text-xl " />
                        </NavLink>
                        <NavLink className="flex items-center  " >
                            <li className="w-[179%]">Gear & Transmission</li>
                            <MdKeyboardArrowDown className="text-xl " />
                        </NavLink>
                        <NavLink className="flex items-center" >
                            <li>Specialized</li>
                            <MdKeyboardArrowDown className="text-xl " />
                        </NavLink>
                        <NavLink className="flex items-center" >
                            <li className=" ">Corporate</li>
                            <MdKeyboardArrowDown className="text-xl" />
                        </NavLink>
                    </ul>
                </nav>

                <div className="flex flex-0 items-center gap-3 w-[10%] border-l-1 pl-2 mr-3 border-dotted">
                    <div className="bg-[#FF6319] p-2 rounded">
                        <IoCallSharp />
                    </div>
                    <div id="social_icons" className="flex flex-col gap-3">
                        <a href=""><FaFacebookF className="social_icons " /></a>
                        <a href=""> <FaYoutube className="social_icons  " /></a>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Navbar
