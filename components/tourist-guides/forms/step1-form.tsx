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
import { ArrowRight, Check, CheckIcon, ChevronsUpDown } from "lucide-react";
import Link from "next/link";

type Props = {
  id: string;
  className?: string;
};


const languages = [
  { label: "Français", value: "Français" },
  { label: "anglais", value: "anglais" },
  { label: "italien", value: "italien" },
  { label: "espagnol", value: "espagnol" },
  { label: "Autre", value: "Autre" },

] as const


const languagesL = [
  { label: "Fon", value: "Fon" },
  { label: "Adja", value: "Adja" },
  { label: "Yoruba", value: "Yoruba" },
  { label: "Bariba", value: "Bariba" },
  { label: "Dendi", value: "Dendi" },
  { label: "Nago", value: "Nago" },
] as const


export default function Step1Form({ id, className }: Props) {
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
          name="firstName"
          render={({ field }) => (
            <FormItem className="col-span-2 sm:col-span-1">
              <FormLabel className="text-primary-900">
                Nom
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="John"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="col-span-2 sm:col-span-1">
              <FormLabel className="text-primary-900">
                Prénom
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Doe"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="col-span-2 sm:col-span-1">
              <FormLabel className="text-primary-900">
                Adresse e-mail
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="example@gmail.com"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="col-span-2 sm:col-span-1">
              <FormLabel className="text-primary-900">
                Owner last name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Doe"
                  {...field}
                />
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
              <FormLabel>Langues internationale parlées</FormLabel>
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
                                  // form
                                  form.setValue("language", language.value)
                                  //   .watch("language")
                                  //   .some((el) => el === language.value)
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
          name="languageL"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Langues locale parlées</FormLabel>
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

                            languagesL?.map((language) => (
                              <CommandItem
                                key={language.value}
                                className="grid grid-cols-12"
                                value={language.label}
                                // onSelect={() => setSelectEvent(event.id)}
                                onSelect={() => {
                                  form.setValue("languageL", language.value)
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
        <div className="mb-2 flex justify-center items-center col-span-2">
          <Link
            className=" text-secondary-500"
            href="/tourist-guides/step2"
          >
            <Button className="bg-blue-500 hover:bg-blue-500 w-32 gap-2 text-md">Next <ArrowRight size={16} /></Button>
          </Link>

        </div>

      </form>

    </Form>
  );
}
