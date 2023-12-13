// FAQItem.jsx
import React from "react";

const FAQcomp = ({ question, answer, id, open, toggle }) => {
  return (
    <div
      x-data="collapse()"
      className="px-4 mb-4 rounded bg-secondary font-poppins"
    >
      <button
        x-spread="trigger"
        className="flex items-center justify-start w-full py-4 pr-1 font-bold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
        role="button"
        aria-controls={id}
        aria-expanded={open}
        onClick={toggle}
      >
        {question}
      </button>
      <div
        x-spread="collapse"
        x-cloak="true"
        className="pb-5 ml-2 font-sans font-medium text-gray-500"
        id={id}
      >
        {answer}
      </div>
    </div>
  );
};

export default FAQcomp;
