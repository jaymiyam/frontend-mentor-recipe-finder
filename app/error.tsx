'use client';
import PrimaryButton from '@/components/UI/PrimaryButton';

type ErrorPageProps = {
  error: Error & { digest?: string };
};

export default function ErrorPage({ error }: ErrorPageProps) {
  return (
    <section className="h-[100vh]">
      <div className="h-full max-w-[1200px] mx-8 xl:mx-auto">
        <div className="h-full flex flex-col items-center gap-4 justify-center ">
          <h2 className="font-heading text-neutral-900 text-center tracking-tight font-extrabold text-4xl md:text-5xl text-balance leading-tight">
            Sorry, something went wrong.
          </h2>
          <p className="text-xl max-w-[45ch] leading-relaxed">
            {error.message}
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
