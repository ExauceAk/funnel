import Header from "@/components/header";
import CongratulationCard from "@/components/tourist-guides/sections/congratulation-card";

/**
 * Complete profile page
 * @returns jsx component
 */
export default function CongratulationPage() {
  return (
    <div className="bg-[url('/images/font.jpg')] bg-cover h-screen space-y-4">
      <Header />
      <CongratulationCard />
    </div>
  )
}
