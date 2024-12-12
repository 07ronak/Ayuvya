import { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import "./App.css";

function App() {
  const [active, setActive] = useState(2); // By default, the middle element is active

  const sections = ["Strength", "Mobility", "Drills"];

  const handleMouseEnter = (index) => {
    setActive(index);
  };

  return (
    <div className="parent">
      {sections.map((section, index) => (
        <a
          href={section.toLowerCase()}
          key={index}
          className={`child ${active === index ? "active" : ""}`}
          onMouseEnter={() => handleMouseEnter(index)}
        >
          <span>{section.toUpperCase()}</span>
          <IoIosArrowDroprightCircle className="icon" />
        </a>
      ))}
    </div>
  );
}

export default App;
