(() => {
  const intro = document.querySelector("[data-intro]");
  if (!intro) return;

  requestAnimationFrame(() => intro.classList.add("is-ready"));

  const cue = intro.querySelector(".intro-scroll");
  const destination = document.querySelector("#collection-intro");
  cue?.addEventListener("click", (event) => {
    if (!destination) return;
    event.preventDefault();
    destination.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start"
    });
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let ticking = false;
  const update = () => {
    const progress = Math.min(Math.max(window.scrollY / Math.max(intro.offsetHeight, 1), 0), 1);
    intro.style.setProperty("--intro-progress", progress.toFixed(3));
    intro.classList.toggle("has-scrolled", progress > 0.08);
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  update();
})();
