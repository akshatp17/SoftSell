import { motion } from "framer-motion";
import CustomerTestimonyCard from "./CustomerTestimonyCard";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const CustomerTestimony = () => {
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

  return (
    <motion.section
      className="w-full justify-center items-center flex flex-col gap-4 px-5 py-10 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
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
      <div className="flex gap-4 py-4 flex-col md:flex-row flex-wrap justify-center items-center">
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
    </motion.section>
  );
};

export default CustomerTestimony;
