import {
  CheckResize,
  InitWidth,
} from "./../../Hooks/helperFn";
import Aside from "./../SideBar/Sidebar";
import {useState} from "react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
} from "@heroicons/react/solid";

export default function HeaderComp() {
  const [openAside, setAside] = useState(false);

  function openSidebar() {
    setAside((p) => !p);
  }
  return (
    <header className='flex items-start w-full row-span-1 xl:col-start-2 xl:col-end-10 md:col-span-2 sm:h-2/5 bg-gray-50 '>
      <Aside
        openAside={openAside}
        closeAside={openSidebar}
      />
      <div className='flex items-center h-full w-1/4 '>
        <MenuIcon
          className='h-3/5 flex-auto  text-black'
          onClick={openSidebar}
        />
        <SearchIcon className='h-3/5 flex-auto  text-black' />
      </div>
      <div className='flex h-full flex-auto '>
        <img
          src='./logo-11.svg'
          alt='logo'
          className='m-auto h-full'
        />
      </div>
      <div className='flex h-full w-1/5  '>
        <ShoppingBagIcon className='h-3/5 m-auto' />
      </div>
    </header>
  );
}
