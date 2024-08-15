import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Upload } from "./pages/Upload";
import { SignUp } from "./pages/SignUp";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
