import { useState } from "react";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}

function Accordion({ faqs }) {
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <ul className="accordion">
      {faqs.map((e, i) => (
        <AccordionList
          currOpen={currOpen}
          setCurrOpen={setCurrOpen}
          num={i + 1}
          title={e.title}
          text={e.text}
          key={i}
        />
      ))}
    </ul>
  );
}
function AccordionList({ currOpen, setCurrOpen, num, title, text }) {
  const open = currOpen === num;

  return (
    <li
      className={`item ${open ? "open" : ""}`}
      onClick={() => (currOpen === num ? setCurrOpen(null):setCurrOpen(num))}
    >
      <p className="number">{num}</p>
      <p className="text">{title}</p>
      {open ? (
        <>
          <p className="icon">-</p>
          <div className="content-box">
            <ul>{text}</ul>
          </div>
        </>
      ) : (
        <>
          <p className="icon">+</p>
        </>
      )}
    </li>
  );
}
