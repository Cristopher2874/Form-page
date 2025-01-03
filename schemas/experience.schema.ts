import { z } from "zod";

export const ExperienceSchema = z.object({
  /*Current Role Verification*/  
  currentRole: z.string().min(
      1, 
      "Al menos un caracter"
    ).max(
      100, 
      "Máximo 100 caracteres"
    ),

    /*YearsOfExperience verification*/  
    yearsOfExperience: z.string().trim().regex(
      /^[1-9]\d*$/,
      "Solo números"
    ).max(
      2, 
      "Ingresa tiempo de experiencia válido"
    ),

    /*Skills verification*/
    skills: z.string().min(
      1, 
      "Incluye al menos una habilidad"
    ),

    /*Actual Company verification*/
    actualCompany: z.string().min(
      1, "Al emnos un caracter"
    ).max(
      50, 
      "Máximo 50 caracteres"
    ),

    /*Education verification*/
    education: z.string().min(
      1, 
      "Al menos un caracter"
    ).max(
      100, 
      "Máximo 100 caracteres"
    ),

    /*Resume verification*/
    resume: z.string().optional(),

    /*Achievements verification*/
    achievements: z.string().optional(),
  });

export type Experience = z.infer<typeof ExperienceSchema>;
