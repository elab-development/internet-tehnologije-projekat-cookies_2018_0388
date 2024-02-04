import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigacija from "./komponente/Navigacija";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Pocetna from "./stranice/Pocetna";
import ONama from "./stranice/ONama";
import Usluge from "./stranice/Usluge";
import Kontakt from "./stranice/Kontakt";
import Pitanja from "./stranice/Pitanja";
import {Container} from "react-bootstrap";
import Footer from "./komponente/Footer";
import Login from "./stranice/Login";
import Register from "./stranice/Register";
import Admin from "./stranice/Admin";
import Rase from "./stranice/Rase";
import {CookiesProvider} from "react-cookie";

function App() {
  return (
    <>
        <CookiesProvider>
            <BrowserRouter>
                <Navigacija />
                <Container className="wrapper">

                <Routes>
                    <Route path="/" element={<Pocetna />} />
                    <Route path="/onama" element={<ONama />} />
                    <Route path="/usluge" element={<Usluge />} />
                    <Route path="/pitanja" element={<Pitanja />} />
                    <Route path="/kontakt" element={<Kontakt />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/rase" element={<Rase />} />
                </Routes>
                </Container>
                <Footer />
            </BrowserRouter>
        </CookiesProvider>
    </>
  );
}

export default App;