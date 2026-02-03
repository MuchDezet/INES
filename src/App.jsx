import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Text from './components/Text';
import AboutSection from './components/About';
import How from './components/How';
import Team from './components/Team';
import Pricing from './components/Pricing';
import FAQ from './components/Faq';
import Form from './components/Form';
import Footer from './components/Footer';
import Service1 from './pages/Service1';
import Service2 from './pages/Service2';
import Service3 from './pages/Service3';
import Courses from './pages/Courses';
import Shop from './pages/Shop';
import Loader from './components/Loader'; // Import Loader baru
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 detik loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="min-h-[100dvh] w-full flex flex-col overflow-x-hidden">
        <Navbar />
        
        {/* Main content area yang akan berubah sesuai route */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Text />
                <AboutSection />
                <How />
                <Team />
                <Pricing />
                <FAQ />
              </>
            } />
            <Route path="/services/export" element={<Service1 />} />
            <Route path="/services/import" element={<Service2 />} />
            <Route path="/services/training" element={<Service3 />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>
        <Form />
        <Footer />
      </div>
    </Router>
  );
}

export default App;