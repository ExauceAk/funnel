// "use client";

// import React from "react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useQuery } from "@tanstack/react-query";
// import { SelectProps } from "@radix-ui/react-select";
// import { getCountries } from "@/services/contries-sdk";
// import Image from "next/image";
// import { Input, InputProps } from "./ui/input";

// type Props = {
//   inputProps?: InputProps;
//   callingCodeProps?: SelectProps;
// };

// export default function PhoneInput({ callingCodeProps, inputProps }: Props) {
//   const { data: countriesMetadata } = useQuery({
//     queryKey: ["countries-metadata"],
//     queryFn: getCountries,
//   });

//   return (
//     <div className="flex items-center gap-1">
//       <Select {...callingCodeProps}>
//         <SelectTrigger className="h-12 w-36">
//           <SelectValue />
//         </SelectTrigger>
//         <SelectContent>
//           {countriesMetadata?.map((metadata) => (
//             <SelectItem
//               key={metadata.code}
//               value={metadata.code}
//             >
//               <div className="flex items-center">
//                 <Image
//                   src={metadata.flag}
//                   alt={`${metadata.name}'s flag`}
//                   width={24}
//                   height={24}
//                 />
//                 {`+(${metadata.callingCode})`}
//               </div>
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//       <Input
//         {...inputProps}
//         placeholder="4844760063"
//       />
//     </div>
//   );
// }
