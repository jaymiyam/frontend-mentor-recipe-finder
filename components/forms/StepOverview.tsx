'use client';
import { useState, useEffect } from 'react';
import { ChangeEvent, RefObject } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { AddRecipeFormValues } from '@/schemas/recipeSchema';
import Image from 'next/image';

type StepOverviewProps = {
  form: UseFormReturn<AddRecipeFormValues>;
  imageRef: RefObject<File | null>;
};

const StepOverview = ({ form, imageRef }: StepOverviewProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (imageRef.current) {
      setImagePreview(URL.createObjectURL(imageRef.current));
    }
  }, [imageRef]);

  const {
    register,
    formState: { errors },
  } = form;

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      imageRef.current = file;
      setImagePreview(URL.createObjectURL(imageRef.current));
    }
  };

  return (
    <div>
      <fieldset>
        <div className="grid gap-y-2">
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

            <span
              id="title-error"
              className="min-h-[20px] text-sm text-red-600"
            >
              {errors.title?.message}
            </span>
          </label>

          <label className="grid gap-y-2" htmlFor="overview">
            <span className="text-sm font-medium text-neutral-700">
              Overview
            </span>
            <textarea
              id="overview"
              {...register('overview')}
              className="min-h-[112px] rounded-lg border border-neutral-300 px-3 py-2 text-base outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
              placeholder="A refreshing chickpea salad packed with herbs and zesty lemon dressing."
            />
            <span
              id="overview-error"
              className="text-sm text-red-600 min-h-[20px]"
            >
              {errors.overview?.message}
            </span>
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
              <span
                id="servings-error"
                className="text-sm text-red-600 min-h-[20px]"
              >
                {errors.servings?.message}
              </span>
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
              <span
                id="prepMinutes-error"
                className="text-sm text-red-600 min-h-[20px]"
              >
                {errors.prepMinutes?.message}
              </span>
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

              <span
                id="cookMinutes-error"
                className="text-sm text-red-600 min-h-[20px]"
              >
                {errors.cookMinutes?.message}
              </span>
            </label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div className="grid gap-y-2">
          <legend className="text-lg font-semibold text-neutral-900">
            Recipe image (cannot be changed after submit)
          </legend>
          <input
            type="file"
            id="image"
            className="max-w-[220px] file:cursor-pointer file:rounded-lg file:border file:border-neutral-300 file:px-3 file:py-2 text-base file:outline-none file:focus:border-neutral-900 file:focus:ring-2 file:focus:ring-neutral-900/20"
            accept="image/*"
            placeholder="testing"
            {...register('image')}
            multiple={false}
            onChange={handleImageChange}
          />
          <span
            id="overview-error"
            className="text-sm text-red-600 min-h-[20px]"
          >
            {errors.image?.message}
          </span>
          {imagePreview && (
            <div>
              <p className="text-base">Chosen image:</p>
              <Image
                src={imagePreview}
                width={250}
                height={250}
                alt="new recipe image preview"
              />
            </div>
          )}
        </div>
      </fieldset>
    </div>
  );
};

export default StepOverview;
