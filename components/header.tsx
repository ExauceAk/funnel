import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <div className="flex justify-between items-center w-full h-16 bg-white">
            <div className="flex items-center">
                <Image
                    alt="LOGO"
                    width={100}
                    height={100}
                    src="/images/logo.jpg"
                    className="h-12 w-12 mx-4"
                />
                <h1 className="text-2xl font-bold ml-4">
                    <span className="text-gray-800">Guides Touristiques</span>
                </h1>
            </div>

        </div>
    )
}
