const up = document.querySelector(".up");


up.addEventListener("click", () => {
    document.body.scrollTop = 0;
    console.log("works");
    document.documentElement.scrollTop = 0;

});

