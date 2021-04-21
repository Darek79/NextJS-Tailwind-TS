import Image from "next/image";
import Button from "./../Button/Button";
export default function TopContent() {
  return (
    <section className='h-auto w-screen sm:row-start-2 sm:row-end-3 bg-grey-800'>
      <div className='bg-red-200 w-screen h-auto '>
        <Image
          alt='Main+Image'
          src='https://via.placeholder.com/400x600/144552/?text=Main+Image'
          width={400}
          height={600}
          layout='responsive'
        />
      </div>
      <div className='flex bg-red-200 w-screen h-[50px]'>
        <Button txt='MEN' />
        <Button txt='WOMAN' />
        <Button txt='KIDS' />
      </div>
    </section>
  );
}
