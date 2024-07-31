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
import { Input } from "@/components/ui/input";
import useSelfPatientInfoForm from "@/hooks/tourist-guides/use-personnal-information-form";
import { cn } from "@/lib/utils";

import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";
import Uploader from "@/components/image-upload";

type Props = {
  id: string;
  className?: string;
};





export default function Step3Form({ id, className }: Props) {
  const form = useSelfPatientInfoForm();

  const [autre, setAutre] = useState<File[]>([]);


  const onSubmit = useCallback(() => { }, []);

  const [fields, setFields] = useState<string[]>([""]);


  const handleAddField = () => {
    setFields([...fields, ""]);
  };


  const handleRemoveField = (index: number) => {
    if (fields.length > 1) {
      setFields(fields.filter((_, i) => i !== index));
    }
  };



  return (
    <Form {...form}>
      <form
        id={id}
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid w-full grid-cols-2 gap-12 md:max-h-[450px] md:overflow-auto md:sidebar", className)}
      >


        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="col-span-2 sm:col-span-1">
              <FormLabel className="text-primary-900">
                Type de Cuisine
              </FormLabel>
              <FormControl>
                <div>
                  {fields.map((field, index) => (
                    <div key={index} className="flex p-2 gap-1">
                      <Input
                        placeholder=""

                      />
                      {fields.length > 1 && index === fields.length - 1 && (
                        <Button className="bg-[#2ea2bd] hover:bg-[#2ea2bd]" onClick={() => handleRemoveField(index)}>-</Button>
                      )}
                      {index === fields.length - 1 && (
                        <Button className="bg-[#2ea2bd] hover:bg-[#2ea2bd]" onClick={handleAddField} style={{ marginLeft: "8px" }}>+</Button>
                      )}
                    </div>
                  ))}
                </div>

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
                Description du Restaurant
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Une brève description de votre restaurant, son ambiance, et ce qui le rend unique........."
                  rows={10}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-center gap-6 col-span-2 sm:col-span-2">
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-primary-900">
                  Horaires d'Arrivée
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="time"
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
              <FormItem className="">
                <FormLabel className="text-primary-900">
                  Horaires de Départ
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="time"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


        </div>

        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="col-span-2 sm:col-span-2">
              <FormLabel className="text-primary-900">
                Photos
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
            href="/partenaires-restaurant/step2"
          >
            <Button className="bg-[#2ea2bd] hover:bg-[#2ea2bd] w-36 gap-2 text-md"><ArrowLeft size={16} /> Précédent  </Button>
          </Link>

          <Link
            className=" text-secondary-500"
            href="/partenaires-restaurant/step4"
          >
            <Button className="bg-[#2ea2bd] hover:bg-[#2ea2bd] w-36 gap-2 text-md">Suivant <ArrowRight size={16} /></Button>
          </Link>

        </div>

      </form>

    </Form>
  );
}
