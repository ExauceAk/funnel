/* eslint-disable */
"use client";
// import ImageUpload from "@/components/image-upload";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input";
import useSelfPatientInfoForm from "@/hooks/tourist-guides/use-personnal-information-form";
import { cn } from "@/lib/utils";

import { useCallback } from "react";
import { ArrowLeft, ArrowRight, Check, CheckIcon, ChevronsUpDown } from "lucide-react";
import Link from "next/link";

type Props = {
  id: string;
  className?: string;
};


const languages = [
  { label: "Tarif Fixe par Heure", value: "Tarif Fixe par Heure" },
  { label: "Tarif par Personne", value: "Tarif par Personne" },
  { label: "Tarif par Groupe", value: "Tarif par Groupe" },
  { label: "Tarif Variables selon la Visite", value: "Tarif Variables selon la Visite" },
  { label: "Tarif basé sur la Durée et la Complexité de la Visite", value: "Tarif basé sur la Durée et la Complexité de la Visite" },
  { label: "Tarif Dynamique en fonction de la Demande", value: "Tarif Dynamique en fonction de la Demande" },
  { label: "Autres", value: "Autres" },
] as const


const languagesL = [
  { label: "À Pied", value: "À Pied" },
  { label: "À Vélo", value: "À Vélo" },
  { label: "En Voiture Privée", value: "En Voiture Privée" },
  { label: "En Transport en Commun", value: "En Transport en Commun" },
  { label: "Autres", value: "Autres" },
] as const


export default function Step4Form({ id, className }: Props) {
  const form = useSelfPatientInfoForm();


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
            <FormItem className="flex flex-col">
              <FormLabel>Tarification</FormLabel>
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
                          Select Language
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

                            languages?.map((language) => (
                              <CommandItem
                                key={language.value}
                                className="grid grid-cols-12"
                                value={language.label}
                                // onSelect={() => setSelectEvent(event.id)}
                                onSelect={() => {
                                  form
                                    .watch("language")
                                    .some((el) => el === language.value)
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
                                    form
                                      .watch("language")
                                      .some((el) => el === language.value)
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
            <FormItem className="flex flex-col">
              <FormLabel>Modes de Transport Proposés</FormLabel>
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
                          Select Language
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
                                  form
                                    .watch("language")
                                    .some((el) => el === language.value)
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
                                    form
                                      .watch("language")
                                      .some((el) => el === language.value)
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
        <div className="mb-2 flex justify-center gap-8 items-center col-span-2">
          <Link
            className=" text-secondary-500"
            href="/tourist-guides/step3"
          >
            <Button className="bg-blue-500 hover:bg-blue-500 w-36 gap-2 text-md"><ArrowLeft size={16} /> Précédent  </Button>
          </Link>

          <Link
            className=" text-secondary-500"
            href="/tourist-guides/step5"
          >
            <Button className="bg-blue-500 hover:bg-blue-500 w-36 gap-2 text-md">Suivant <ArrowRight size={16} /></Button>
          </Link>

        </div>

      </form>

    </Form>
  );
}
