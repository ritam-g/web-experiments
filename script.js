//! ============================================
//! 🌟 START MENU TOGGLE LOGIC
//! ============================================

//! SELECTION PART: select the Windows button in the taskbar center
let windowBut = document.querySelector(".taskbar .center-area .icons #windowBut");

//! ALL LISTENERS: click and keyboard events for opening/closing Start Menu
windowBut.addEventListener("click", () => {
  let startMenu = document.querySelector(".start-menu");
  // Toggle 'clicking-effect' class to show/hide Start Menu
  startMenu.classList.toggle("clicking-effect");
});

// Keyboard event: toggle Start Menu when Meta (Windows) key is pressed
document.addEventListener("keydown", (key) => {
  // key.key === "Meta" corresponds to the Windows key
  if (key.key === "Meta") {
    let startMenu = document.querySelector(".start-menu");
    startMenu.classList.toggle("clicking-effect");
  }
});

//! ============================================
//! 🌟 CONTEXT MENU CREATION
//! ============================================

// Create the context menu container dynamically (hidden by default)
const contextMenu = document.createElement("div");
contextMenu.className =
  "fixed hidden bg-[#f3f3f3]/95 backdrop-blur-xl shadow-2xl rounded-xl border border-gray-300 w-64 py-2 z-50 select-none text-[15px] transition-all duration-150 ease-out transform scale-95 opacity-0";
document.body.appendChild(contextMenu);

//! ============================================
//! 🌟 HELPER FUNCTION: CREATE MENU ITEM
//! ============================================

/**
 * Creates a context menu item with an icon and hover effect
 * @param {string} text - Label of the menu item
 * @param {string} icon - URL of the icon image
 * @returns {HTMLElement} - The menu item element
 */
function createMenuItem(text, icon) {
  const item = document.createElement("div");
  item.className =
    "flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer transition-all duration-150 hover:bg-blue-500 hover:text-white";

  // Create icon element
  const iconEl = document.createElement("img");
  iconEl.src = icon;
  iconEl.className = "w-5 opacity-80 item-icon transition";
  item.appendChild(iconEl);

  // Create text label
  const label = document.createElement("span");
  label.textContent = text;
  item.appendChild(label);

  // Hover effect: change icon color to white when hovering
  item.addEventListener("mouseenter", () => {
    iconEl.style.filter = "brightness(0) invert(1)";
  });
  item.addEventListener("mouseleave", () => {
    iconEl.style.filter = "none";
  });

  return item;
}

//! ============================================
//! 🌟 HELPER FUNCTION: CREATE SEPARATOR
//! ============================================

/**
 * Creates a horizontal separator line for the context menu
 * @returns {HTMLElement} - The separator element
 */
function createSeparator() {
  const hr = document.createElement("div");
  hr.className = "my-2 h-px bg-gray-300/70";
  return hr;
}

//! ============================================
//! 🌟 ADD MENU ITEMS TO CONTEXT MENU
//! ============================================

// Add Refresh option
contextMenu.appendChild(
  createMenuItem("Refresh", "https://img.icons8.com/?size=512&id=59850&format=png")
);
contextMenu.appendChild(createSeparator());

// Add basic file options
contextMenu.appendChild(
  createMenuItem("Open", "https://img.icons8.com/?size=512&id=8113&format=png")
);
contextMenu.appendChild(
  createMenuItem("Open with", "https://img.icons8.com/?size=512&id=82713&format=png")
);
contextMenu.appendChild(createSeparator());

// Add desktop-related options
contextMenu.appendChild(
  createMenuItem("Set as desktop background", "https://img.icons8.com/?size=512&id=59804&format=png")
);
contextMenu.appendChild(
  createMenuItem("Copy", "https://img.icons8.com/?size=512&id=59802&format=png")
);
contextMenu.appendChild(createSeparator());

// Add properties option
contextMenu.appendChild(
  createMenuItem("Properties", "https://img.icons8.com/?size=512&id=82755&format=png")
);

//! ============================================
//! 🌟 RIGHT-CLICK EVENT: SHOW CONTEXT MENU
//! ============================================

document.addEventListener("contextmenu", (e) => {
  e.preventDefault(); // prevent default browser context menu

  // Position the menu at the cursor location
  contextMenu.style.left = `${e.clientX}px`;
  contextMenu.style.top = `${e.clientY}px`;

  // Animate menu: fade in and scale up
  contextMenu.classList.remove("hidden");
  setTimeout(() => {
    contextMenu.classList.remove("opacity-0", "scale-95");
    contextMenu.classList.add("opacity-100", "scale-100");
  }, 10);
});

//! ============================================
//! 🌟 CLICK ANYWHERE: HIDE CONTEXT MENU
//! ============================================

document.addEventListener("click", () => {
  // Animate menu: fade out and scale down
  contextMenu.classList.add("opacity-0", "scale-95");

  // Hide after animation
  setTimeout(() => {
    contextMenu.classList.add("hidden");
  }, 120);
});
