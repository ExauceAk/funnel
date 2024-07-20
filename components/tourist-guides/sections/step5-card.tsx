"use client";

import Step5Form from "../forms/step5-form";

export default function Step5Card() {
  return (
    <div className="rounded-xl w-2/3  mx-auto shadow-lg my-auto space-y-4 h-[75vh]  overflow-auto sidebar   bg-white p-6">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold text-[#2ea2bd]">
          Etape 5: Télécharger des documents pertinents
        </p>

        <div className="flex space-x-4 ">
          <div className="h-4 w-4 border border-gray-300 bg-[#2ea2bd] rounded-md"></div>
          <div className="h-4 w-4 border border-gray-300 bg-[#2ea2bd] rounded-md"></div>
          <div className="h-4 w-4 border border-gray-300 bg-[#2ea2bd] rounded-md"></div>
          <div className="h-4 w-4 border border-gray-300 bg-[#2ea2bd] rounded-md"></div>
          <div className="h-4 w-4 border border-gray-300 bg-[#2ea2bd] rounded-md"></div>
        </div>
      </div>
      <Step5Form id="add-personnal-information" />
    </div>
  );
}
