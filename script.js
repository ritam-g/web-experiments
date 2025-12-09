let allSection = document.querySelectorAll("main section");

allSection.forEach(section => {
  let img = section.querySelector("img");

  section.addEventListener("mouseenter", () => {
    img.style.display = "block";
    img.style.cursor="pointer"
  });

  section.addEventListener("mousemove", (e) => {
    img.style.left = `${e.clientX + 20}px`;
  });

  section.addEventListener("mouseleave", () => {
    img.style.display = "none";
  });
});
function call(a) {
  if (a) {
    console.log("hacker is acessing");
    
  } else {
    console.log("from script call");
    
  }
}