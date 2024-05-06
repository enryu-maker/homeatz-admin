import { motion } from 'framer-motion';
import React from 'react'
import { MdOutlineInventory2 } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { RiBillLine } from "react-icons/ri";
import { LiaStoreAltSolid } from "react-icons/lia";
import { FiUsers, FiSettings, FiHome } from "react-icons/fi";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { useLocation, useNavigate } from 'react-router-dom';
import { PiChefHat } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";
export default function SideTab() {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <div
            className='w-[16%] h-[100vh] fixed bg-white flex flex-col space-y-5 justify-start items-center border-r-[1px]'
        >
            <p className='text-black  text-2xl tracking-widest flex items-center justify-center h-[60px] w-full text-center border-b-[1px] font-semibold'>Homeatz</p>
            <div className='w-full flex-col justify-center flex items-start '>
                <motion.button
                    onClick={() => {
                        navigate('/home/dashboard')
                    }}
                    whileHover={location.pathname.split('/')[2] === "dashboard" ? { scale: 1.0 } : { scale: 1.1 }}
                    className={`flex w-full  justify-start pl-4 items-center text-base py-2  ${location.pathname.split('/')[2] === "dashboard" ? "border-blue-500  border-r-2 text-blue-500  " : null} font-Montserrat`}
                >
                    <FiHome size={20} /> &nbsp; Dashboard
                </motion.button>
                <motion.button
                    onClick={() => {
                        navigate('/home/stores')
                    }}
                    whileHover={location.pathname.split('/')[2] === "stores" ? { scale: 1.0 } : { scale: 1.1 }}
                    className={`flex w-full  justify-start pl-4 items-center text-base py-2  ${location.pathname.split('/')[2] === "stores" ? "border-blue-500 border-r-2 text-blue-500  " : null} font-Montserrat`}
                >
                    <PiChefHat size={20} /> &nbsp; Chefs
                </motion.button>
                <motion.button
                    onClick={() => {
                        navigate('/home/orders')
                    }}
                    whileHover={location.pathname.split('/')[2] === "orders" ? { scale: 1.0 } : { scale: 1.1 }}
                    className={`flex w-full  justify-start pl-4 items-center text-base py-2  ${location.pathname.split('/')[2] === "orders" ? "border-blue-500 border-r-2 text-blue-500   " : null} font-Montserrat`}
                >
                    <RiBillLine size={20} /> &nbsp; Popular Chef
                </motion.button>
                {/* <motion.button
                    whileHover={location.pathname.split('/')[2] === "inventory" ? { scale: 1.0 } : { scale: 1.1 }}
                    className={`flex w-full  justify-start pl-4 items-center text-base py-2  ${location.pathname.split('/')[2] === "inventory" ? "border-blue-500 border-r-2 text-blue-500  " : null} font-Montserrat`}
                >
                    <MdOutlineInventory2 size={20} /> &nbsp; Inventory
                </motion.button> */}
                <motion.button
                    onClick={() => {
                        navigate('/home/customer')
                    }}
                    whileHover={location.pathname.split('/')[2] === "customer" ? { scale: 1.0 } : { scale: 1.1 }}
                    className={`flex w-full  justify-start pl-4 items-center text-base py-2  ${location.pathname.split('/')[2] === "customer" ? "border-blue-500 border-r-2 text-blue-500  " : null} font-Montserrat`}
                >
                    <FiUsers size={20} /> &nbsp; Customers
                </motion.button>

                {/* <motion.button
                    whileHover={location.pathname.split('/')[2] === "taxation" ? { scale: 1.0 } : { scale: 1.1 }}
                    className={`flex w-full  justify-start pl-4 items-center text-base py-2  ${location.pathname.split('/')[2] === "taxation" ? "border-blue-500 border-r-2 text-blue-500  " : null} font-Montserrat`}
                >
                    <HiOutlineReceiptTax size={20} /> &nbsp; Taxation
                </motion.button> */}
                {/* <motion.button
                    onClick={() => {
                        navigate('/home/employee')
                    }}
                    whileHover={location.pathname.split('/')[2] === "employee" ? { scale: 1.0 } : { scale: 1.1 }}
                    className={`flex w-full  justify-start pl-4 items-center text-base py-2  ${location.pathname.split('/')[2] === "employee" ? "border-blue-500 border-r-2 text-blue-500  " : null} font-Montserrat`}
                >
                    <FaRegUser size={20} /> &nbsp; My Team
                </motion.button> */}
                {/* <motion.button
                    onClick={() => {
                        navigate('/home/employee')
                    }}
                    whileHover={location.pathname.split('/')[2] === "employee" ? { scale: 1.0 } : { scale: 1.1 }}
                    className={`flex w-full  justify-start pl-4 items-center text-base py-2  ${location.pathname.split('/')[2] === "employee" ? "border-blue-500 border-r-2 text-blue-500  " : null} font-Montserrat`}
                >
                    <MdQrCode size={20} /> &nbsp; Customize QR
                </motion.button> */}
                <motion.button
                    whileHover={location.pathname.split('/')[2] === "reports" ? { scale: 1.0 } : { scale: 1.1 }}
                    className={`flex w-full  justify-start pl-4 items-center text-base py-2  ${location.pathname.split('/')[2] === "reports" ? "border-blue-500 border-r-2 text-blue-500   " : null} font-Montserrat`}
                >
                    <TbReportAnalytics size={20} /> &nbsp; Reports
                </motion.button>
                <motion.button
                    whileHover={location.pathname.split('/')[2] === "settings" ? { scale: 1.0 } : { scale: 1.1 }}
                    className={`flex w-full  justify-start pl-4 items-center text-base py-2  ${location.pathname.split('/')[2] === "settings" ? "border-blue-500 border-r-2 text-blue-500  " : null} font-Montserrat`}
                >
                    <FiSettings size={20} /> &nbsp; Settings
                </motion.button>
            </div>
        </div>
    )
}