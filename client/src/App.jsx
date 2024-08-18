import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Upload } from "./pages/Upload";
import { SignUp } from "./pages/SignUp";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { Transcript } from "./pages/Transcript";
import { AccountSettings } from "./components/AccountSettings";
import Loader from "./components/Loader/Loader";
import { useSelector } from "react-redux";

function App() {
  const { loading } = useSelector((state) => state.loader);

  return (
    <>
      {loading && <Loader />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route
              path="/account"
              element={<AccountSettings isPage={true} />}
            />
            <Route path="/transcript" element={<Transcript />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
