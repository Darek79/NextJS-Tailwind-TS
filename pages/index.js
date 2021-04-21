import Head from "next/head";
import MainDiv from "../components/mainRessponive/MainResponsive";
import HeaderComp from "../components/Header/Header";
import TopContent from "./../components/TopContent/TopContent";
import ProductCardLong from "../components/ProductCardLong";
export default function Home() {
  return (
    <MainDiv>
      <HeaderComp />
      <TopContent />
      {/* <ProductCardLong /> */}
    </MainDiv>
  );
}
