import Image from 'next/image';
import fork from '@/assets/images/pattern-fork.svg';
import knife from '@/assets/images/pattern-knife.svg';
import PrimaryButton from './PrimaryButton';

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden max-w-[1200px] mx-auto py-24 bg-neutral-200 text-neutral-900 rounded-2xl flex flex-col gap-10 items-center justify-center">
      <div className="relative z-1">
        <h2 className="font-heading font-extrabold text-5xl mb-4">
          Ready to cook smarter?
        </h2>
        <p className="text-xl">
          Hit the button, pick a recipe, and get dinner on the table—fast.
        </p>
      </div>
      <PrimaryButton text="Browser recipes" classes="relative z-1 px-4 py-3" />
      <Image
        src={fork}
        width={315}
        height={391}
        alt=""
        className="absolute -left-16 -bottom-10 z-0"
      />
      <Image
        src={knife}
        width={339}
        height={339}
        alt=""
        className="absolute -right-16 top-4 z-0"
      />
    </section>
  );
}
