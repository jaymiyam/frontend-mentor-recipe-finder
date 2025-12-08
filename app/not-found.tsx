import PrimaryButton from '@/components/UI/PrimaryButton';

export default function NotFoundPage() {
  return (
    <section className="h-[100vh]">
      <div className="h-full max-w-[1200px] mx-8 xl:mx-auto">
        <div className="h-full flex flex-col items-center gap-4 justify-center ">
          <h2 className="font-heading text-neutral-900 text-center tracking-tight font-extrabold text-4xl md:text-5xl text-balance leading-tight">
            Not found
          </h2>
          <p className="text-xl max-w-[45ch] leading-relaxed">
            Oops! The page you were looking for does not exist.
          </p>
          <PrimaryButton
            text="Go back home"
            classes="relative z-1 px-4 py-3"
            path="/"
          />
        </div>
      </div>
    </section>
  );
}
