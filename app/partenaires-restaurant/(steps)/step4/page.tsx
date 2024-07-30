import Header from '@/components/header'
import Step4Card from '@/components/partenaires-restaurant/sections/step4-card'

export default function Step1Page() {
    return (
        <div className="bg-[url('/images/font.jpg')] bg-cover h-screen space-y-4">
            <Header />
            <div className='flex justify-center items-center'>
                <p className='text-2xl text-[#2ea2bd] font-semibold' >Partenaires Restaurant</p>
            </div>
            <Step4Card />
        </div>
    )
}
