import {ShoppingBagIcon} from "@heroicons/react/solid";
export default function CartItem({items = 0}) {
  return (
    <div className='flex h-full w-1/5 items-center justify-center'>
      <ShoppingBagIcon className='h-4/5 m-auto' />
      <span className='relative rounded-full py-1 px-1.5 text-xl right-[15px] top-1'>
        {items}
      </span>
    </div>
  );
}
