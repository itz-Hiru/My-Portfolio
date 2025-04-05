import React from "react";
import "./Scrollup.component.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });

  return (
    <a href="#" className="scrollup">
      <i className="bx bxs-arrow-from-bottom scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
