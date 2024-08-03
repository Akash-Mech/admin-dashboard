"use client"

import React from 'react'
import { FaBox, FaCog, FaShoppingCart, FaUsers } from 'react-icons/fa'
import { dataLine, dataBar } from '../assets/chartData'
import { Line, Bar } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
import Card from './Card'
ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement)

export const Dashboard = () => {
    const cardContent = [
        { icon: <FaShoppingCart />, title: "Orders", value: 140 },
        { icon: <FaBox />, title: "Products", value: 120 },
        { icon: <FaUsers />, title: "Users", value: 30 },
        { icon: <FaCog />, title: "Settings", value: 11 }
    ]
    return (
        <div className='grow px-8'>
            <h2 className='text-2xl my-4'>Dashboard</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
                {cardContent.map((item) => {
                    return (
                        <Card key={item.title} icon={item.icon} title={item.title} value={item.value} />
                    )
                })}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 pb-4'>
                <div className='bg-white p-4  rounded-lg shadow-md dark:bg-gray-800 '>
                    <h3 className='text-lg font-semibold mb-4'>Sales Data</h3>
                    <Line data={dataLine} />
                </div>
                <div className='bg-white p-4 rounded-lg shadow-md dark:bg-gray-800   '>
                    <h3 className='text-lg font-semibold mb-4'>Products Data</h3>
                    <Bar data={dataBar} />
                </div>
            </div>
        </div>
    )
}
