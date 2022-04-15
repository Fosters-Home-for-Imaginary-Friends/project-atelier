import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ToggleSwitch = () => {

  const [checked, setChecked] = useState(false);

  const handleCheckedClick = () => {
    if (!checked) {
      document.body.classList.remove('light-mode')
      document.body.classList.add('dark-mode')
      setChecked(true);
    } else {
      document.body.classList.add('light-mode')
      document.body.classList.remove('dark-mode')
      setChecked(false);
    }
  }

  return (
    <div className="mode-switch-container">
      <FaSun className="sun-toggle"/>
      <label className="switch">
        <input type="checkbox"></input>
        <span className={`slider round ${checked}`} onClick={() => handleCheckedClick()}></span>
      </label>
      <FaMoon className="moon-toggle"/>
    </div>
  );
}

export default ToggleSwitch;