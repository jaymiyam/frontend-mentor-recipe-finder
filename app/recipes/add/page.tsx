import AddRecipeForm from '@/components/AddRecipeForm';

export default function AddRecipePage() {
  return (
    <section>
      <div className="max-w-[1200px] mx-8 xl:mx-auto">
        <div className="py-16 md:py-20 text-pretty flex flex-col items-center justify-center">
          <h1 className=" font-heading font-extrabold tracking-tight text-neutral-900 text-center text-4xl md:text-5xl mb-8">
            Share your healthy recipe
          </h1>
          <AddRecipeForm />
        </div>
      </div>
    </section>
  );
}
