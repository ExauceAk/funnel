import Header from '@/components/header'
import Step1Card from '@/components/partenaires-hotels/sections/step1-card'

import React from 'react'

export default function Step1Page() {
    return (
        <div className=" bg-[linear-gradient(#a7d3724f,#102a5b6f),url('/images/font.jpg')] bg-cover h-screen space-y-4">
            <Header />
            <Step1Card />
        </div>
    )
}
