import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import CustomerTestimony from "./components/CustomerTestimony";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* How it works */}
      <HowItWorks />

      {/* Why Choose Us? */}
      <WhyChooseUs />

      {/* Customer Testimonies/Reviews */}
      <CustomerTestimony />

      {/* Contact Form */}
      <ContactForm />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
