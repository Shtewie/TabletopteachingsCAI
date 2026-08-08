// Renders the campaign switcher + panel from ADVENTURES (see adventures-data.js)
// and wires up the campaign / tab switching. No build step, no framework.

(function () {
  const TABS = ["World Log", "Characters", "Learning"];

  const switcherEl = document.getElementById("campaign-switcher");
  const panelEl = document.getElementById("campaign-panel");

  let activeSlug = ADVENTURES[0].slug;
  let activeTab = TABS[0];

  function esc(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function renderSwitcher() {
    switcherEl.innerHTML = ADVENTURES.map((a) => {
      const selected = a.slug === activeSlug;
      const borderStyle = selected
        ? `border-color: var(--${a.tone}); box-shadow: 0 6px 0 0 var(--${a.tone});`
        : "";
      return `
        <button type="button" class="campaign-card tone-${a.tone} ${selected ? "is-active" : ""}"
          data-slug="${a.slug}" aria-pressed="${selected}" style="${borderStyle}">
          <span class="campaign-tag" style="background-color: var(--${a.tone});">${esc(a.sessions)}</span>
          <h2 style="color: color-mix(in oklab, var(--${a.tone}) 78%, black);">${esc(a.name)}</h2>
          <p>${esc(a.tagline)}</p>
        </button>`;
    }).join("");

    switcherEl.querySelectorAll(".campaign-card").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeSlug = btn.dataset.slug;
        activeTab = TABS[0];
        renderSwitcher();
        renderPanel();
      });
    });
  }

  function renderTabs(adv) {
    return `
      <div class="tab-list" role="tablist">
        ${TABS.map((t) => {
          const selected = t === activeTab;
          const style = selected ? `background-color: var(--${adv.tone});` : "";
          return `<button type="button" class="tab-btn ${selected ? "is-active" : ""}" style="${style}" data-tab="${t}" aria-pressed="${selected}">${t}</button>`;
        }).join("")}
      </div>`;
  }

  function renderWorldLog(adv) {
    const items = adv.world
      .map((entry, i) => {
        const latest = i === adv.world.length - 1;
        return `
          <li class="${latest ? "is-latest" : ""}" style="--current-tone: var(--${adv.tone});">
            <p class="timeline-session">${esc(entry.session)}</p>
            <h3>${esc(entry.title)}</h3>
            <p>${esc(entry.body)}</p>
          </li>`;
      })
      .join("");
    return `<ol class="timeline">${items}</ol>`;
  }

  function renderCharacters(adv) {
    const cards = adv.characters
      .map(
        (c) => `
        <article class="character-card" style="background-color: var(--${adv.tone}-soft); border-color: color-mix(in oklab, var(--${adv.tone}) 30%, white);">
          <h3>${esc(c.name)}</h3>
          <p class="character-role">${esc(c.role)} · ${esc(c.player)}</p>
          <p class="character-note">${esc(c.note)}</p>
        </article>`
      )
      .join("");
    return `<div class="characters-grid">${cards}</div>`;
  }

  function renderLearning(adv) {
    const done = adv.objectives.filter((o) => o.done).length;
    const pct = Math.round((done / adv.objectives.length) * 100);

    const items = adv.objectives
      .map((o) => {
        const skillTone = SKILL_TONE[o.skill];
        return `
          <li class="objective ${o.done ? "is-done" : ""}">
            <span class="objective-check" style="background-color: ${o.done ? `var(--${skillTone})` : "transparent"}; border-color: var(--${skillTone});">
              ${o.done ? "✓" : ""}
            </span>
            <span class="objective-label">${esc(o.label)}</span>
            <span class="skill-tag" style="background-color: var(--${skillTone}-soft); color: color-mix(in oklab, var(--${skillTone}) 78%, black);">${esc(o.skill)}</span>
          </li>`;
      })
      .join("");

    return `
      <div>
        <div class="progress-header">
          <p>${done} of ${adv.objectives.length} objectives completed</p>
          <span class="progress-pct">${pct}%</span>
        </div>
        <div class="progress-track" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="${esc(adv.name)} learning progress" style="--current-tone: var(--${adv.tone});">
          <div class="progress-fill" style="width: ${pct}%;"></div>
        </div>
        <ul class="objectives-list">${items}</ul>
        <p class="objectives-note">Every player also receives their own personalised learning record — this board is the party-wide view.</p>
      </div>`;
  }

  function renderPanel() {
    const adv = ADVENTURES.find((a) => a.slug === activeSlug);
    let body = "";
    if (activeTab === "World Log") body = renderWorldLog(adv);
    if (activeTab === "Characters") body = renderCharacters(adv);
    if (activeTab === "Learning") body = renderLearning(adv);

    panelEl.className = "campaign-panel";
    panelEl.style.borderColor = `color-mix(in oklab, var(--${adv.tone}) 35%, white)`;
    panelEl.innerHTML = `
      <p class="campaign-eyebrow">${esc(adv.group)}</p>
      <h2 style="color: color-mix(in oklab, var(--${adv.tone}) 78%, black);">${esc(adv.name)}</h2>
      <p class="campaign-blurb">${esc(adv.blurb)}</p>
      ${renderTabs(adv)}
      <div class="tab-panel is-active">${body}</div>
    `;

    panelEl.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeTab = btn.dataset.tab;
        renderPanel();
      });
    });
  }

  renderSwitcher();
  renderPanel();
})();
