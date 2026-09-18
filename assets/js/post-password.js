(function () {
  "use strict";

  const gate = document.querySelector("[data-password-gate]");
  if (!gate) return;

  const expectedHash = (gate.dataset.passwordHash || "").trim().toLowerCase();
  const pageKey = gate.dataset.passwordKey || window.location.pathname;
  const storageKey = `post-password:${pageKey}`;
  const protectedSections = document.querySelectorAll("[data-password-content]");
  const form = gate.querySelector("[data-password-form]");
  const input = gate.querySelector("[data-password-input]");
  const submitButton = gate.querySelector("[data-password-submit]");
  const visibilityButton = gate.querySelector("[data-password-visibility]");
  const status = gate.querySelector("[data-password-status]");

  function getStoredHash() {
    try {
      return window.sessionStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function storeHash(hash) {
    try {
      window.sessionStorage.setItem(storageKey, hash);
    } catch (error) {
      // Storage can be disabled by browser privacy settings; unlocking still works.
    }
  }

  function revealArticle() {
    protectedSections.forEach((section) => section.removeAttribute("hidden"));
    gate.setAttribute("hidden", "");
    document.body.classList.add("post-password-unlocked");
    window.dispatchEvent(new Event("resize"));
  }

  async function sha256(value) {
    if (!window.crypto || !window.crypto.subtle || !window.TextEncoder) {
      throw new Error("unsupported-browser");
    }

    const bytes = new TextEncoder().encode(value);
    const digest = await window.crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  if (expectedHash && getStoredHash() === expectedHash) {
    revealArticle();
    return;
  }

  visibilityButton.addEventListener("click", function () {
    const shouldShow = input.type === "password";
    input.type = shouldShow ? "text" : "password";
    visibilityButton.textContent = shouldShow ? "隐藏" : "显示";
    visibilityButton.setAttribute("aria-label", shouldShow ? "隐藏密码" : "显示密码");
    visibilityButton.setAttribute("aria-pressed", String(shouldShow));
    input.focus();
  });

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const password = input.value;
    if (!password) {
      status.textContent = "请输入密码。";
      status.className = "post-password-form__status is-error";
      input.focus();
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "正在验证…";
    status.textContent = "";
    status.className = "post-password-form__status";

    try {
      const actualHash = await sha256(password);
      if (actualHash === expectedHash) {
        storeHash(actualHash);
        revealArticle();
        return;
      }

      status.textContent = "密码不正确，请重新输入。";
      status.className = "post-password-form__status is-error";
      gate.classList.remove("is-shaking");
      void gate.offsetWidth;
      gate.classList.add("is-shaking");
      input.select();
    } catch (error) {
      status.textContent = "当前浏览器无法进行密码校验，请升级浏览器后重试。";
      status.className = "post-password-form__status is-error";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "解锁文章";
    }
  });
})();
