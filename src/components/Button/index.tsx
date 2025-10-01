import React from "react";
import { useTranslation } from "react-i18next";
import { useButtonHooks } from "./buttonHooks";
import "./styles.scss";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  const { count, handleClick } = useButtonHooks();
  const { t } = useTranslation();

  return (
    <div className="btn-container">
      <button className="btn" onClick={handleClick}>
        {label}
      </button>
      <span className="btn-count">
        {t("button.count")} {count}
      </span>
    </div>
  );
};

export default Button;
