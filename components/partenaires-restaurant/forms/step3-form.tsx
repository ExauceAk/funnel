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

import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check, CheckIcon, ChevronsUpDown } from "lucide-react";
import Link from "next/link";

type Props = {
  id: string;
  className?: string;
};


const languages = [
  { label: "Visites Historiques", value: "Visites Historiques" },
  { label: "Visites Culturelles", value: "Visites Culturelles" },
  { label: "Randonnées", value: "Randonnées" },
  { label: "Excursions en Plein Air", value: "Excursions en Plein Air" },
  { label: "Dégustations de Cuisine Locale", value: "Dégustations de Cuisine Locale" },
  { label: "Visites thématiques (ex: Art contemporain, architecture, gastronomie, etc.)", value: "Visites thématiques (ex: Art contemporain, architecture, gastronomie, etc.)" },
  { label: "Autres", value: "Autres" },
] as const


const languagesL = [
  { label: "Guide Accrédité", value: "Guide Accrédité" },
  { label: "Guide Professionnel", value: "Guide Professionnel" },
  { label: "Guide Expérimenté", value: "Guide Expérimenté" },
  { label: "Guide Expert en Écotourisme", value: "Guide Expert en Écotourisme" },
  { label: "Autres", value: "Autres" },
] as const


export default function Step3Form({ id, className }: Props) {
  const form = useSelfPatientInfoForm();


  const onSubmit = useCallback(() => { }, []);

  const [selectLanguage, setSelectLanguage] = useState("");

  useEffect(() => {
    if (selectLanguage) {
      const selectedUser = languages?.find((d) => d.label === selectLanguage);

      if (selectedUser) {
        const existingUserIndex = form
          .getValues("language")
          .findIndex((user) => user === selectedUser.label);

        if (existingUserIndex === -1 || existingUserIndex < 0) {
          form.setValue("language", [
            ...form.getValues().language,
            selectedUser.label,
          ]);
        }
      } else {
        console.log("Error");
      }
    }
  }, [selectLanguage]);

  /**
   * function to remove user
   * @param userToRemove
   */
  const handleRemoveUser = (remove: string) => {
    const updated = form
      .getValues()
      .language.filter((item) => item !== remove);
    //@ts-ignore
    form.setValue("language", updated);
  };


  const [selectLanguageL, setSelectLanguageL] = useState("");

  useEffect(() => {
    if (selectLanguageL) {
      const selectedUser = languagesL?.find((d) => d.label === selectLanguageL);

      if (selectedUser) {
        const existingUserIndex = form
          .getValues("languageL")
          .findIndex((user) => user === selectedUser.label);

        if (existingUserIndex === -1 || existingUserIndex < 0) {
          form.setValue("languageL", [
            ...form.getValues().languageL,
            selectedUser.label,
          ]);
        }
      } else {
        console.log("Error");
      }
    }
  }, [selectLanguageL]);

  /**
   * function to remove user
   * @param userToRemove
   */
  const handleRemoveUserL = (remove: string) => {
    const updated = form
      .getValues()
      .languageL.filter((item) => item !== remove);
    //@ts-ignore
    form.setValue("languageL", updated);
  };

  return (
    <Form {...form}>
      <form
        id={id}
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid w-full grid-cols-2 gap-12 ", className)}
      >


        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Types de Visites Guidées</FormLabel>
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

                          <p className="line-clamp-1 font-normal">
                            {field.value || "Selelectionnez une valeur"}
                          </p>
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
                                onSelect={() => {
                                  form
                                    .watch("language")
                                    .some((el) => el === language.value)
                                    ? handleRemoveUser(language.value)
                                    : setSelectLanguage(language.value);
                                  form.watch("language")
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
          name="languageL"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Niveau de Certification</FormLabel>
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

                          <p className="line-clamp-1 font-normal">
                            {field.value || "Selelectionnez une valeur"}
                          </p>
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
                                onSelect={() => {
                                  form
                                    .watch("languageL")
                                    .some((el) => el === language.value)
                                    ? handleRemoveUserL(language.value)
                                    : setSelectLanguageL(language.value);
                                  form.watch("languageL")
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
                                      .watch("languageL")
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
            href="/tourist-guides/step2"
          >
            <Button className="bg-[#2ea2bd] hover:bg-[#2ea2bd] w-36 gap-2 text-md"><ArrowLeft size={16} /> Précédent  </Button>
          </Link>

          <Link
            className=" text-secondary-500"
            href="/tourist-guides/step4"
          >
            <Button className="bg-[#2ea2bd] hover:bg-[#2ea2bd] w-36 gap-2 text-md">Suivant <ArrowRight size={16} /></Button>
          </Link>

        </div>

      </form>

    </Form>
  );
}
