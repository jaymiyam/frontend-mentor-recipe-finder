import { z } from 'zod';

export const editRecipeSchema = z.object({
  title: z
    .string()
    .min(3, 'Give the recipe a descriptive title.')
    .max(100, 'Keep titles under 100 characters.'),
  overview: z
    .string()
    .min(20, 'Add a short overview (at least 20 characters).')
    .max(500, 'Keep the overview under 500 characters.'),
  servings: z.coerce
    .number({ invalid_type_error: 'Servings must be a number.' })
    .int('Servings must be a whole number.')
    .min(1, 'At least one serving is required.')
    .max(24, 'Use a realistic serving size (24 max).'),
  prepMinutes: z.coerce
    .number({ invalid_type_error: 'Prep time must be a number.' })
    .int('Prep time must be a whole number.')
    .min(0, 'Prep time cannot be negative.')
    .max(120, 'Prep time seems too long (max 120 minutes).'),
  cookMinutes: z.coerce
    .number({ invalid_type_error: 'Cook time must be a number.' })
    .int('Cook time must be a whole number.')
    .min(0, 'Cook time cannot be negative.')
    .max(120, 'Cook time seems too long (max 120 minutes).'),
  ingredients: z
    .array(
      z
        .string()
        .min(2, 'Ingredient descriptions should be at least 2 characters.')
    )
    .min(1, 'Add at least one ingredient.'),
  instructions: z
    .array(
      z.string().min(5, 'Instruction steps should be at least 5 characters.')
    )
    .min(1, 'Add at least one instruction step.'),
});

export type EditRecipeFormValues = z.infer<typeof editRecipeSchema>;
