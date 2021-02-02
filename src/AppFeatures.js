import React from "react";
import "./AppFeatures.css";

function AppFeatures({ Icon, header, subheader }) {
  return (
    <div className="features">
      {Icon && <Icon />}
      <span className="features__header">{header}</span>
      <span className="features__subheader">{subheader}</span>
    </div>
  );
}

export default AppFeatures;
