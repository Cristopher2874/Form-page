import { z } from "zod";

export const PersonalInfoSchema = z.object({
  /*Full name verification*/
  fullname: z.string({
    required_error: "El nombre es obligatorio",
    invalid_type_error: "El nombre debe ser texto",
  }).min(
    5,
    "El nombre debe tener al menos 10 caracteres"
  ).regex(
    /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
    "El nombre debe contener solo letras"
  ).max(150, "El nombre debe tener menos de 150 caracteres"),

  /*Email verification*/
  email: z.string().email({
    message: "Email inválido"
  }).min(5),

  /*Phone number verification*/
  phone: z.string().trim().regex(
    /^\+?[1-9]\d{1,14}$/,
    "El número de teléfono debe contener solo números"
  ).min(
    10, 
    "El número de teléfono debe tener al menos 10 dígitos"
  ).max(
    15, 
    "El número de teléfono solo puede tener 15 dígitos máximo"
  ),
  
  //TODO: Add location verification
  location: z.string().regex(
    /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+,\s*[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
    { message: "La ubicación debe ser Ciudad, Estado" }
  ).optional(),

  /*Portfolio Verification, optional*/
  portfolioUrl: z.string().optional(),
});

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;