import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Darkmode = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    if (!document.body.classList.contains("dark-mode")) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  const [Status, setStatus] = useState(false);

  return (
    <div className="dark-mode">
      <Dark_mode onClick={handleToggle}>
        <span className="mon-sun">
          <img src="../images/sun.svg" alt="sun icon" />
        </span>
        <span className="moon-dark">
          <img src="../images/moon.svg" alt="moon icon" />
        </span>
      </Dark_mode>
    </div>
  );
};

const Dark_mode = styled.div`
  margin-right: 10px;
  font-size: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    line-height: 18px;
  }
  img {
    width: 20px;
    height: 20px;
    margin-bottom: 2px;
  }
`;

export default Darkmode;
