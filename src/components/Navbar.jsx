import { IoCallSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiArrowSortedUp } from "react-icons/ti";
import { IoReorderThreeOutline } from "react-icons/io5";
import './navbar.css'
import icon from '../../public/icons/sigma-oil-logo.png'
import { NavLink } from "react-router";
import ResponsiveNav from "./responsiveNav";
const Navbar = () => {
    return (
        <>
            <div className="flex items-center justify-between  px-5 bg-[#002776] py-2">
                <div id="Responsive_icon" className="relative z-10">
                    <IoReorderThreeOutline id="threeLine" />
                </div>
                <div id="responsiveNav" className="absolute top-0 left-0 h-full">
                    <ResponsiveNav></ResponsiveNav>
                </div>
                <NavLink className="company_logo w-20 j ">
                    <img id="company_logo" src={icon} alt="" />
                </NavLink>
                <nav className=" pr-2 lg:flex-1">
                    <ul id="main_nav" className="flex text-sm justify-end">
                        <NavLink className="flex items-center" >
                            <li id="automotive" className="relative py-[29%] px-1 flex">Automotive

                                <ul id="" className="automotive_sub absolute  bg-[#FF6319] text-[#fff] p-[2%] w-[250%]">
                                    <TiArrowSortedUp className="top_arrow absolute top-[-11.5%] left-[29%] text-[#FF6319] text-4xl" />
                                    <li className="">Motorcycle</li>
                                    <li>Three Wheeler</li>
                                    <li>Passenger Car</li>
                                    <li>Light Duty</li>
                                    <li>Heavy Duty</li>
                                </ul>
                                <MdKeyboardArrowDown className="text-xl" />
                            </li>
                        </NavLink>
                        <NavLink className="flex items-center" >
                            <li id="industrial" className="flex relative py-[35%] px-1">Industrial
                                <ul id="industrial_sub" className="absolute bg-[#FF6319] text-[#fff] p-[2%] w-[250%] top-[100%] left-0">
                                    <TiArrowSortedUp className=" industirall_top_arrow absolute text-[#FF6319] top-[-28%] left-[26%] opacity-0 text-4xl" />
                                    <li>Soil</li>
                                    <li>Sigma</li>
                                </ul>
                                <MdKeyboardArrowDown className="text-xl industrial_top_arrow" />
                            </li>
                        </NavLink>
                        <NavLink className="flex items-center" >
                            <li id="merin" className="flex relative py-[49%] px-1">Marine
                                <ul id="marin_sub" className=" absolute bg-[#FF6319] text-[#fff] p-[3%] w-[350%] top-[100%] left-0">
                                    <TiArrowSortedUp className=" marin_top_arrow absolute top-[-19%] left-[20%] text-[#FF6319] opacity-0 text-4xl" />
                                    <li>Merin Engin Oil</li>
                                    <li>Cylinder Oil</li>
                                    <li>Sigma</li>
                                </ul>
                                <MdKeyboardArrowDown className="text-xl " />
                            </li>
                        </NavLink>
                        <NavLink className="flex items-center" >
                            <li id="Agriculture" className="flex relative py-[31%] px-1">Agriculture
                                <ul id="agriculture_sub" className=" absolute bg-[#FF6319] text-[#fff] p-[2%] w-[250%] top-[100%] left-0">
                                    <TiArrowSortedUp className=" agriculture_top_arrow absolute top-[-18%] opacity-0 left-[28%] text-[#FF6319]  text-4xl" />
                                    <li>Sigma</li>
                                    <li>Naf Arab</li>
                                    <li>Soil</li>
                                </ul>
                                <MdKeyboardArrowDown className="text-xl " />
                            </li>
                        </NavLink>
                        <NavLink className="flex gap-0 items-center  " >
                            <li id="gear_transmission" className="flex relative py-[19%] p-1">Gear & Transmission
                                <ul id="gear_sub" className=" absolute bg-[#FF6319] text-[#fff] pl-[1%] pr-[1%] pt-[1.5%] pb-[1%] w-[150%] top-[100%] left-0">
                                    <TiArrowSortedUp className=" gear_top_arrow absolute  left-[47%] top-[-18.5%] text-[#FF6319] opacity-0  text-4xl" />
                                    <li>Soil</li>
                                    <li>Sigma</li>
                                    <li>Naf Arab</li>
                                </ul>
                            </li>
                            <MdKeyboardArrowDown className="text-xl " />
                        </NavLink>
                        <NavLink className="flex items-center" >
                            <li id="specialized" className="flex px-1 py-[31%] relative">Specialized
                                <ul id="specialized_sub" className="absolute left-0 top-[100%] bg-[#FF6319] w-[200%] p-[1%] text-[#fff]">
                                    <TiArrowSortedUp className=" specialized_top_arrow absolute  left-[37%] top-[-29.5%] opacity-0 text-[#FF6319]  text-4xl" />
                                    <li>Naf Arab</li>
                                    <li>Sigma</li>
                                </ul>
                                <MdKeyboardArrowDown className="text-xl " />
                            </li>
                        </NavLink>
                        <NavLink className="flex items-center" >
                            <li id="corporate" className="flex px-1 py-[33%] relative">Corporate
                                <ul id="corporate_sub" className="absolute text-[#fff] p-[1%] pt-[2%] bg-[#FF6319] top-[100%] right-0 w-[250%]">
                                    <TiArrowSortedUp className=" corporate_top_arrow absolute left-[57%] top-[-7.2%] text-[#FF6319]  text-4xl" />
                                    <li>Corporate Profile</li>
                                    <li>Management Team</li>
                                    <li>Awards & Affiliation</li>
                                    <li>Career Opportunity</li>
                                    <li>Hours & Location</li>
                                    <li>Mission</li>
                                    <li>Blog</li>
                                    <li>Contact Us</li>
                                </ul>
                                <MdKeyboardArrowDown className="text-xl" />
                            </li>
                        </NavLink>
                    </ul>
                </nav>

                <div className="flex  items-center justify-end gap-3  border-l-1 pl-2 mr-3 border-dotted">
                    <div className=" bg-[#FF6319] p-2 rounded">
                        <IoCallSharp />
                    </div>
                    <div id="call" className="flex flex-col">
                        <h2>Call Us Today</h2>
                        <a href="tel:+88-01700-760430" aria-label="Phone Number"> <span>+88-01700-760430</span></a>
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
