import Image from "next/image";
import Header from "./components/Header";
import LatestRecipes from "./components/LatestRecipes";
import ImageWithText from "./components/ImageWithText";
import CommunityElement from "./components/CommunityElement";
import EnterTheCommunity from "./components/EnterTheCommunity";
import Modal from "./components/Modal";
import ModalElement from "./components/ModalElement";
import { IngredientsContextProvider } from "@/app/contexts/IngredientsContext";

export default function Home() {
  return (
    <IngredientsContextProvider>
    <main>
      <Header></Header>
      
      <div>

      <LatestRecipes ></LatestRecipes>
      <EnterTheCommunity></EnterTheCommunity>
      <Modal></Modal>
       
      
       

      </div>
    </main>
  </IngredientsContextProvider>
  );
}
