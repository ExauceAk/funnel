import Header from "@/components/header";
import CongratulationCard from "@/components/partenaires-hotels/sections/congratulation-card";

/**
 * Complete profile page
 * @returns jsx component
 */
export default function CongratulationPage() {
  return (
    <div className="bg-[#E4E7EC]  h-screen  space-y-4">
      <Header />
      <CongratulationCard />
    </div>
  )
}
