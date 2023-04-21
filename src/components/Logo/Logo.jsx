import React from "react";

export const Logo = ({ logoSrc = "/images/logo.svg", className }) => {
  return (
    <div className={`logo ${className}`}>
      <img src={logoSrc} alt="Logo" />
    </div>
  );
};
