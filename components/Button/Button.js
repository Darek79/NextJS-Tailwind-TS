export default function Button({
  txt,
  defaultClass = "h-full w-1/3 tracking-wider text-xl",
}) {
  return (
    <button className={defaultClass}>
      {txt}
    </button>
  );
}
