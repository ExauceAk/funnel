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




export default function Step2Form({ id, className }: Props) {
  const form = useSelfPatientInfoForm();



  const onSubmit = useCallback(() => { }, []);

  const [fields, setFields] = useState<string[]>([""]);

  const [menuSpecial, setMenuSpecial] = useState<string[]>([""]);

  const [menuVegetarian, setMenuVegetarian] = useState<string[]>([""]);


  const handleAddField = () => {
    setFields([...fields, ""]);
  };

  const handleAddMenuSpecial = () => {
    setMenuSpecial([...menuSpecial, ""]);
  };

  const handleAddMenuVegetarian = () => {
    setMenuVegetarian([...menuVegetarian, ""]);
  };

  const handleRemoveField = (index: number) => {
    if (fields.length > 1) {
      setFields(fields.filter((_, i) => i !== index));
    }
  };

  const handleRemoveMenuSpecial = (index: number) => {
    if (menuSpecial.length > 1) {
      setMenuSpecial(menuSpecial.filter((_, i) => i !== index));
    }
  };

  const handleRemoveMenuVegetarian = (index: number) => {
    if (menuVegetarian.length > 1) {
      setMenuVegetarian(menuVegetarian.filter((_, i) => i !== index));
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
                Menu Complet
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
                Menus Spéciaux
              </FormLabel>
              <FormControl>
                <div>
                  {menuSpecial.map((field, index) => (
                    <div key={index} className="flex p-2 gap-1">
                      <Input
                        placeholder=""

                      />
                      {menuSpecial.length > 1 && index === menuSpecial.length - 1 && (
                        <Button className="bg-[#2ea2bd] hover:bg-[#2ea2bd]" onClick={() => handleRemoveMenuSpecial(index)}>-</Button>
                      )}
                      {index === menuSpecial.length - 1 && (
                        <Button className="bg-[#2ea2bd] hover:bg-[#2ea2bd]" onClick={handleAddMenuSpecial} style={{ marginLeft: "8px" }}>+</Button>
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
                Options Végétariennes/Végétaliennes
              </FormLabel>
              <FormControl>
                <div>
                  {menuVegetarian.map((field, index) => (
                    <div key={index} className="flex p-2 gap-1">
                      <Input
                        placeholder=""

                      />
                      {menuVegetarian.length > 1 && index === menuVegetarian.length - 1 && (
                        <Button className="bg-[#2ea2bd] hover:bg-[#2ea2bd]" onClick={() => handleRemoveMenuVegetarian(index)}>-</Button>
                      )}
                      {index === menuVegetarian.length - 1 && (
                        <Button className="bg-[#2ea2bd] hover:bg-[#2ea2bd]" onClick={handleAddMenuVegetarian} style={{ marginLeft: "8px" }}>+</Button>
                      )}
                    </div>
                  ))}
                </div>

              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />




        <div className="mb-2 flex justify-center gap-8 items-center col-span-2">
          <Link
            className=" text-secondary-500"
            href="/partenaires-restaurant/step1"
          >
            <Button className="bg-[#2ea2bd] hover:bg-[#2ea2bd] w-36 gap-2 text-md"><ArrowLeft size={16} /> Précédent  </Button>
          </Link>

          <Link
            className=" text-secondary-500"
            href="/partenaires-restaurant/step3"
          >
            <Button className="bg-[#2ea2bd] hover:bg-[#2ea2bd] w-36 gap-2 text-md">Suivant <ArrowRight size={16} /></Button>
          </Link>

        </div>

      </form>

    </Form>
  );
}
