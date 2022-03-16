import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import SignUpModal from "./components/SignUpModal";
import Private from "./pages/private/Private";
import PrivateHome from "./pages/private/privateHome/PrivateHome";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<PrivateHome />} />
        </Route>
      </Routes>
      <SignUpModal />
    </>
  );
};

export default App;