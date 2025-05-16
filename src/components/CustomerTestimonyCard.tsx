import { Star, Quote } from "lucide-react";

interface CustomerTestimonyCardProps {
  name: string;
  role: string;
  company: string;
  avatar: string;
  testimony: string;
  rating: number;
}

const CustomerTestimonyCard = (props: CustomerTestimonyCardProps) => {
  const { name, role, company, avatar, testimony, rating } = props;

  return (
    <div className="relative w-[300px] bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 mx-2">
      {/* Quote Icon */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-red-500 w-10 h-10 rounded-full flex items-center justify-center z-10">
        <Quote className="text-white" size={22} />
      </div>

      {/* Top Section*/}
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full border-2 border-white shadow-md"
        />
        <div>
          <h2 className="text-lg font-bold text-gray-800">{name}</h2>
          <h3 className="text-xs flex justify-center gap-1 text-gray-600 flex-col">
            <span>{role}</span>
            <span>{company}</span>
          </h3>
        </div>
      </div>

      {/* Testimonial Text */}
      <div className="text-gray-700 text-sm leading-relaxed text-center items-center flex flex-col gap-2">
        “{testimony}”
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={18} className="text-red-500" fill="red" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonyCard;
