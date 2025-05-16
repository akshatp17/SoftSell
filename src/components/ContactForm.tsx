import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();
  const sendMessage = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    reset();
  };

  return (
    <div className="flex justify-center items-center px-4">
      <div className="w-full max-w-lg p-8 rounded-lg">
        <form onSubmit={handleSubmit(sendMessage)} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
            className="w-full p-3 bg-black text-white border border-gray-600 rounded-md focus:outline-none focus:border-gray-400"
            required
          />
          {/* {errors.name && <p className="text-red-500">{errors.name.message}</p>} */}

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-3 bg-black text-white border border-gray-600 rounded-md focus:outline-none focus:border-gray-400"
            required
          />
          {/* {errors.email && <p className="text-red-500">{errors.email.message}</p>} */}

          <input
            type="text"
            placeholder="Subject"
            {...register("subject", { required: "Subject is required" })}
            className="w-full p-3 bg-black text-white border border-gray-600 rounded-md focus:outline-none focus:border-gray-400"
            required
          />
          {/* {errors.subject && <p className="text-red-500">{errors.subject.message}</p>} */}

          <textarea
            placeholder="Message"
            {...register("message", { required: "Message is required" })}
            className="w-full p-3 bg-black text-white border border-gray-600 rounded-md focus:outline-none focus:border-gray-400 h-32 resize-none"
            required
          ></textarea>
          {/* {errors.message && <p className="text-red-500">{errors.message.message}</p>} */}

          <button
            type="submit"
            className={`w-full bg-sky-300 text-black font-semibold py-3 rounded-md hover:bg-sky-600 transition duration-250 ${
              isLoading ? "hover:cursor-not-allowed" : "hover:cursor-pointer"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "SENDING MESSAGE..." : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
