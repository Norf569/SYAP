import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Catalogue from "./components/Catalogue/Catalogue";
import Buywork from "./routes/buywork";
import Cart from "./routes/Cart";
import Personal from "./routes/Personal";



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/buywork" element={<Buywork />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Personal" element={<Personal />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
