const doanvan = document.getElementById("doanvan");
const nut1 = document.getElementById("nut1");
const nut2 = document.getElementById("nut2");

nut1.addEventListener("click", () => {
    console.log("click");
    doanvan.style.display = 'none';
});

nut2.addEventListener("click", () => {
    console.log("click");
    doanvan.style.display = 'block';
})