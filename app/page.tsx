import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  // redirect("tourist-guides/step1");
  return (
    <div className="flex h-screen bg-[url('/images/font.jpg')] bg-cover bg-fixed justify-center items-center  gap-4">
      <Link className=" text-secondary-500" href="/tourist-guides/step1">
        <Button className="bg-[#2ea2bd] hover:bg-[#2ea2bd]">
          Guides Touristiques
        </Button>
      </Link>
      <Link className=" text-secondary-500" href="/partenaires-hotels/step1">
        <Button className="bg-[#2ea2bd] hover:bg-[#2ea2bd]">
          Partenaires d&apos;hôtels
        </Button>
      </Link>
      <Link className=" text-secondary-500" href="/partenaires-hotels/step1">
        <Button className="bg-[#2ea2bd] hover:bg-[#2ea2bd]">
          Partenaires d&apos;hôtels
        </Button>
      </Link>
    </div>
  );
}
