'use client';
import addRecipe from '@/app/actions/addRecipe';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addRecipeSchema, AddRecipeFormValues } from '@/schemas/recipeSchema';
import { useMultiStepForm } from '@/hooks/useMultiStepForm';
import StepIngredients from './StepIngredients';
import StepOverview from './StepOverview';
import StepConfirm from './StepConfirm';
import { useRef } from 'react';

const defaultFormValues: AddRecipeFormValues = {
  title: '',
  overview: '',
  servings: 1,
  prepMinutes: 0,
  cookMinutes: 0,
  image: undefined,
  ingredients: [''],
  instructions: [''],
};

const AddRecipeForm = () => {
  const form = useForm<AddRecipeFormValues>({
    resolver: zodResolver(addRecipeSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: defaultFormValues,
  });

  const imageRef = useRef(null);

  const {
    currentIndex,
    currentStep,
    totalSteps,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([
    <StepOverview key="step-overview" form={form} imageRef={imageRef} />,
    <StepIngredients key="step-ingredients" form={form} />,
    <StepConfirm key="step-confirm" form={form} />,
  ]);

  const handleNext = async () => {
    if (currentIndex === 0) {
      const isValid = await form.trigger([
        'title',
        'overview',
        'servings',
        'cookMinutes',
        'prepMinutes',
        'image',
      ]);
      if (isValid) {
        nextStep();
      }
    } else if (currentIndex === 1) {
      const isValid = await form.trigger(['ingredients', 'instructions']);
      if (isValid) {
        nextStep();
      }
    }
  };

  const handlePrev = () => {
    prevStep();
  };

  const progressText = [
    'Basic Information',
    'Ingredients & Instructions',
    'Review & Submit',
  ];

  return (
    <form
      onSubmit={form.handleSubmit(addRecipe)}
      noValidate
      className="w-full flex flex-col gap-y-6 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
    >
      <div>
        <h2 className="font-bold">
          Step {currentIndex + 1} of {totalSteps}. {progressText[currentIndex]}{' '}
        </h2>
      </div>
      {/* render the component of current step */}
      {currentStep}
      <div className="flex items-center justify-end gap-x-3">
        {/* render back button except for first step */}
        {!isFirstStep && (
          <button
            type="button"
            onClick={handlePrev}
            className="cursor-pointer inline-flex items-center justify-center gap-x-2 rounded-md bg-neutral-900 px-4 py-2 text-xl font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-500"
          >
            Back
          </button>
        )}
        {/* render next button except for last step */}
        {!isLastStep && (
          <button
            type="button"
            onClick={handleNext}
            className="cursor-pointer inline-flex items-center justify-center gap-x-2 rounded-md bg-neutral-900 px-4 py-2 text-xl font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-500"
          >
            Next
          </button>
        )}
        {/* render submit button for the last step */}
        {isLastStep && (
          <button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="cursor-pointer inline-flex items-center justify-center gap-x-2 rounded-md bg-neutral-900 px-4 py-2 text-xl font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-500"
          >
            {form.formState.isSubmitting ? 'Saving…' : 'Share recipe'}
          </button>
        )}
      </div>
    </form>
  );
};

export default AddRecipeForm;
