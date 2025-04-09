import React, { useState } from 'react';
import '../assets/style/acordeon.css';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Afiliados Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laculis leo faucibus nunc vestibulum fringilla. Aenean a laculis risus, ut finibus purus. Suspendisse cursus met eget pretium dapibus. Curabitur ut turpis vel felis imperdiet condimentum et quis urna. Aliquam a pretium odio, a tempus velit. Mauris sed auctor dolor, ut finibus purus. Suspendisse cursus nulla eget pretium dapibus. Curabitur ut turpis vel felis imperdiet condimentum et quis urna. Aliquam a pretium odio, a tempus velit. Mauris sed auctor dolor."
    },
    {
      question: "Afiliados Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      answer: [
        "Afiliados Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Afiliados Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Afiliados Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Afiliados Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ];

  return (
    <div className="faq-section">
      
      <div className="accordion">
        {faqItems.map((item, index) => (
          <div className="accordion-item" key={index}>
            <div 
              className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <h3>{item.question}</h3>
              <span className="accordion-icon">
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            
            <div 
              className={`accordion-content ${activeIndex === index ? 'show' : ''}`}
            >
              {Array.isArray(item.answer) ? (
                <ul>
                  {item.answer.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;