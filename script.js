(function () {
  const toggle = document.getElementById("theme-toggle");
  const icon = toggle?.querySelector("i");
  const stored = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (icon) {
      icon.className = theme === "light" ? "fas fa-moon" : "fas fa-sun";
    }
    localStorage.setItem("theme", theme);
  }

  applyTheme(stored || (prefersLight ? "light" : "dark"));

  toggle?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "light" ? "dark" : "light");
  });
})();
