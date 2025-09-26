const nut = document.getElementById("nut");
const danhsach = document.getElementById("danhsach");

nut.addEventListener("click", () => {
  console.log("click");
  const li = document.createElement("li");
  li.textContent = "New item";
  danhsach.appendChild(li);
});
