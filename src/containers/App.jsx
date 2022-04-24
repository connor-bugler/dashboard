import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./Layout";
import ProjectsPage from "../pages/Projects";

export default () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<ProjectsPage />} />

      <Route path=":project" element={<Layout />}>
        <Route path="snapshots" element={<h1>Snapshot</h1>} />
        <Route path="branches" element={<h1>Branches</h1>} />
        <Route path="reports" element={<h1>Reports</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
