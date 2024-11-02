import { Routes, Route } from "react-router-dom";
import { Layout } from "../Layout";
import { Inicio } from "../Inicio";
import { Planes } from "../Planes";
import { Contacto } from "../Contacto";
import { Quienes } from "../Quienes";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="planes" element={<Planes />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="quienes-somos" element={<Quienes />} />
        </Route>
      </Routes>
    </>
  );
}