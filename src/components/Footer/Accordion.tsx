import { useState } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2 className="accordion-title">{title}</h2>
        <span className={`accordion-icon ${isOpen ? "accordion-open" : ""}`}></span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}
