import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Fairfield from "./pages/counties/Fairfield";
import Hartford from "./pages/counties/Hartford";
import NewHaven from "./pages/counties/New_Haven";
import NewLondon from "./pages/counties/New_London";
import Middlesex from "./pages/counties/Middlesex";
import Tolland from "./pages/counties/Tolland";
import Litchfield from "./pages/counties/Litchfield";
import Windham from "./pages/counties/Windham";
import SodForSale from "./pages/SodForSale";
import SodCalculator from "./pages/SodCalculator";
import SodInstallation from "./pages/SodInstallation";
import ContactUs from "./pages/Contact";
import PreOrder from "./pages/moreInfo/PreOrder";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./App.css";
import Counties from "./pages/Counties";
import ForTheTrade from "./pages/moreInfo/ForTheTrade";
import Terms from "./pages/moreInfo/Terms";
import GolfCourse from "./pages/moreInfo/GolfCourse";
import PalletDelivery from "./pages/moreInfo/PalletDelivery";
import SodInstallationGuide from "./pages/moreInfo/InstallationGuide";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sod_for_sale" element={<SodForSale />} />
          <Route path="/sod_calculator" element={<SodCalculator />} />
          <Route path="/service_areas" element={<Counties />} />
          <Route path="/sod_installation" element={<SodInstallation />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* Dropdown routes */}
          <Route path="/for_the_trade" element={<ForTheTrade />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/before_you_order" element={<PreOrder />} />
          <Route
            path="/installation_guide"
            element={<SodInstallationGuide />}
          />
          <Route path="/pallet_delivery" element={<PalletDelivery />} />
          <Route path="/golf_course_supplier" element={<GolfCourse />} />

          {/* County Routes */}
          <Route path="/counties/fairfield" element={<Fairfield />} />
          <Route path="/counties/hartford" element={<Hartford />} />
          <Route path="/counties/new_haven" element={<NewHaven />} />
          <Route path="/counties/new_london" element={<NewLondon />} />
          <Route path="/counties/middlesex" element={<Middlesex />} />
          <Route path="/counties/tolland" element={<Tolland />} />
          <Route path="/counties/litchfield" element={<Litchfield />} />
          <Route path="/counties/windham" element={<Windham />} />
        </Routes>
      </Router>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
