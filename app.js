"use strict";

const up = document.querySelector(".arrow");

up.addEventListener("click", () => {
  document.body.scrollTop = 0;
  console.log("works");
  document.documentElement.scrollTop = 0;
});
