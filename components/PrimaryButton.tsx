import Link from 'next/link';

type PrimaryButtonProps = {
  text: string;
  classes?: string;
  path: string;
};

export default function PrimaryButton({
  text,
  classes,
  path,
}: PrimaryButtonProps) {
  return (
    <Link
      href={path}
      className={`cursor-pointer hidden lg:block bg-neutral-900 text-white font-heading font-bold text-xl rounded-xl ${classes}`}
    >
      {text}
    </Link>
  );
}
