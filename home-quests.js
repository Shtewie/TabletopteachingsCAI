// Renders a homepage teaser of the first 3 campaigns from ADVENTURES
// (see js/adventures-data.js) into #home-quests-grid. Reuses the same
// campaign-card / tone-quest-* styles as the /adventures/ page, so it
// stays visually consistent automatically and needs no separate content
// to maintain — edit adventures-data.js and this updates too.
(function () {
  const gridEl = document.getElementById("home-quests-grid");
  if (!gridEl || typeof ADVENTURES === "undefined") return;

  function esc(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  const featured = ADVENTURES.slice(0, 3);

  gridEl.innerHTML = featured
    .map(
      (a) => `
      <a href="adventures/" class="campaign-card tone-${a.tone}">
        <span class="campaign-tag" style="background-color: var(--${a.tone});">${esc(a.sessions)}</span>
        <h2 style="color: color-mix(in oklab, var(--${a.tone}) 78%, black);">${esc(a.name)}</h2>
        <p>${esc(a.tagline)}</p>
      </a>`
    )
    .join("");
})();
