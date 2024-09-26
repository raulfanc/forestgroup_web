import { Route, Routes } from "react-router-dom";

import { navLinks } from "./constants";
function App() {
  return (
    <Routes>
      {navLinks.map((link) => (
        <Route key={link.href} path={link.href} element={<link.component />} />
      ))}
    </Routes>
  );
}

export default App;
