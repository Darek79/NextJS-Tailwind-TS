import Head from "next/head";
import {ProductCardLong} from "../components/ProductCardLong";
export default function Home() {
  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 w-screen h-screen md:bg-pink-600 sm:bg-green-500 xl:bg-yellow-700">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="xl:w-1/2 xl:h-1/2 border-4">
        test
      </div> */}
      <ProductCardLong />
    </div>
  );
}
