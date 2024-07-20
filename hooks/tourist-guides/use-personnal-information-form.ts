"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(2, {
    message: "FirstName must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),
  birthDate: z.string().min(2, {
    message: "Birth Date must be at least 2 characters.",
  }),
  insurance: z.string().min(2, {
    message: "Insurance must be at least 2 characters.",
  }),
  parentName: z.string().min(2, {
    message: "Parent Name Name must be at least 2 characters.",
  }),
  language: z.string(),
  languageL: z.string(),
  procedure: z.array(z.string()),
  xray: z.string(),
  teeth: z.string(),
  notes: z.string(),
  additionalFiles: z.string(),
});

// Validation not done (Form not understood)

export type ChildPatientInfo = z.infer<typeof schema>;

/**
 * Hook that return create manager and front desk user  form
 * @returns formContext || newForm
 */
export default function useSelfPatientInfoForm() {
  const formContext = useFormContext<ChildPatientInfo>();

  const newForm = useForm<ChildPatientInfo>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      birthDate: "",
      insurance: "",
      parentName: "",
      language: "",
      languageL: "",
      xray: "",
      teeth: "",
      notes: "",
      additionalFiles: "",
      procedure: [],
    },
  });

  return formContext || newForm;
}
