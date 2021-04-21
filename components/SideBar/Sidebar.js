import {XIcon} from "@heroicons/react/solid";

import SidebarCategory from "../SideBarCategory/SideBarCategory";
import SideBarItem from "./../SideBarItem/SideBarItem";
export default function Aside({
  openAside,
  closeAside,
}) {
  return (
    <aside
      className={
        openAside
          ? "sm:w-full md:w-1/2 h-auto bg-gray-100 z-10 fixed top-0 overflow-y-auto transition-all duration-350 transform translate-x-0"
          : "sm:w-full md:w-1/2 h-auto bg-gray-100 z-10 fixed top-0 overflow-y-auto transition-all duration-350 transform -translate-x-full"
      }>
      <div className='flex justify-end h-16 w-full bg-gray-100'>
        <XIcon
          className='h-10 w-10 relative top-3 right-3'
          onClick={closeAside}
        />
      </div>

      <div>
        <SidebarCategory />
        <SideBarItem />
      </div>
    </aside>
  );
}
