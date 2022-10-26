import React from "react";
import { useLoaderData } from "react-router-dom";
import QaCard from "./Shared/QaCard";

const Faq = () => {
  const faqs = useLoaderData();

  return (
    <div className="container my-3 py-3">
      <h1 className="text-center">This is blog page</h1>

      <div className="py-3">
        {faqs.map(faq => (
          <QaCard key={faq.id} blog={faq}></QaCard>
        ))}
      </div>
    </div>
  );
};

export default Faq;
