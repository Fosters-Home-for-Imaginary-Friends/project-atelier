import React, { useState } from "react";

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
    <div>
      <label className="switch">
        <input type="checkbox"></input>
        <span className={`slider round ${checked}`} onClick={() => handleCheckedClick()}></span>
      </label>
    </div>
  );
}

export default ToggleSwitch;