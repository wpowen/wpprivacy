(function () {
  const siteData = window.lifeScriptSoloLegalPages;
  if (!siteData) return;

  const storageKey = "lifescript-solo-legal-language";
  const supportedCodes = siteData.languages.map((item) => item.code);
  const page = document.body.dataset.page || "home";

  function normalizeLanguage(input) {
    if (!input) return null;
    const lowered = input.toLowerCase();

    if (lowered.startsWith("zh")) return "zh-Hans";
    if (lowered.startsWith("en")) return "en";
    if (lowered.startsWith("ja")) return "ja";
    if (lowered.startsWith("ko")) return "ko";

    return supportedCodes.includes(input) ? input : null;
  }

  function resolveLanguage() {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = normalizeLanguage(params.get("lang"));
    if (fromQuery) return fromQuery;

    const fromStorage = normalizeLanguage(window.localStorage.getItem(storageKey));
    if (fromStorage) return fromStorage;

    const fromBrowser = normalizeLanguage(navigator.language || "");
    return fromBrowser || "zh-Hans";
  }

  function withLanguage(path, language) {
    const url = new URL(path, window.location.href);
    url.searchParams.set("lang", language);

    const file = url.pathname.split("/").pop();
    const query = url.searchParams.toString();
    const hash = url.hash || "";
    return `${file}${query ? `?${query}` : ""}${hash}`;
  }

  function isExternalHref(href) {
    return /^(mailto:|https?:|tel:)/i.test(href);
  }

  function localizedHref(href, language) {
    return isExternalHref(href) ? href : withLanguage(href, language);
  }

  function renderPillStrip(items) {
    const filtered = (items || []).filter(Boolean);
    if (!filtered.length) return "";

    return `
      <div class="hero-strip">
        ${filtered.map((item) => `<span>${item}</span>`).join("")}
      </div>
    `;
  }

  function renderAction(action, language) {
    if (action.scrollTarget) {
      return `
        <button
          type="button"
          class="cta-link ${action.variant === "primary" ? "primary" : "secondary"} js-scroll-action"
          data-scroll-target="${action.scrollTarget}"
        >
          ${action.label}
        </button>
      `;
    }

    return `
      <a class="cta-link ${action.variant === "primary" ? "primary" : "secondary"}" href="${localizedHref(action.href, language)}">
        ${action.label}
      </a>
    `;
  }

  function renderLinks(links, language) {
    if (!links || !links.length) return "";
    return `
      <div class="meta-row">
        ${links.map((link) => `<a class="inline-link" href="${localizedHref(link.href, language)}">${link.label}</a>`).join("")}
      </div>
    `;
  }

  function renderCards(cards, language, translation) {
    return cards.map((card) => {
      const content = `
        ${card.kicker ? `<p class="section-kicker">${card.kicker}</p>` : ""}
        <h2>${card.title}</h2>
        <p>${card.body}</p>
        ${card.href ? `<span class="card-link">${card.linkLabel || translation.common.openPage || "Open"}</span>` : ""}
      `;

      if (card.href) {
        return `
          <a class="grid-card highlight-${card.accent || "jade"}" href="${localizedHref(card.href, language)}">
            ${content}
          </a>
        `;
      }

      return `
        <article class="grid-card highlight-${card.accent || "jade"}">
          ${content}
        </article>
      `;
    }).join("");
  }

  function renderSections(sections, language) {
    return sections.map((section) => `
      <article class="section-card highlight-${section.accent}">
        ${section.kicker ? `<p class="section-kicker">${section.kicker}</p>` : ""}
        <h2>${section.title}</h2>
        <p>${section.body}</p>
        ${section.bullets && section.bullets.length ? `<ul>${section.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>` : ""}
        ${renderLinks(section.links, language)}
      </article>
    `).join("");
  }

  function renderLanguageSwitcher(language, translation) {
    return `
      <div class="language-switcher" role="group" aria-label="${translation.languageLabel}">
        ${siteData.languages.map((item) => `
          <button
            type="button"
            class="chip-button"
            data-language="${item.code}"
            aria-pressed="${item.code === language ? "true" : "false"}"
          >
            ${item.label}
          </button>
        `).join("")}
      </div>
    `;
  }

  function renderNavigation(translation, language) {
    const items = [
      ["home", "index.html"],
      ["privacy", "privacy.html"],
      ["support", "support.html"],
      ["contact", "contact.html"],
      ["contentRating", "content-rating.html"],
      ["terms", "terms.html"]
    ];

    return items.map(([key, href]) => `
      <a class="nav-link ${page === key ? "active" : ""}" href="${withLanguage(href, language)}">
        ${translation.nav[key]}
      </a>
    `).join("");
  }

  function renderStatList(stats) {
    return (stats || []).map((item) => `
      <article class="stat-card">
        <p class="stat-value">${item.value}</p>
        <p class="stat-label">${item.label}</p>
      </article>
    `).join("");
  }

  function renderFeatureButtons(features) {
    return features.map((feature, index) => `
      <button
        type="button"
        class="feature-tab ${index === 0 ? "active" : ""}"
        data-feature-index="${index}"
        aria-pressed="${index === 0 ? "true" : "false"}"
      >
        <span>${feature.name}</span>
        <small>${feature.mini}</small>
      </button>
    `).join("");
  }

  function renderPreviewRoute(feature) {
    return `
      <div class="preview-route" data-preview-route>
        ${(feature.previewRoute || []).map((item) => `<span>${item}</span>`).join("")}
      </div>
    `;
  }

  function renderPreviewPills(feature) {
    return `
      <div class="preview-pill-row" data-preview-pills>
        ${(feature.previewPills || []).map((item) => `<span>${item}</span>`).join("")}
      </div>
    `;
  }

  function renderFeatureDetail(feature) {
    return `
      <article class="feature-panel">
        <p class="section-kicker" data-feature-label>${feature.name}</p>
        <h3 data-feature-title>${feature.title}</h3>
        <p class="feature-body" data-feature-body>${feature.body}</p>
        <ul class="feature-list" data-feature-bullets>
          ${(feature.bullets || []).map((bullet) => `<li>${bullet}</li>`).join("")}
        </ul>
        <p class="feature-quote" data-feature-quote>${feature.quote}</p>
      </article>
    `;
  }

  function renderJourneySteps(steps) {
    return (steps || []).map((step, index) => `
      <article class="journey-step highlight-${step.accent || "jade"}">
        <div class="journey-index">${String(index + 1).padStart(2, "0")}</div>
        <p class="section-kicker">${step.kicker}</p>
        <h3>${step.title}</h3>
        <p>${step.body}</p>
      </article>
    `).join("");
  }

  function renderHomeLanding(currentPage, language, translation) {
    const features = currentPage.showcase.features;
    const firstFeature = features[0];

    return `
      <section class="home-hero reveal-on-scroll is-visible">
        <div class="home-hero-grid">
          <div class="home-hero-copy">
            <div class="hero-intro">
              <p class="eyebrow home-eyebrow">${currentPage.heroKicker}</p>
              <h1 class="home-title">${currentPage.heroTitle}</h1>
            </div>
            <p class="home-summary">${currentPage.heroSummary}</p>
            ${renderPillStrip(currentPage.heroTags)}
            <div class="hero-actions">
              ${(currentPage.heroActions || []).map((action) => renderAction(action, language)).join("")}
            </div>
            <div class="hero-stats">
              ${renderStatList(currentPage.heroStats || [])}
            </div>
          </div>

          <div class="home-hero-visual">
            <div class="mockup-stage" data-tilt>
              <div class="ambient-orb orb-a"></div>
              <div class="ambient-orb orb-b"></div>
              <div class="ambient-orb orb-c"></div>
              <div class="floating-sigil sigil-a">命</div>
              <div class="floating-sigil sigil-b">局</div>
              <div class="floating-sigil sigil-c">心</div>

              <div class="device-shell">
                <div class="device-screen">
                  <div class="screen-topline">
                    <span>${translation.brandTitle}</span>
                    <span class="screen-badge" data-preview-badge>${firstFeature.previewBadge}</span>
                  </div>
                  ${renderPreviewRoute(firstFeature)}
                  <div class="screen-copy">
                    <p class="section-kicker">${currentPage.showcase.previewKicker}</p>
                    <h2 data-preview-title>${firstFeature.previewTitle}</h2>
                    <p data-preview-summary>${firstFeature.previewSummary}</p>
                  </div>
                  ${renderPreviewPills(firstFeature)}
                </div>
              </div>
            </div>

            <aside class="hero-note hero-note-dark">
              <p class="note-title">${currentPage.noteTitle}</p>
              <p class="note-copy">${currentPage.noteBody}</p>
              ${renderPillStrip([
                translation.common.appReviewReady,
                translation.common.userFacing,
                translation.common.multiLanguage
              ])}
              <p class="note-copy">${translation.common.lastUpdated}</p>
            </aside>
          </div>
        </div>
      </section>

      <section id="showcase" class="home-section reveal-on-scroll">
        <div class="section-head">
          <p class="eyebrow">${currentPage.showcase.eyebrow}</p>
          <h2 class="home-section-title">${currentPage.showcase.title}</h2>
          <p class="home-section-summary">${currentPage.showcase.summary}</p>
        </div>

        <div class="showcase-grid">
          <div class="feature-switcher">
            ${renderFeatureButtons(features)}
          </div>
          ${renderFeatureDetail(firstFeature)}
        </div>
      </section>

      <section class="home-section reveal-on-scroll">
        <div class="section-head">
          <p class="eyebrow">${currentPage.journey.eyebrow}</p>
          <h2 class="home-section-title">${currentPage.journey.title}</h2>
          <p class="home-section-summary">${currentPage.journey.summary}</p>
        </div>

        <div class="journey-grid">
          ${renderJourneySteps(currentPage.journey.steps)}
        </div>
      </section>

      <section id="information" class="home-section reveal-on-scroll">
        <div class="section-head">
          <p class="eyebrow">${currentPage.portal.eyebrow}</p>
          <h2 class="home-section-title">${currentPage.portal.title}</h2>
          <p class="home-section-summary">${currentPage.portal.summary}</p>
        </div>

        <div class="content-grid home-portal-grid">
          ${renderCards(currentPage.cards, language, translation)}
        </div>
      </section>
    `;
  }

  function setFeaturePreview(container, feature) {
    const title = container.querySelector("[data-preview-title]");
    const summary = container.querySelector("[data-preview-summary]");
    const badge = container.querySelector("[data-preview-badge]");
    const route = container.querySelector("[data-preview-route]");
    const pills = container.querySelector("[data-preview-pills]");
    const label = container.querySelector("[data-feature-label]");
    const featureTitle = container.querySelector("[data-feature-title]");
    const featureBody = container.querySelector("[data-feature-body]");
    const featureBullets = container.querySelector("[data-feature-bullets]");
    const featureQuote = container.querySelector("[data-feature-quote]");

    if (title) title.textContent = feature.previewTitle;
    if (summary) summary.textContent = feature.previewSummary;
    if (badge) badge.textContent = feature.previewBadge;
    if (route) route.innerHTML = (feature.previewRoute || []).map((item) => `<span>${item}</span>`).join("");
    if (pills) pills.innerHTML = (feature.previewPills || []).map((item) => `<span>${item}</span>`).join("");
    if (label) label.textContent = feature.name;
    if (featureTitle) featureTitle.textContent = feature.title;
    if (featureBody) featureBody.textContent = feature.body;
    if (featureBullets) featureBullets.innerHTML = (feature.bullets || []).map((bullet) => `<li>${bullet}</li>`).join("");
    if (featureQuote) featureQuote.textContent = feature.quote;
  }

  function initHomeInteractions(container, currentPage) {
    const features = currentPage.showcase.features || [];
    const tabs = Array.from(container.querySelectorAll("[data-feature-index]"));

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const index = Number(tab.getAttribute("data-feature-index"));
        const feature = features[index];
        if (!feature) return;

        tabs.forEach((button, buttonIndex) => {
          const active = buttonIndex === index;
          button.classList.toggle("active", active);
          button.setAttribute("aria-pressed", active ? "true" : "false");
        });

        setFeaturePreview(container, feature);
      });
    });

    const stage = container.querySelector("[data-tilt]");
    if (stage && window.matchMedia("(pointer:fine)").matches) {
      stage.addEventListener("mousemove", (event) => {
        const bounds = stage.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width) - 0.5;
        const y = ((event.clientY - bounds.top) / bounds.height) - 0.5;
        stage.style.setProperty("--tilt-x", `${x * 10}deg`);
        stage.style.setProperty("--tilt-y", `${y * -10}deg`);
      });

      stage.addEventListener("mouseleave", () => {
        stage.style.setProperty("--tilt-x", "0deg");
        stage.style.setProperty("--tilt-y", "0deg");
      });
    }
  }

  function initReveal(container) {
    const items = Array.from(container.querySelectorAll(".reveal-on-scroll"));
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.16 });

    items.forEach((item) => observer.observe(item));
  }

  function initCommonInteractions(container) {
    container.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => {
        const nextLanguage = button.getAttribute("data-language");
        if (!nextLanguage) return;

        window.localStorage.setItem(storageKey, nextLanguage);
        const nextUrl = new URL(window.location.href);
        nextUrl.searchParams.set("lang", nextLanguage);
        window.history.replaceState({}, "", nextUrl.toString());

        const nextTranslation = siteData.translations[nextLanguage] || siteData.translations["zh-Hans"];
        renderDocument(nextTranslation, nextLanguage);
      });
    });

    container.querySelectorAll("[data-scroll-target]").forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-scroll-target");
        const node = target ? container.querySelector(`#${target}`) : null;
        if (!node) return;
        node.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    initReveal(container);
  }

  function renderDocument(translation, language) {
    const currentPage = translation.pages[page];

    document.documentElement.lang = language;
    document.body.classList.toggle("is-home", page === "home");
    document.title = currentPage.title === translation.brandTitle
      ? currentPage.title
      : `${currentPage.title} · ${translation.brandTitle}`;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.setAttribute("content", currentPage.description);

    const content = page === "home"
      ? renderHomeLanding(currentPage, language, translation)
      : `
        <section class="hero">
          <div class="hero-grid">
            <div class="hero-copy">
              <div>
                <p class="eyebrow">${currentPage.heroKicker}</p>
                <h1 class="hero-title">${currentPage.heroTitle}</h1>
              </div>
              <p class="hero-summary">${currentPage.heroSummary}</p>
              ${renderPillStrip(currentPage.heroTags)}
              ${(currentPage.heroActions || []).length ? `
                <div class="hero-actions">
                  ${(currentPage.heroActions || []).map((action) => renderAction(action, language)).join("")}
                </div>
              ` : ""}
            </div>

            <aside class="hero-note">
              <p class="note-title">${currentPage.noteTitle}</p>
              <p class="note-copy">${currentPage.noteBody}</p>
              ${renderPillStrip([
                translation.common.appReviewReady,
                translation.common.userFacing,
                translation.common.multiLanguage
              ])}
              <p class="note-copy">${translation.common.lastUpdated}</p>
            </aside>
          </div>
        </section>

        <section class="legal-grid">
          ${renderSections(currentPage.sections, language)}
        </section>
      `;

    const container = document.getElementById("app");
    container.innerHTML = `
      <div class="page-frame ${page === "home" ? "home-frame" : ""}">
        <header class="topbar">
          <div class="brand-block">
            <div class="brand-mark">天</div>
            <div class="brand-copy">
              <p class="eyebrow">${translation.brandEyebrow}</p>
              <p class="brand-title">${translation.brandTitle}</p>
            </div>
          </div>
          <div class="toolbar">
            ${renderLanguageSwitcher(language, translation)}
            <nav class="nav-links" aria-label="${translation.navigationLabel || translation.languageLabel}">
              ${renderNavigation(translation, language)}
            </nav>
          </div>
        </header>

        ${content}

        <footer class="footer">
          <p class="note-title">${translation.footerTitle}</p>
          <p>${translation.footerBody}</p>
          <p>${translation.common.languageNotice}</p>
        </footer>
      </div>
    `;

    initCommonInteractions(container);
    if (page === "home") initHomeInteractions(container, currentPage);
  }

  const language = resolveLanguage();
  const translation = siteData.translations[language] || siteData.translations["zh-Hans"];
  renderDocument(translation, language);
})();
