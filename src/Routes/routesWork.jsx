import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Heloiza from "../components/PagesProjects/Heloiza";
import PetAmarelo from "../components/PagesProjects/PetAmarelo";
import ViceVersa from "../components/PagesProjects/ViceVersa";
import UrbanPet from "../components/PagesProjects/UrbanPet";
import TaiannySantana from "../components/PagesProjects/Taianny";
import Helena from "../components/PagesProjects/Helena";

export default function RoutesWork() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Routes>
      <Route path="/Heloiza-Andrade" element={<Heloiza/>} />
      <Route path="/Pet-Amarelo" element={<PetAmarelo/>} />
      <Route path="/vice-Versa" element={<ViceVersa/>} />
      <Route path="/Urban-Pet" element={<UrbanPet/>} />
      <Route path="/Taianny-Santana" element={<TaiannySantana/>} />
      <Route path="/Helena-Andrade" element={<Helena/>} />
      
    </Routes>
  );
}
