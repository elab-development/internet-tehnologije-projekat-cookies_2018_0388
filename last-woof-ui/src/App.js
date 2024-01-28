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

function App() {
  return (
    <>
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
            </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
