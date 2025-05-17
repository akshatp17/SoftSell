import { motion } from "framer-motion";
import ChooseCards from "./ChooseCards";

import { Timer, ShieldCheck, DollarSign, BadgeCheck } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhyChooseUs = () => {
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
    <motion.section
      className="w-full py-12 bg-gray-50 px-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Why Choose Us?</h1>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
            Unlock the full value of your unused software licenses with a
            platform that's fast, secure, and built with your business in mind.
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
    </motion.section>
  );
};

export default WhyChooseUs;
