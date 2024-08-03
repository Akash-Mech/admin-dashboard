import React from 'react'
import { FaTachometerAlt, FaShoppingCart, FaUsers, FaUser, FaBox, FaCog } from 'react-icons/fa';
const Sidebar = () => {

    const menu = [
        {
            icon: <FaTachometerAlt />,
            title: 'Dashboard'
        },
        { icon: <FaShoppingCart />, title: 'Orders' },
        { icon: <FaUsers />, title: 'Customers' },
        { icon: <FaUser />, title: 'Users' },
        { icon: <FaBox />, title: 'Products' },
        { icon: <FaCog />, title: 'Settings' },
    ]
    return (
        <div className='bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300  dark:border-gray-600 dark:bg-gray-900 dark:text-white' >
            <h1 className='text-2xl font-bold hidden md:block mt-4 text-center italic'>Shop</h1>

            <ul className='flex flex-col mt-5 text-xl'>
                {menu.map((item) => {
                    return (
                        <li key={item.title} className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
                        hover:bg-blue-600 hover:text-white'>
                            {item.icon}
                            <span className='hidden md:inline'>{item.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}

export default Sidebar