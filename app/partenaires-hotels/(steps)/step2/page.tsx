import Header from '@/components/header'
import Step2Card from '@/components/partenaires-hotels/sections/step2-card'

export default function Step1Page() {
    return (
        <div className="bg-[url('/images/font.jpg')] bg-cover h-screen space-y-4">
            <Header />
            <Step2Card />
        </div>
    )
}
