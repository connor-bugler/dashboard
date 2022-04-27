import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Projects from "../views/Projects";
import Snapshots from "../views/Snapshots";
import Branches from "../views/Branches";
import Reports from "../views/Reports";

export default () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Projects />} />

      <Route path=":project" element={<Layout />}>
        <Route path="" element={<Navigate replace to="snapshots" />} />
        <Route path="snapshots" element={<Snapshots />} />
        <Route path="branches" element={<Branches />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
