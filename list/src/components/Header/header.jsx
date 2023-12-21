import { React, useState, useEffect } from "react";

import "./header.css";

function Header() {
  // State
  const [currentDate, setCurrentDate] = useState(new Date());

  // Getting Current Date
  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
  }, []);

  const formattedDate = currentDate.toLocaleDateString();

  return (
    <div className="headerContainer">
      <h1>Simple React List</h1>
      <p>Date: {formattedDate}</p>
      <div>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Receipt Number" />
      </div>
    </div>
  );
}

export default Header;
