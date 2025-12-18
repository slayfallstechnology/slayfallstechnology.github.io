// Tabs (Policy)
const tabs = document.querySelectorAll(".tab");
const summary = document.getElementById("tab-summary");
const full = document.getElementById("tab-full");

tabs.forEach(t => t.addEventListener("click", () => {
  tabs.forEach(x => x.setAttribute("aria-selected", "false"));
  t.setAttribute("aria-selected", "true");

  const which = t.dataset.tab;
  summary.classList.toggle("hidden", which !== "summary");
  full.classList.toggle("hidden", which !== "full");
}));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Demo form handler
const form = document.getElementById("serviceForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Replace this section with:
  // - POST to serverless endpoint, or
  // - Google Form submit, etc.
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 5200);

  form.reset();
  window.location.hash = "#request";
});
