import Image from 'next/image';

type FeatureCardProps = {
  icon: string;
  title: string;
  text: string;
  size?: number;
};

export default function FeatureCard({
  icon,
  title,
  text,
  size = 28,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="bg-white size-15 grid place-items-center border border-neutral-200 rounded-md">
        <Image src={icon} width={size} height={size} alt={title} />
      </div>
      <h3 className="font-bold font-heading text-neutral-900 leading-tight text-3xl">
        {title}
      </h3>
      <p className="text-xl max-w-[30ch]">{text}</p>
    </div>
  );
}
