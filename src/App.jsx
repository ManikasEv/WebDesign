import React from 'react';
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import FeaturesSection from "./components/FeaturesSection.jsx";
import Workflow from "./components/Workflow.jsx";
import Price from "./components/Price.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";
const App = () => {
    return (
<>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6"><HeroSection /></div>
<FeaturesSection />
    <Workflow />
    <Price />
    <Testimonials />
    <Footer />
</>
    )
}

export default App;