import React, { useEffect, useState } from "react";
const testimonials = [
  {
    text: "Love the attention to detail and prompt action taken. You certainly make the civil portion of the project a breeze. See you on the next one.",
    author: "Ryan Matthews from Tuakiri Property Limited",
  },
  {
    text: "Great work ethic, super responsive and efficient team! I cannot recommend Forest Group enough to all the property developers out there.",
    author: "Porus Dumasia from Oakmont Homes Limited",
  },
];

const truncateText = (text, maxLength = 500) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const Comments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-48 flex justify-center items-center bg-gray-50">
      <div className="w-3/4 md:w-1/2 text-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col justify-center items-center p-8 bg-white shadow-lg rounded-lg transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-lg text-gray-800 font-medium">
              “{truncateText(testimonial.text)}”
            </p>
            <p className="mt-4 text-sm text-gray-600">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
