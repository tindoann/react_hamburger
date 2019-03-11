import React from "react";

export const MenuText = ({ isOpen }) => {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div className={!isOpen ? "menu-text--active" : "menu-text--inactive"}>
        メニュー
      </div>
      <div className={isOpen ? "menu-text--active" : "menu-text--inactive"}>
        閉じる
      </div>
    </div>
  );
};
