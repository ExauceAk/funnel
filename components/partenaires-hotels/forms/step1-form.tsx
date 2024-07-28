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
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const


const languagesL = [
  { label: "Fon", value: "Fon" },
  { label: "Adja", value: "Adja" },
  { label: "Yoruba", value: "Yoruba" },
  { label: "Bariba", value: "Bariba" },
  { label: "Dendi", value: "Dendi" },
] as const


export default function Step1Form({ id, className }: Props) {
  const form = useSelfPatientInfoForm();


  const onSubmit = useCallback(() => { }, []);

  return (
    <Form {...form}>
      <form
        id={id}
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid w-full grid-cols-2 gap-12 md:max-h-[60vh] overflow-auto sidebar", className)}
      >

        <p className="text-xl col-span-2">Informations personnels</p>

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

        <p className="text-xl col-span-2">Informations sur l'Établissement</p>

        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="col-span-2 sm:col-span-1">
              <FormLabel className="text-primary-900">
                Nom de l'Hôtel
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
                Adresse de l'Hôtel
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
                Numéro de Téléphone
              </FormLabel>
              <FormControl>
                <Input
                  placeholder=""

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
                Adresse E-mail Professionnelle
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
        <div className="mb-2 flex justify-center items-center col-span-2">
          <Link
            className=" text-secondary-500"
            href="/partenaires-hotels/step2"
          >
            <Button className="bg-[#2ea2bd] hover:bg-[#2ea2bd] w-32 gap-2 text-md">Suivant <ArrowRight size={16} /></Button>
          </Link>

        </div>

      </form>

    </Form>
  );
}
