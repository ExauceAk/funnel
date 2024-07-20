import Header from '@/components/header'
import Step1Card from '@/components/tourist-guides/sections/step1-card'
import React from 'react'

export default function Step1Page() {
    return (
        <div className="bg-[#E4E7EC]  h-screen  space-y-4">
            <Header />
            <div className='flex justify-center items-center'>
                <p className='text-2xl text-[#2ea2bd] font-semibold' >Guides Touristiques</p>
            </div>
            <Step1Card />
        </div>
    )
}
