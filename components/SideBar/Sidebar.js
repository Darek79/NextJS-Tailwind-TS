import {XIcon} from "@heroicons/react/solid";

export default function Aside({
  openAside,
  closeAside,
}) {
  return (
    <aside
      className={
        openAside
          ? "w-full h-full z-5 bg-red-800 fixed transition-all duration-350 transform translate-x-0"
          : "w-full h-full z-5 bg-red-800 fixed transition-all duration-350 transform -translate-x-full"
      }>
      {console.log(openAside)}
      <XIcon
        className='absolute top-3 right-3 w-10 h-10'
        onClick={closeAside}
      />
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </aside>
  );
}
