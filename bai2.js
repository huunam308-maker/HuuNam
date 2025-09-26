const nut1 = document.getElementById("nut1");
const nut2 = document.getElementById("nut2");
const nut3 = document.getElementById("nut3");
const box = document.querySelector(".box");
nut1.addEventListener("click", () => {
    console.log("click");
    box.style.backgroundColor = "red";
});

nut2.addEventListener("click", () => {
    console.log("click");
    box.style.backgroundColor = "green";
});

nut3.addEventListener("click", () => {
    console.log("click");
    box.style.backgroundColor = "yellow";
});