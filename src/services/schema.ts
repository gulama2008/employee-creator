import { z } from "zod";

export const personalInformationSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email().min(1, { message: "Email is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  type: z.string().min(1, { message: "Type is required" }),
  startDateDay: z.coerce
    .string()
    .min(1, { message: "Start day is required" })
    .max(2),
  startDateMonth: z.coerce
    .string()
    .min(1, { message: "Start month is required" }),
  startDateYear: z.coerce
    .string()
    .min(4, { message: "Start year is required" })
    .max(4),
  finishDateDay: z.coerce.string().max(2),
  finishDateMonth: z.coerce.string(),
  finishDateYear: z.coerce.string().max(4),
  onGoing: z.string(),
  basis: z.string().min(1, { message: "Please choose a basis" }),
  hoursPerWeek: z.coerce.string().min(1, { message: "Hours per week is required" }),
});
