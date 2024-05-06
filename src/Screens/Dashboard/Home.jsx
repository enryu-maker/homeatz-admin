import React from 'react'
import { motion } from 'framer-motion';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { RiBillLine, RiMoneyDollarBoxLine, RiUser3Line } from 'react-icons/ri';
import SideTab from '../Components/SideTab';
import Header from '../Components/Header';
import { PiChefHat } from "react-icons/pi";

export default function Home() {
    const data = [
        {
            name: 'Sun',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Mon',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Tue',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Wed',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Thu',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Fri',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Sat',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className="flex h-screen w-full">
            <SideTab />
            <div className=' w-[84%] ml-[16%] bg-white'>
                <Header />
                <div className='w-[100%] p-5 text-black space-y-5 '>
                    <div className='flex space-x-3'>
                        <motion.button
                            whileTap={{ scale: 1.2 }}
                            className={`flex tracking-widest justify-start items-center text-sm py-1 px-4 border-2 bg-white font-Montserrat hover:bg-blue-500 hover:text-white`}
                        >
                            Today
                        </motion.button>
                        <motion.button
                            whileTap={{ scale: 1.2 }}
                            className={`flex tracking-widest justify-start items-center text-sm py-1 px-4 border-2 bg-blue-500 text-white font-Montserrat hover:bg-blue-500 hover:text-white`}
                        >
                            Week
                        </motion.button>
                        <motion.button
                            whileTap={{ scale: 1.2 }}
                            className={`flex tracking-widest justify-start items-center text-sm py-1 px-4 border-2 bg-white font-Montserrat hover:bg-blue-500 hover:text-white`}
                        >
                            Month
                        </motion.button>
                    </div>
                    <div className='flex space-x-3 justify-between'>
                        <motion.button
                            whileTap={{ scale: 1.2 }}
                            className='h-[100px] flex justify-between items-center px-5 border-2 w-[30%] bg-white'>
                            <div className='flex flex-col items-start'>
                                <p className=' text-lg font-semibold font-Montserrat'>
                                    Orders
                                </p>
                                <p className=' text-lg font-semibold font-Montserrat'>
                                    1
                                </p>
                            </div>
                            <RiBillLine size={40} />

                        </motion.button>
                        <motion.button
                            whileTap={{ scale: 1.2 }}
                            className='h-[100px] flex justify-between items-center text-white px-5 border-2 w-[30%] bg-blue-500 '>
                            <div className='flex flex-col items-start '>
                                <p className=' text-lg font-semibold font-Montserrat'>
                                    Chef's
                                </p>
                                <p className=' text-lg font-semibold font-Montserrat'>
                                    1
                                </p>
                            </div>
                            <PiChefHat size={40} />
                        </motion.button>
                        <motion.button
                            whileTap={{ scale: 1.2 }}
                            className='h-[100px] flex justify-between items-center px-5 border-2 w-[30%] bg-white'>
                            <div className='flex flex-col items-start'>
                                <p className=' text-lg font-semibold font-Montserrat'>
                                    Customer's
                                </p>
                                <p className=' text-lg font-semibold font-Montserrat'>
                                    1
                                </p>
                            </div>
                            <RiUser3Line size={40} />
                        </motion.button>
                    </div>
                    <div className='bg-white w-full h-[65vh] border-2 p-4'>
                        <p className=' text-2xl font-bold pb-3 text-gray-900 font-Montserrat'>
                            Chef's Analytics
                        </p>
                        <ResponsiveContainer width="95%" height="95%" className='self-center'>
                            <LineChart
                                data={data} >
                                <Line type="monotone" dataKey="amt" stroke="#2196F3" />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <XAxis className=' font-Montserrat font-semibold text-gray-500' dataKey="name" />
                                <YAxis className=' font-Montserrat font-semibold text-gray-500'  />
                                <Tooltip labelStyle={{
                                    fontFamily:"poppins",
                                    fontWeight:"bold",
                                    letterSpacing:1,
                                    color:"GrayText"
                                }}
                                contentStyle={{
                                    fontFamily:"poppins",
                                    fontWeight:"bold",
                                    letterSpacing:1
                                }}
                                />
                            </LineChart>
                        </ResponsiveContainer>

                    </div>
                </div>
            </div>
        </div>
    )
}