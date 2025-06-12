function enhanceTables() {
  document.querySelectorAll("table").forEach(table => {
    if (table.classList.contains("popup-enhanced")) return; // prevent double binding
    table.classList.add("popup-enhanced");
    table.style.cursor = "zoom-in";

    table.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100vw";
      overlay.style.height = "100vh";
      overlay.style.background = "rgba(0,0,0,0.8)";
      overlay.style.zIndex = "9999";
      overlay.style.display = "flex";
      overlay.style.justifyContent = "center";
      overlay.style.alignItems = "center";
      overlay.style.cursor = "zoom-out";

      const clone = table.cloneNode(true);
      clone.style.maxHeight = "90vh";
      clone.style.overflow = "auto";
      clone.style.background = "white";
      clone.style.padding = "1rem";
      clone.style.border = "1px solid #ccc";
      clone.style.borderRadius = "4px";

      overlay.appendChild(clone);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => overlay.remove());
    });
  });
}

// Initial run
document.addEventListener("DOMContentLoaded", enhanceTables);

// Re-run after instant navigation
if (window.MkDocsMaterial) {
  window.MkDocsMaterial.init(() => {
    enhanceTables();
  });
}
