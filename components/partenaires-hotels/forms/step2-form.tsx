/* eslint-disable */
"use client";
// import ImageUpload from "@/components/image-upload";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";
//@ts-ignore
import useTouristGuidesForm from "@/hooks/tourist-guides/use-personnal";
//@ts-ignore
import ReactStars from "react-rating-stars-component";



type Props = {
  id: string;
  className?: string;
};


const languages = [
  { label: "Hôtel", value: "Hôtel" },
  { label: "Maison d'Hôtes", value: "Maison d'Hôtes" },
  { label: "B&B / Chambre d'Hôtes", value: "B&B / Chambre d'Hôtes" },
  { label: "Séjour chez l'Habitant", value: "Séjour chez l'Habitant" },
  { label: "Auberge de Jeunesse", value: "Auberge de Jeunesse" },
  { label: "Appart'hôtel", value: "Appart'hôtel" },
  { label: "Autre", value: "Autre" },
] as const


const languagesL = [
  { label: "Restaurant", value: "Restaurant" },
  { label: "Service d'Étage", value: "Service d'Étage" },
  { label: "Bar", value: "Bar" },
  { label: "Réception ouverte 24h/24", value: "Réception ouverte 24h/24" },
  { label: "Sauna", value: "Sauna" },
  { label: "Centre de Remise en Forme", value: "Centre de Remise en Forme" },
  { label: "Jardin", value: "Jardin" },
  { label: "Terrasse", value: "Terrasse" },
  { label: "Chambres Non-Fumeurs", value: "Chambres Non-Fumeurs" },
  { label: "Navette Aéroport", value: "Navette Aéroport" },
  { label: "Chambres Familiales", value: "Chambres Familiales" },
  { label: "Spa et Centre de Bien-Être", value: "Spa et Centre de Bien-Être" },
  { label: "Bain à Remous / Jacuzzi", value: "Bain à Remous / Jacuzzi" },
  { label: "Connexion Wi-Fi Gratuite", value: "Connexion Wi-Fi Gratuite" },
  { label: "Climatisation", value: "Climatisation" },
  { label: "Parc Aquatique", value: "Parc Aquatique" },
  { label: "Borne de Recharge pour les Véhicules Électriques", value: "Borne de Recharge pour les Véhicules Électriques" },
  { label: "Piscine", value: "Piscine" },
  { label: "Plage", value: "Plage" },
] as const


export default function Step2Form({ id, className }: Props) {
  const form = useTouristGuidesForm();


  const [rating, setRating] = useState(0)


  const onSubmit = useCallback(() => { }, []);

  return (
    <Form {...form}>
      <form
        id={id}
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid w-full grid-cols-2 gap-12  ", className)}
      >

        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="flex flex-col col-span-2 sm:col-span-1">
              <FormLabel>Type d'Établissement </FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl className="">
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-54 justify-between",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        <p className="line-clamp-1 font-normal">
                          {field.value || "Selelectionnez une valeur"}
                        </p>

                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="h-[300px] w-[250px] p-2">
                    <Command>
                      <CommandInput
                        placeholder="Search framework..."
                        className="mb-2 h-8"
                      />
                      {/* <CommandEmpty>No Fu.</CommandEmpty> */}
                      <CommandGroup>
                        <CommandList>
                          {

                            languages?.map((language) => (
                              <CommandItem
                                key={language.value}
                                className="grid grid-cols-12"
                                value={language.label}
                                // onSelect={() => setSelectEvent(event.id)}
                                onSelect={() => {
                                  form.setValue("language", language.value)
                                  // ? handleRemoveEvent(event.id)
                                  // : setSelectEvent(event.id);
                                }}
                              >
                                <div className="col-span-11">

                                  <p className="line-clamp-1">
                                    {language.label}
                                  </p>

                                </div>

                                <CheckIcon
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    language.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                              </CommandItem>
                            ))
                          }
                        </CommandList>
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="flex flex-col col-span-2 sm:col-span-1">
              <FormLabel>Services Proposés par l'Hôtel</FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl className="">
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-54 justify-between",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        <p className="line-clamp-1 font-normal">
                          Select votre disponibilité
                          {/* {eventsLoading
                                ? "Select Event"
                                : selectEvent
                                  ? allEvents!.find(
                                      (event) => event.id === selectEvent,
                                    )?.title
                                  : "Select Event"} */}
                        </p>
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="h-[300px] w-[250px] p-2">
                    <Command>
                      <CommandInput
                        placeholder="Search framework..."
                        className="mb-2 h-8"
                      />
                      {/* <CommandEmpty>No Fu.</CommandEmpty> */}
                      <CommandGroup>
                        <CommandList>
                          {

                            languagesL?.map((language) => (
                              <CommandItem
                                key={language.value}
                                className="grid grid-cols-12"
                                value={language.label}
                                // onSelect={() => setSelectEvent(event.id)}
                                onSelect={() => {
                                  form.setValue("languageL", language.value)
                                  // ? handleRemoveEvent(event.id)
                                  // : setSelectEvent(event.id);
                                }}
                              >
                                <div className="col-span-11">

                                  <p className="line-clamp-1">
                                    {language.label}
                                  </p>

                                </div>

                                <CheckIcon
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    language.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                              </CommandItem>
                            ))
                          }
                        </CommandList>
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />



        <div className="flex-none md:flex justify-center items-center gap-4 col-span-2">
          <p className="text-lg" >Nombre d'Étoiles :</p>
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            size={40}
            activeColor="#ffd700"
          />
        </div>




        <div className="mb-2 flex justify-center gap-8 items-center col-span-2">
          <Link
            className=" text-secondary-500"
            href="/partenaires-hotels/step1"
          >
            <Button className="bg-[#2ea2bd] hover:bg-[#2ea2bd] w-36 gap-2 text-md"><ArrowLeft size={16} /> Précédent  </Button>
          </Link>

          <Link
            className=" text-secondary-500"
            href="/partenaires-hotels/step3"

          >
            <Button className="bg-[#2ea2bd] hover:bg-[#2ea2bd] w-36 gap-2 text-md">Suivant <ArrowRight size={16} /></Button>
          </Link>

        </div>

      </form>

    </Form>
  );
}
