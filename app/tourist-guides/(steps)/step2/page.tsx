import Header from '@/components/header'
import Step2Card from '@/components/tourist-guides/sections/step2-card'

export default function Step1Page() {
    return (
        <div className="bg-[#E4E7EC]  h-screen  space-y-4">
            <Header />
            <div className='flex justify-center items-center'>
                <p className='text-2xl text-blue-500 font-semibold' >Guides Touristiques</p>
            </div>
            <Step2Card />
        </div>
    )
}
