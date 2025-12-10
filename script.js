//! SELECTION PART 
let windowBut=document.querySelector(".taskbar .center-area .icons #windowBut")
//! ALL LISTNER 
windowBut.addEventListener("click",()=>{
  let startMenu=document.querySelector(".start-menu")
   startMenu.classList.toggle('clicking-effect');
  
})
document.addEventListener("keydown",(key)=>{
  // console.dir(key.key) !//* INFO  key=Meta
  

  if (key.key==="Meta") {
    // console.log(startMenu);
    let startMenu=document.querySelector(".start-menu")
    startMenu.classList.toggle('clicking-effect');
    
  }
})
// ----------------------------------------------------
// 🌟 CREATE CONTEXT MENU WRAPPER
// ----------------------------------------------------
const contextMenu = document.createElement("div");
contextMenu.className =
  "fixed hidden bg-[#f3f3f3]/95 backdrop-blur-xl shadow-2xl rounded-xl border border-gray-300 w-64 py-2 z-50 select-none text-[15px] transition-all duration-150 ease-out transform scale-95 opacity-0";
document.body.appendChild(contextMenu);

// ----------------------------------------------------
// 🌟 HELPER: CREATE MENU ITEM (with icon + hover)
// ----------------------------------------------------
function createMenuItem(text, icon) {
  const item = document.createElement("div");
  item.className =
    "flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer transition-all duration-150 hover:bg-blue-500 hover:text-white";

  // icon
  const iconEl = document.createElement("img");
  iconEl.src = icon;
  iconEl.className = "w-5 opacity-80 item-icon transition";
  item.appendChild(iconEl);

  // text
  const label = document.createElement("span");
  label.textContent = text;
  item.appendChild(label);

  // on hover, change icon color (white filter)
  item.addEventListener("mouseenter", () => {
    iconEl.style.filter = "brightness(0) invert(1)";
  });
  item.addEventListener("mouseleave", () => {
    iconEl.style.filter = "none";
  });

  return item;
}

// ----------------------------------------------------
// 🌟 SEPARATOR
// ----------------------------------------------------
function createSeparator() {
  const hr = document.createElement("div");
  hr.className = "my-2 h-px bg-gray-300/70";
  return hr;
}

// ----------------------------------------------------
// 🌟 ADD MENU ITEMS
// ----------------------------------------------------
contextMenu.appendChild(
  createMenuItem("Refresh", "https://img.icons8.com/?size=512&id=59850&format=png")
);

contextMenu.appendChild(createSeparator());

contextMenu.appendChild(
  createMenuItem("Open", "https://img.icons8.com/?size=512&id=8113&format=png")
);
contextMenu.appendChild(
  createMenuItem("Open with", "https://img.icons8.com/?size=512&id=82713&format=png")
);

contextMenu.appendChild(createSeparator());

contextMenu.appendChild(
  createMenuItem("Set as desktop background", "https://img.icons8.com/?size=512&id=59804&format=png")
);
contextMenu.appendChild(
  createMenuItem("Copy", "https://img.icons8.com/?size=512&id=59802&format=png")
);

contextMenu.appendChild(createSeparator());

contextMenu.appendChild(
  createMenuItem("Properties", "https://img.icons8.com/?size=512&id=82755&format=png")
);

// ----------------------------------------------------
// 🌟 RIGHT-CLICK SHOW MENU
// ----------------------------------------------------
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  contextMenu.style.left = `${e.clientX}px`;
  contextMenu.style.top = `${e.clientY}px`;

  // animate (fade + scale)
  contextMenu.classList.remove("hidden");
  setTimeout(() => {
    contextMenu.classList.remove("opacity-0", "scale-95");
    contextMenu.classList.add("opacity-100", "scale-100");
  }, 10);
});

// ----------------------------------------------------
// 🌟 CLICK ANYWHERE → HIDE MENU
// ----------------------------------------------------
document.addEventListener("click", () => {
  contextMenu.classList.add("opacity-0", "scale-95");

  setTimeout(() => {
    contextMenu.classList.add("hidden");
  }, 120);
});
