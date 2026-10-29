/**
 * PUZDEV — site behavior.
 *
 * PLACEHOLDER: App Store and Google Play links.
 * Leave a value as an empty string until you have the exact, verified https URL.
 * Do not guess a listing address. Empty, http, and invalid values stay hidden.
 * The rest of the site works without this script.
 *
 * Example, after a listing is verified:
 *   godFocus: {
 *     appStore: "https://...",
 *     googlePlay: ""
 *   }
 */
const APP_LINKS = {
  godFocus: {
    appStore: "",
    googlePlay: ""
  },
  roamxp: {
    appStore: "",
    googlePlay: ""
  }
};

(function () {
  "use strict";

  function isHttpsUrl(value) {
    if (typeof value !== "string") return false;
    try {
      const url = new URL(value.trim());
      return url.protocol === "https:" && url.hostname !== "" && url.username === "" && url.password === "";
    } catch (error) {
      return false;
    }
  }

  function isValidEntry(entry) {
    return Boolean(entry)
      && typeof entry.label === "string"
      && entry.label.trim() !== ""
      && entry.label.trim().length <= 40
      && isHttpsUrl(entry.url);
  }

  function createLink(entry) {
    const link = document.createElement("a");
    link.className = "store-link";
    link.href = entry.url.trim();
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.appendChild(document.createTextNode(entry.label.trim()));

    const hint = document.createElement("span");
    hint.className = "visually-hidden";
    hint.textContent = " (opens in a new tab)";
    link.appendChild(hint);
    return link;
  }

  function storeEntries(config) {
    const fields = [
      ["appStore", "App Store"],
      ["googlePlay", "Google Play"]
    ];
    if (!config || Array.isArray(config) || typeof config !== "object") return [];
    return fields.map(function (field) {
      return { label: field[1], url: config[field[0]] };
    }).filter(isValidEntry);
  }

  document.querySelectorAll(".store-links").forEach(function (block) {
    const key = block.getAttribute("data-app");
    const entries = storeEntries(APP_LINKS[key]);
    const note = block.querySelector(".store-note");
    if (!entries.length) return;

    const list = document.createElement("ul");
    list.className = "store-list";
    entries.forEach(function (entry) {
      const item = document.createElement("li");
      item.appendChild(createLink(entry));
      list.appendChild(item);
    });
    block.appendChild(list);
    if (note) note.hidden = true;
  });
})();
