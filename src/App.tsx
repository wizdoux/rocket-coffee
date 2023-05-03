import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Lojas from './Pages/Lojas';
import Menu from "./Pages/Menu";
import GiftCard from "./Pages/GiftCard";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="GiftCard" element={<GiftCard />} />
          <Route path="lojas" element={<Lojas />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
