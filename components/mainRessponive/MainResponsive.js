import {
  CheckResize,
  InitWidth,
} from "./../../Hooks/helperFn";

export default function mainDiv({children}) {
  // const isResized = CheckResize();
  // const initWidth = InitWidth();
  return (
    <div className='grid grid-rows-5 xl:grid-cols-10 md:grid-cols-2 sm:grid-cols-1 w-screen h-screen md:bg-pink-600 sm:bg-green-500 xl:bg-yellow-700'>
      {children}
    </div>
  );
}
