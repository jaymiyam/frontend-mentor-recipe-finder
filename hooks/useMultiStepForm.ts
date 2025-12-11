'use client';
import { useState, ReactElement } from 'react';

export const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextStep() {
    setCurrentIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function prevStep() {
    setCurrentIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }
  function goToStep(index: number) {
    setCurrentIndex((i) => {
      if (index < 0 || index > steps.length - 1) return i;
      return index;
    });
  }

  return {
    currentIndex,
    currentStep: steps[currentIndex],
    totalSteps: steps.length,
    nextStep,
    prevStep,
    goToStep,
    isFirstStep: currentIndex === 0,
    isLastStep: currentIndex === steps.length - 1,
  };
};
