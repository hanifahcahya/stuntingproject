import React, { useState, useEffect } from "react";
import FAQItem from "../../components/FAQcomp/FAQcomp";
import FAQdb from "../../api/DataFAQ.json";

const FAQitems = () => {
  const [data, setData] = useState({
    articles: [],
    faqs: [],
  });

  useEffect(() => {
    const fetchData = () => {
      setData(FAQdb);
    };

    fetchData();
  }, []);

  return (
    <div id="FAQitems">
      <section className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
        <h1 className="mb-8 text-xl font-bold md:text-3xl">
          Frequently Asked Questions
        </h1>
        <div className="flex">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {data.faqs.map((faq) => (
              <FAQItem key={faq.id} {...faq} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQitems;
