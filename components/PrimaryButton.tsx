type PrimaryButtonProps = {
  text: string;
  classes?: string;
};

export default function PrimaryButton({ text, classes }: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className={`hidden lg:block bg-neutral-900 text-white font-heading font-bold text-xl rounded-xl ${classes}`}
    >
      {text}
    </button>
  );
}
