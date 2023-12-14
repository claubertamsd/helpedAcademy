import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Subject from "../pages/Subject/Subjects"
function AppRoutes() {
 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/subjects" element={<Subject/>}/>
    </Routes>
  );
}

export default AppRoutes;
