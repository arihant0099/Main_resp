// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import {MdCategory, MdContacts, MdEventBusy, MdHomeFilled, MdShop2} from "react-icons/md"
// const Navbar = ({containerStyles}) => {
//     const [isActive , setIsActive] = useState("home")
//   return (
//     <nav className={`${containerStyles}`}>
//       <Link to={"/"} onClick={()=>{setIsActive("home")}} className={isActive==="home"?"text-red-500":""}>
//       <div className='flex items-center justify-center gap-x-1'>
//         <MdHomeFilled/>
//         Home
//       </div>
//       </Link>
//       <Link to={"/best-selling"} onClick={()=>{setIsActive("bestselling")}} className={isActive==="best selling"?"text-red-500":""}>
//       <div className='flex items-center justify-center gap-x-1'>
//         <MdCategory/>
//         Best Selling
//       </div>
//       </Link>
//       <Link to={"/product"} onClick={()=>{setIsActive("product")}} className={isActive==="product"?"text-red-500":""}>
//       <div className='flex items-center justify-center gap-x-1'>
//         <MdShop2/>
//         Products
//       </div>
//       </Link>
//       <Link to={"/events"} onClick={()=>{setIsActive("events")}} className={isActive==="events"?"text-red-500":""}>
//       <div className='flex items-center justify-center gap-x-1'>
//         <MdEventBusy/>
//         Events
//       </div>
//       </Link>
//       <Link to={"/faq"} onClick={()=>{setIsActive("faq")}} className={isActive==="faq"?"text-red-500":""}>
//       <div className='flex items-center justify-center gap-x-1'>
//         <MdContacts/>
//         Faq
//       </div>
//       </Link>
//     </nav>
//   )
// }

// export default Navbar








import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../static/data'
import styles from '../../styles/style'

const Navbar = ({active}) => {
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
         {
            navItems && navItems.map((i,index) => (
                <div className="flex">
                    <Link to={i.url}
                    className={`${active === index + 1 ? "text-[#17dd1f]" : "text-black 800px:text-[#fff]"} pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
                    >
                    {i.title}
                    </Link>
                </div>
            ))
         }
    </div>
  )
}

export default Navbar
