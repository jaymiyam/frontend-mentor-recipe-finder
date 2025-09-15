import { ReactNode } from 'react';

type AboutFeaturesProps = {
  title: string;
  children: ReactNode;
};

export default function AboutFeatures({ title, children }: AboutFeaturesProps) {
  return (
    <section className="w-full">
      <div className="py-24 max-w-[1200px] border-b border-b-neutral-200 mx-auto grid grid-cols-[35%_65%]">
        <h3 className="font-heading font-extrabold tracking-tight text-5xl text-neutral-900 leading-tight">
          {title}
        </h3>
        <div className="grid gap-12">{children}</div>
      </div>
    </section>
  );
}
