import {
  CheckResize,
  InitWidth,
} from "../../Hooks/helperFn";

export default function MainDiv({children}) {
  // const isResized = CheckResize();
  // const initWidth = InitWidth();
  return (
    <div className='grid grid-rows-layout xl:grid-cols-10 md:grid-cols-2 sm:grid-cols-1 w-screen h-auto md:bg-pink-600 xl:bg-yellow-700'>
      {children}
    </div>
  );
}
// grid xl:grid-cols-10 md:grid-cols-2 sm:grid-cols-1 w-screen h-auto md:bg-pink-600 sm:bg-green-500 xl:bg-yellow-700
