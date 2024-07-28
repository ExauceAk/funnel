import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <div className="flex justify-center  md:justify-between items-center w-full h-20 bg-white">
            <div className="flex items-center ">
                <Image
                    alt="LOGO"
                    width={100}
                    height={100}
                    src="/images/logo.jpg"
                    className="h-16 w-16 mx-4"
                />
            </div>

        </div>
    )
}
