import Link from 'next/link';

type PrimaryButtonProps = {
  text: string;
  classes?: string;
  hiddenOnMobile?: boolean;
  path: string;
};

export default function PrimaryButton({
  text,
  classes,
  hiddenOnMobile,
  path,
}: PrimaryButtonProps) {
  return (
    <Link
      href={path}
      className={`cursor-pointer bg-neutral-900 hover:bg-neutral-800 text-white font-heading font-bold text-xl rounded-xl ${classes} ${
        hiddenOnMobile ? 'hidden lg:block' : ''
      }`}
    >
      {text}
    </Link>
  );
}
