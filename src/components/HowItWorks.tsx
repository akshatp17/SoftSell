import { motion } from "framer-motion";
import { FileUp, ChartCandlestick, BanknoteArrowUp } from "lucide-react";
import Arrow from "../assets/arrow.svg";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HowItWorks = () => {
  return (
    <motion.section
      className="w-full bg-indigo-600 py-10 px-5"
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-lg text-white mt-2 max-w-2xl mx-auto">
            How SoftSell Works?
          </p>
          <h1 className="text-4xl font-bold text-white">
            Three steps to turn licenses into cash
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center text-white text-center gap-10 relative mb-10 mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col items-center max-w-xs">
            <div className="mb-4">
              <FileUp size={64} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Upload License</h3>
            <p>
              Upload your unused software licenses and get an instant valuation.
            </p>
          </div>

          {/* Arrow 1 */}
          <img
            src={Arrow}
            alt="Arrow"
            className="hidden md:block w-40 h-40 transform -translate-y-5 rotate-91"
          />

          {/* Step 2 */}
          <div className="flex flex-col items-center max-w-xs">
            <div className="mb-4">
              <ChartCandlestick size={64} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Valuation</h3>
            <p>
              Choose the software licenses you want to sell, set prices, and
              define license transfer rules.
            </p>
          </div>

          {/* Arrow 2 */}
          <img
            src={Arrow}
            alt="Arrow"
            className="hidden md:block w-40 h-40 transform -translate-y-5 rotate-91"
          />

          {/* Step 3 */}
          <div className="flex flex-col items-center max-w-xs">
            <div className="mb-4">
              <BanknoteArrowUp size={64} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Paid</h3>
            <p>
              Buyers purchase your licenses, and you receive secure payments
              directly to your account.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
