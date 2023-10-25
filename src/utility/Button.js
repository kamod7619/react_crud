import React from "react";

const Button = ({ Text, Class, Icon, Type, OnClick, Alt, ID }) => {
  const renderButtonContent = () => {
    // if text only
    if (!Icon) {
      return (
        <>
          <span className="button-text">{Text}</span>
        </>
      );
    }
    // if icon only
    else if (!Text) {
      return <>{Icon}</>;
    }
    // icon and text
    else {
      return (
        <>
          {Icon}
          <span className="button-text ml-point5">{Text}</span>
        </>
      );
    }
  };

  return (
    <button className={Class} type={Type} onClick={OnClick} alt={Alt} id={ID}>
      {renderButtonContent()}
    </button>
  );
};

export default Button;