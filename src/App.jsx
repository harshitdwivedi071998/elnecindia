import Header from "./components/Header";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PocketGuide from "./pages/PocketGuide";
import PatientTeaching from "./pages/PatientTeaching";
import Resources from "./pages/Resources";
import News from "./pages/News";
import ScrollToTop from "./components/ScrollToTop";
import ComminEvents from "./pages/ComminEvents";
import Annoucment from "./pages/Annoucment";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pocketGuide" element={<PocketGuide />} />
          <Route path="/patientTeaching" element={<PatientTeaching />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/news" element={<News />} />
          <Route path="/commingevents" element={<ComminEvents />} />
          <Route path="/announcment" element={<Annoucment />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
