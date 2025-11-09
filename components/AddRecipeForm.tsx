'use client';
import addRecipe from '@/app/actions/addRecipe';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Schema for recipe object
const ACCEPTED_FILE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/jpg',
  'image/webp',
];
const addRecipeSchema = z.object({
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
  image: z
    .any()
    .refine((files) => files instanceof FileList && files.length > 0, {
      message: 'Please upload an image.',
    })
    .refine(
      (files) =>
        files instanceof FileList &&
        ACCEPTED_FILE_TYPES.includes(files[0]?.type),
      {
        message: 'Only .jpeg, .jpg or .png formats are supported.',
      }
    ),
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

export type AddRecipeFormValues = z.infer<typeof addRecipeSchema>;

type AddRecipeFormProps = {
  defaultValues?: Partial<AddRecipeFormValues>;
};

const defaultFormValues: AddRecipeFormValues = {
  title: '',
  overview: '',
  servings: 1,
  prepMinutes: 0,
  cookMinutes: 0,
  image: null,
  ingredients: [''],
  instructions: [''],
};

const AddRecipeForm = ({ defaultValues }: AddRecipeFormProps) => {
  const resolvedDefaultValues = useMemo<AddRecipeFormValues>(() => {
    const withDefaults: AddRecipeFormValues = {
      ...defaultFormValues,
      ...defaultValues,
      image: {
        ...defaultFormValues.image,
        ...(defaultValues?.image ?? {}),
      },
      ingredients:
        defaultValues?.ingredients && defaultValues.ingredients.length > 0
          ? defaultValues.ingredients
          : defaultFormValues.ingredients,
      instructions:
        defaultValues?.instructions && defaultValues.instructions.length > 0
          ? defaultValues.instructions
          : defaultFormValues.instructions,
    };

    return withDefaults;
  }, [defaultValues]);

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    unregister,
  } = useForm<AddRecipeFormValues>({
    resolver: zodResolver(addRecipeSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: resolvedDefaultValues,
  });

  // watch and keep a live copy of ingredients and instructions input fields
  const ingredients = watch('ingredients') ?? [];
  const instructions = watch('instructions') ?? [];

  const appendIngredient = () => {
    const next = [...ingredients, ''];
    setValue('ingredients', next, { shouldDirty: true, shouldValidate: true });
  };

  const removeIngredient = (index: number) => {
    if (ingredients.length <= 1) {
      return;
    }

    unregister(`ingredients.${index}` as const);
    const next = ingredients.filter(
      (_, currentIndex) => currentIndex !== index
    );
    setValue('ingredients', next, { shouldDirty: true, shouldValidate: true });
  };

  const appendInstruction = () => {
    const next = [...instructions, ''];
    setValue('instructions', next, { shouldDirty: true, shouldValidate: true });
  };

  const removeInstruction = (index: number) => {
    if (instructions.length <= 1) {
      return;
    }

    unregister(`instructions.${index}` as const);
    const next = instructions.filter(
      (_, currentIndex) => currentIndex !== index
    );
    setValue('instructions', next, { shouldDirty: true, shouldValidate: true });
  };

  const onSubmit = (data: AddRecipeFormValues) => {
    addRecipe(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="w-full flex flex-col gap-y-6 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
    >
      <fieldset className="grid gap-y-4">
        <label className="grid gap-y-2" htmlFor="title">
          <span className="text-sm font-medium text-neutral-700">
            Recipe name
          </span>
          <input
            id="title"
            type="text"
            {...register('title')}
            className="rounded-lg border border-neutral-300 px-3 py-2 text-base outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
            placeholder="Mediterranean Chickpea Salad"
          />
          {errors.title && (
            <span id="title-error" className="text-sm text-red-600">
              {errors.title.message}
            </span>
          )}
        </label>

        <label className="grid gap-y-2" htmlFor="overview">
          <span className="text-sm font-medium text-neutral-700">Overview</span>
          <textarea
            id="overview"
            {...register('overview')}
            className="min-h-[112px] rounded-lg border border-neutral-300 px-3 py-2 text-base outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
            placeholder="A refreshing chickpea salad packed with herbs and zesty lemon dressing."
          />
          {errors.overview && (
            <span id="overview-error" className="text-sm text-red-600">
              {errors.overview.message}
            </span>
          )}
        </label>

        <div className="grid gap-4 md:grid-cols-3">
          <label className="grid gap-y-2" htmlFor="servings">
            <span className="text-sm font-medium text-neutral-700">
              Servings
            </span>
            <input
              id="servings"
              type="number"
              inputMode="numeric"
              min={1}
              max={24}
              {...register('servings')}
              className="rounded-lg border border-neutral-300 px-3 py-2 text-base outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
            />
            {errors.servings && (
              <span id="servings-error" className="text-sm text-red-600">
                {errors.servings.message}
              </span>
            )}
          </label>

          <label className="grid gap-y-2" htmlFor="prepMinutes">
            <span className="text-sm font-medium text-neutral-700">
              Prep Minutes
            </span>
            <input
              id="prepMinutes"
              type="number"
              inputMode="numeric"
              min={0}
              max={600}
              {...register('prepMinutes')}
              className="rounded-lg border border-neutral-300 px-3 py-2 text-base outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
            />
            {errors.prepMinutes && (
              <span id="prepMinutes-error" className="text-sm text-red-600">
                {errors.prepMinutes.message}
              </span>
            )}
          </label>

          <label className="grid gap-y-2" htmlFor="cookMinutes">
            <span className="text-sm font-medium text-neutral-700">
              Cook Minutes
            </span>
            <input
              id="cookMinutes"
              type="number"
              inputMode="numeric"
              min={0}
              max={600}
              {...register('cookMinutes')}
              className="rounded-lg border border-neutral-300 px-3 py-2 text-base outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
            />
            {errors.cookMinutes && (
              <span id="cookMinutes-error" className="text-sm text-red-600">
                {errors.cookMinutes.message}
              </span>
            )}
          </label>
        </div>
      </fieldset>

      <fieldset className="grid gap-y-4">
        <label htmlFor="image">
          <span className="block text-lg font-semibold text-neutral-900">
            Recipe image
          </span>
          <input
            type="file"
            id="image"
            className="rounded-lg border border-neutral-300 px-3 py-2 text-base outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
            accept="image/*"
            {...register('image')}
          />
          {errors.image && errors.image.message === 'string' && (
            <span id="overview-error" className="text-sm text-red-600">
              {errors.image.message}
            </span>
          )}
        </label>
      </fieldset>

      <fieldset className="grid gap-y-4">
        <legend className="text-lg font-semibold text-neutral-900">
          Ingredients
        </legend>

        <div className="grid gap-y-3">
          {ingredients.map((_, index) => (
            <div key={`ingredient-${index}`} className="grid gap-y-2">
              <div className="flex items-start gap-x-3">
                <input
                  type="text"
                  {...register(`ingredients.${index}` as const)}
                  className="grow rounded-lg border border-neutral-300 px-3 py-2 text-base outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
                  placeholder={`Ingredient ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => removeIngredient(index)}
                  disabled={ingredients.length === 1}
                  className="rounded-md border border-neutral-300 px-2 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Remove
                </button>
              </div>
              {errors.ingredients?.[index] && (
                <span
                  id={`ingredient-${index}-error`}
                  className="text-sm text-red-600"
                >
                  {errors.ingredients[index]?.message}
                </span>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={appendIngredient}
          className="inline-flex w-fit items-center gap-x-2 rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
        >
          Add ingredient
        </button>

        {typeof errors.ingredients?.message === 'string' && (
          <span className="text-sm text-red-600">
            {errors.ingredients?.message}
          </span>
        )}
      </fieldset>

      <fieldset className="grid gap-y-4">
        <legend className="text-lg font-semibold text-neutral-900">
          Instructions
        </legend>

        <div className="grid gap-y-3">
          {instructions.map((_, index) => (
            <div key={`instruction-${index}`} className="grid gap-y-2">
              <div className="flex items-start gap-x-3">
                <input
                  {...register(`instructions.${index}` as const)}
                  className="grow rounded-lg border border-neutral-300 px-3 py-2 text-base outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
                  placeholder={`Step ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => removeInstruction(index)}
                  disabled={instructions.length === 1}
                  className="rounded-md border border-neutral-300 px-2 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Remove
                </button>
              </div>
              {errors.instructions?.[index] && (
                <span
                  id={`instruction-${index}-error`}
                  className="text-sm text-red-600"
                >
                  {errors.instructions[index]?.message}
                </span>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={appendInstruction}
          className="inline-flex w-fit items-center gap-x-2 rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
        >
          Add instruction
        </button>

        {typeof errors.instructions?.message === 'string' && (
          <span className="text-sm text-red-600">
            {errors.instructions?.message}
          </span>
        )}
      </fieldset>

      <div className="flex items-center justify-end gap-x-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-x-2 rounded-md bg-neutral-900 px-4 py-2 text-xl font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-500"
        >
          {isSubmitting ? 'Saving…' : 'Share recipe'}
        </button>
      </div>
    </form>
  );
};

export default AddRecipeForm;
