import ChooseCards from "./components/ChooseCards";
import ContactForm from "./components/ContactForm";
import CustomerTestimonyCard from "./components/CustomerTestimonyCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  Timer,
  ShieldCheck,
  DollarSign,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import Sale from "./assets/sale.svg";

const App = () => {
  const testimony = [
    {
      name: "Rohan Mehta",
      role: "Founder",
      company: "TechBridge Labs",
      avatar: "https://avatar.iran.liara.run/public/boy",
      testimony:
        "I didn't even know it was possible to resell software licenses until I found SoftSell. Their process was clear, fast, and professional. Highly recommended",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "IT Manager",
      company: "CodeNest Solutions",
      avatar: "https://avatar.iran.liara.run/public/girl",
      testimony:
        "I had a bunch of old software licenses from a previous project just sitting unused. SoftSell gave me a quote instantly and I got paid within days. Super smooth experience!",
      rating: 5,
    },
    {
      name: "Ashish Sinha",
      role: "Procurement Lead",
      company: "NovaCorp Systems",
      avatar: "https://avatar.iran.liara.run/public/boy",
      testimony:
        "Selling our unused licenses helped us recover thousands in budget. The platform is intuitive and their support was excellent throughout.",
      rating: 4,
    },
  ];

  const benefits = [
    {
      icon: <Timer size={24} className="text-indigo-600" />,
      title: "Instant Valuations",
      desc: "Get a real-time quote for your unused software licenses within seconds — no waiting, no hassle.",
    },
    {
      icon: <ShieldCheck size={24} className="text-indigo-600" />,
      title: "Secure Transactions",
      desc: "Your data and transactions are protected with industry-grade encryption and privacy protocols.",
    },
    {
      icon: <DollarSign size={24} className="text-indigo-600" />,
      title: "Best Market Prices",
      desc: "We analyze current demand to offer the highest resale value for your software assets.",
    },
    {
      icon: <BadgeCheck size={24} className="text-indigo-600" />,
      title: "Zero Hidden Fees",
      desc: "Transparent pricing from start to finish — what you see is what you get, guaranteed.",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden -z-20">
        <div className="md:min-h-[calc(100vh-100px)] flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-center px-6 md:px-16 py-12 pb-32 w-full">
          {/* Left Part */}
          <div className="flex flex-col justify-center items-start space-y-4 md:w-1/2 w-full h-full pl-5 text-center md:text-left">
            <p className="text-3xl md:text-4xl font-medium text-indigo-600 w-full">
              Welcome to
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 w-full">
              SoftSell
            </h1>
            <p className="text-base md:text-lg text-gray-700 max-w-xl w-full">
              Turn your unused software licenses into cash. Quick valuations,
              secure payouts, and zero hassle — all in one place.
            </p>
            <button className="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm md:text-base rounded-xl font-medium inline-flex items-center transition">
              Get a Free Quote <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          {/* Right Part */}
          <div className="flex justify-center items-center mt-10 md:mt-0 md:w-1/2 w-full">
            <img
              src={Sale}
              alt="Software resale illustration"
              className="w-[90%] md:max-w-full max-w-md object-contain"
            />
          </div>
        </div>

        {/* Bottom Oval SVG */}
        <div className="absolute bottom-0 left-0 w-full -z-10">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#4f39f6"
              fillOpacity="1"
              d="M0,192L60,181.3C120,171,240,149,360,160C480,171,600,213,720,218.7C840,224,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96V320H0Z"
            />
          </svg>
        </div>
      </section>

      {/* How it works */}
      <section className="w-full my-5">How it works here</section>

      {/* Why Choose Us? */}
      <section className="w-full py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900">Why Choose Us?</h1>
            <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
              Unlock the full value of your unused software licenses with a
              platform that's fast, secure, and built with your business in
              mind.
            </p>
          </div>

          {/* Horizontal Division */}
          <div className="flex items-center w-[80%] my-4 mx-auto">
            <div className="flex-grow h-px bg-gray-300" />
            <div className="mx-2 w-2.5 h-2.5 rounded-full bg-gray-300" />
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5">
            {benefits.map((benefit, index) => (
              <ChooseCards
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                desc={benefit.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonies/Reviews */}
      <section className="w-full justify-center items-center flex flex-col gap-4 p-4 my-5 bg-gray-50">
        <div className="flex flex-col text-center">
          <h1 className="text-3xl font-bold">Customer Testimonials</h1>
          <h2 className="text-xl text-gray-700">
            Don't just take our word for it. Here's what our satisfied customers
            have to say.
          </h2>
        </div>

        {/* Horizontal Division */}
        <div className="flex items-center w-[80%] my-4">
          <div className="flex-grow h-px bg-gray-300" />
          <div className="mx-2 w-2.5 h-2.5 rounded-full bg-gray-300" />
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Mapping Customer Testimonies */}
        <div className="flex gap-4 py-4">
          {testimony.map((testimonies, index) => (
            <CustomerTestimonyCard
              key={index}
              name={testimonies.name}
              role={testimonies.role}
              company={testimonies.company}
              avatar={testimonies.avatar}
              testimony={testimonies.testimony}
              rating={testimonies.rating}
            />
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full my-5">
        <div className="flex flex-col text-center">
          <h1 className="text-3xl font-bold">Get in Touch</h1>
          <h2 className="text-xl text-gray-700">
            Ready to turn your unused software licenses into cash? Fill out the
            form below and we'll get back to you within 24 hours.
          </h2>
        </div>
        <ContactForm />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
