/* eslint-disable */
"use client";
// import ImageUpload from "@/components/image-upload";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import useSelfPatientInfoForm from "@/hooks/tourist-guides/use-personnal-information-form";
import { cn } from "@/lib/utils";

import Uploader from "@/components/image-upload";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useState } from "react";
import Link from "next/link";

type Props = {
  id: string;
  className?: string;
};


export default function Step5Form({ id, className }: Props) {
  const form = useSelfPatientInfoForm();


  const onSubmit = useCallback(() => { }, []);

  const [visites, setVisites] = useState<File[]>([]);
  const [travail, setTravail] = useState<File[]>([]);
  const [autre, setAutre] = useState<File[]>([]);

  return (
    <Form {...form}>
      <form
        id={id}
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid w-full grid-cols-2 gap-12 max-h-[60vh] overflow-auto sidebar", className)}
      >


        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="col-span-2 sm:col-span-1">
              <FormLabel className="text-primary-900">
                Photos de visites guidées précédentes
              </FormLabel>
              <FormControl>
                <Uploader
                  files={visites}
                  setFiles={setVisites}
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
                Autorisation de travail (si applicable)
              </FormLabel>
              <FormControl>
                <Uploader
                  files={travail}
                  setFiles={setTravail}
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
            <FormItem className="col-span-2 sm:col-span-2">
              <FormLabel className="text-primary-900">
                Autres documents
              </FormLabel>
              <FormControl>
                <Uploader
                  files={autre}
                  setFiles={setAutre}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />




        <div className="mb-2 flex justify-center gap-8 items-center col-span-2">
          <Link
            className=" text-secondary-500"
            href="/tourist-guides/step4"
          >
            <Button className="bg-[#2ea2bd] hover:bg-[#2ea2bd] w-36 gap-2 text-md"><ArrowLeft size={16} /> Précédent  </Button>
          </Link>

          <Link
            className=" text-secondary-500"
            href="/tourist-guides/congratulation"
          >
            <Button className="bg-[#2ea2bd] hover:bg-[#2ea2bd] w-36 gap-2 text-md">Suivant <ArrowRight size={16} /></Button>
          </Link>

        </div>

      </form>

    </Form>
  );
}
