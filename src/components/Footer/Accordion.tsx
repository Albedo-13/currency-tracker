import { PropsWithChildren, ReactNode, useState } from "react";

type AccordionProps = {
  title: string;
  children: PropsWithChildren<ReactNode>;
};

export function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion__header" onClick={toggleAccordion}>
        <h2 className="accordion__title">{title}</h2>
        <span className={`accordion__icon ${isOpen ? "accordion__open" : ""}`}></span>
      </div>
      {isOpen && children}
    </div>
  );
}
