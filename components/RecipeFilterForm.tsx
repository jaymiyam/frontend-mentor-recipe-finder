'use client';
import { useState } from 'react';
import type { Dispatch, FormEvent, SetStateAction } from 'react';

type RecipeFilterFormProps = {
  searchQuery: string;
  onSearhQueryChange: Dispatch<SetStateAction<string>>;
  maxCooktime: number;
  onMaxCooktimeChange: Dispatch<SetStateAction<number>>;
  maxPreptime: number;
  onMaxPreptimeChange: Dispatch<SetStateAction<number>>;
};

const RecipeFilterForm = ({
  searchQuery,
  onSearhQueryChange,
  maxCooktime,
  onMaxCooktimeChange,
  maxPreptime,
  onMaxPreptimeChange,
}: RecipeFilterFormProps) => {
  const [showMaxCooktime, setShowMaxCooktime] = useState(false);
  const [showMaxPreptime, setShowMaxPreptime] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex flex-col gap-2 md:flex-row justify-between md:items-center"
    >
      <div className="flex flex-col md:flex-row gap-2 justify-start items-center">
        {/* Max prep time filter */}
        <div className="relative w-full">
          <button
            onClick={() => setShowMaxPreptime((prev) => !prev)}
            type="button"
            className={`cursor-pointer w-full bg-white py-2 px-3 rounded-md border border-neutral-200 hover:border-neutral-900 flex justify-center items-center gap-2 text-base font-semibold ${
              showMaxPreptime ? 'border-neutral-900' : ''
            }`}
          >
            <span className="whitespace-nowrap">Max Prep Time</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              fill="none"
              viewBox="0 0 20 21"
            >
              <path
                fill="#163A34"
                fillRule="evenodd"
                d="M10 14.31a.95.95 0 0 1-.673-.279L3.613 8.317a.951.951 0 1 1 1.346-1.346L10 12.01l5.04-5.04a.951.951 0 1 1 1.348 1.346l-5.715 5.714a.95.95 0 0 1-.673.28Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {showMaxPreptime && (
            <fieldset className="absolute z-99 mt-1 w-full bg-white py-2 px-3 rounded-md border border-neutral-200">
              <legend className="sr-only">Select maximum prep time:</legend>

              <div className="text-base font-semibold py-2">
                <input
                  className="appearance-none w-3 h-3 rounded-full outline-neutral-300 outline-1 checked:inset-ring-2 checked:inset-ring-white checked:outline-neutral-900 checked:bg-neutral-900 focus:outline-neutral-300 mr-2 cursor-pointer"
                  type="radio"
                  name="max-prep-time"
                  id="5-minutes-prep"
                  value={5}
                  checked={maxPreptime === 5}
                  onChange={(e) => onMaxPreptimeChange(+e.target.value)}
                />
                <label className="cursor-pointer" htmlFor="5-minutes-prep">
                  5 minutes
                </label>
              </div>
              <div className="text-base font-semibold py-2">
                <input
                  className="appearance-none w-3 h-3 rounded-full outline-neutral-300 outline-1 checked:inset-ring-2 checked:inset-ring-white checked:outline-neutral-900 checked:bg-neutral-900 focus:outline-neutral-300 mr-2 cursor-pointer"
                  type="radio"
                  name="max-prep-time"
                  id="10-minutes-prep"
                  value={10}
                  checked={maxPreptime === 10}
                  onChange={(e) => onMaxPreptimeChange(+e.target.value)}
                />
                <label className="cursor-pointer" htmlFor="10-minutes-prep">
                  10 minutes
                </label>
              </div>
              <div className="text-base font-semibold py-2">
                <input
                  className="appearance-none w-3 h-3 rounded-full outline-neutral-300 outline-1 checked:inset-ring-2 checked:inset-ring-white checked:outline-neutral-900 checked:bg-neutral-900 focus:outline-neutral-300 mr-2 cursor-pointer"
                  type="radio"
                  name="max-prep-time"
                  id="15-minutes-prep"
                  value={15}
                  checked={maxPreptime === 15}
                  onChange={(e) => onMaxPreptimeChange(+e.target.value)}
                />
                <label className="cursor-pointer" htmlFor="15-minutes-prep">
                  15 minutes
                </label>
              </div>
            </fieldset>
          )}
        </div>
        {/* Max cook time filter */}
        <div className="relative w-full">
          <button
            onClick={() => setShowMaxCooktime((prev) => !prev)}
            type="button"
            className={`cursor-pointer w-full bg-white py-2 px-3 rounded-md border border-neutral-200 hover:border-neutral-900 flex justify-center items-center gap-2 text-base font-semibold ${
              showMaxCooktime ? 'border-neutral-900' : ''
            }`}
          >
            <span className="whitespace-nowrap">Max Cook Time</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              fill="none"
              viewBox="0 0 20 21"
            >
              <path
                fill="#163A34"
                fillRule="evenodd"
                d="M10 14.31a.95.95 0 0 1-.673-.279L3.613 8.317a.951.951 0 1 1 1.346-1.346L10 12.01l5.04-5.04a.951.951 0 1 1 1.348 1.346l-5.715 5.714a.95.95 0 0 1-.673.28Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {showMaxCooktime && (
            <fieldset className="absolute z-99 mt-1 w-full bg-white py-2 px-3 rounded-md border border-neutral-200">
              <legend className="sr-only">Select maximum cook time:</legend>

              <div className="text-base font-semibold py-2">
                <input
                  className="appearance-none w-3 h-3 rounded-full outline-neutral-300 outline-1 checked:inset-ring-2 checked:inset-ring-white checked:outline-neutral-900 checked:bg-neutral-900 focus:outline-neutral-300 mr-2 cursor-pointer"
                  type="radio"
                  name="max-cook-time"
                  id="5-minutes-cook"
                  value={5}
                  checked={maxCooktime === 5}
                  onChange={(e) => onMaxCooktimeChange(+e.target.value)}
                />
                <label className="cursor-pointer" htmlFor="5-minutes-cook">
                  5 minutes
                </label>
              </div>
              <div className="text-base font-semibold py-2">
                <input
                  className="appearance-none w-3 h-3 rounded-full outline-neutral-300 outline-1 checked:inset-ring-2 checked:inset-ring-white checked:outline-neutral-900 checked:bg-neutral-900 focus:outline-neutral-300 mr-2 cursor-pointer"
                  type="radio"
                  name="max-cook-time"
                  id="10-minutes-cook"
                  value={10}
                  checked={maxCooktime === 10}
                  onChange={(e) => onMaxCooktimeChange(+e.target.value)}
                />
                <label className="cursor-pointer" htmlFor="10-minutes-cook">
                  10 minutes
                </label>
              </div>
              <div className="text-base font-semibold py-2">
                <input
                  className="appearance-none w-3 h-3 rounded-full outline-neutral-300 outline-1 checked:inset-ring-2 checked:inset-ring-white checked:outline-neutral-900 checked:bg-neutral-900 focus:outline-neutral-300 mr-2 cursor-pointer"
                  type="radio"
                  name="max-cook-time"
                  id="15-minutes-cook"
                  value={15}
                  checked={maxCooktime === 15}
                  onChange={(e) => onMaxCooktimeChange(+e.target.value)}
                />
                <label className="cursor-pointer" htmlFor="15-minutes-cook">
                  15 minutes
                </label>
              </div>
              <div className="text-base font-semibold py-2">
                <input
                  className="appearance-none w-3 h-3 rounded-full outline-neutral-300 outline-1 checked:inset-ring-2 checked:inset-ring-white checked:outline-neutral-900 checked:bg-neutral-900 focus:outline-neutral-300 mr-2 cursor-pointer"
                  type="radio"
                  name="max-cook-time"
                  id="20-minutes-cook"
                  value={20}
                  checked={maxCooktime === 20}
                  onChange={(e) => onMaxCooktimeChange(+e.target.value)}
                />
                <label className="cursor-pointer" htmlFor="20-minutes-cook">
                  20 minutes
                </label>
              </div>
            </fieldset>
          )}
        </div>
      </div>
      {/* Search input */}
      <div className="bg-white p-2 rounded-md border border-neutral-200 hover:border-neutral-900 w-full md:w-[280px] flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          fill="none"
          viewBox="0 0 20 21"
        >
          <path
            fill="#163A34"
            fillRule="evenodd"
            d="M3.336 9.318A5.872 5.872 0 0 1 9.2 3.453a5.872 5.872 0 0 1 5.865 5.865 5.873 5.873 0 0 1-5.865 5.866 5.873 5.873 0 0 1-5.865-5.866Zm15.412 8.716-3.832-3.823a7.492 7.492 0 0 0 1.817-4.893c0-4.153-3.38-7.532-7.532-7.532-4.153 0-7.532 3.38-7.532 7.532 0 4.153 3.38 7.532 7.532 7.532a7.477 7.477 0 0 0 4.494-1.502l3.876 3.866 1.177-1.18Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          className="w-full text-base"
          type="text"
          name="query"
          id="query"
          value={searchQuery}
          onChange={(e) => onSearhQueryChange(e.target.value)}
          placeholder="Search by name or ingredient..."
        />
      </div>
    </form>
  );
};

export default RecipeFilterForm;
