/* ============================================================
   LUMA·SKIN — interactions
   ============================================================ */
(function () {
  "use strict";

  const PRICE = 99.99;
  const fmt = (n) =>
    "€" + n.toFixed(2).replace(".", ",");

  /* ---------- Gallery ---------- */
  const mainImage = document.getElementById("mainImage");
  const thumbs = document.querySelectorAll("#thumbs .thumb");
  thumbs.forEach((t) => {
    t.addEventListener("click", () => {
      const src = t.dataset.src;
      if (!src) return;
      mainImage.src = src;
      thumbs.forEach((x) => x.classList.remove("is-active"));
      t.classList.add("is-active");
    });
  });

  /* ---------- Variant selector ---------- */
  const variantName = document.getElementById("variantName");
  const variantOpts = document.querySelectorAll("#variants .variant-opt");
  variantOpts.forEach((opt) => {
    opt.addEventListener("click", () => {
      variantOpts.forEach((x) => x.classList.remove("is-active"));
      opt.classList.add("is-active");
      variantName.textContent = opt.dataset.name;
      if (opt.dataset.img) {
        mainImage.src = opt.dataset.img;
        thumbs.forEach((x) =>
          x.classList.toggle("is-active", x.dataset.src === opt.dataset.img)
        );
      }
    });
  });

  /* ---------- Quantity + cart total ---------- */
  const qtyInput = document.getElementById("qtyInput");
  const cartTotal = document.getElementById("cartTotal");
  const update = () => {
    const q = Math.max(1, parseInt(qtyInput.value, 10) || 1);
    qtyInput.value = q;
    cartTotal.textContent = fmt(PRICE * q);
  };
  document.getElementById("qtyMinus").addEventListener("click", () => {
    qtyInput.value = Math.max(1, (parseInt(qtyInput.value, 10) || 1) - 1);
    update();
  });
  document.getElementById("qtyPlus").addEventListener("click", () => {
    qtyInput.value = (parseInt(qtyInput.value, 10) || 1) + 1;
    update();
  });
  update();

  /* ---------- Add to cart / PayPal (demo) ---------- */
  const toast = document.getElementById("toast");
  let toastTimer;
  const showToast = (msg) => {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
  };
  document.getElementById("addToCart").addEventListener("click", () =>
    showToast("In den Warenkorb gelegt ✓")
  );
  document.getElementById("payPal").addEventListener("click", () =>
    showToast("Weiterleitung zu PayPal … (Demo)")
  );

  /* ---------- Light-mode interactive glow ---------- */
  const glow = document.getElementById("modeGlow");
  const current = document.getElementById("modeCurrent");
  const chips = document.querySelectorAll("#modeChips .chip");
  if (glow) glow.style.setProperty("--glow", "#ff3b3b");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      glow.style.setProperty("--glow", chip.dataset.color);
      current.innerHTML =
        "Aktiver Modus: <strong>" + chip.dataset.label + "</strong>";
    });
  });

  /* ---------- Sticky buy bar (mobile) shown after hero ---------- */
  const stickyBar = document.getElementById("stickyBar");
  const buySection = document.getElementById("buy");
  if (stickyBar && buySection && "IntersectionObserver" in window) {
    const isMobile = () => window.matchMedia("(max-width:560px)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!isMobile()) return;
        stickyBar.classList.toggle("show", !entry.isIntersecting);
      },
      { rootMargin: "-200px 0px 0px 0px" }
    );
    io.observe(buySection);
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(
    ".how-card,.review,.step,.section-head,.controller-img,.modes-visual,.video-wrap"
  );
  revealEls.forEach((el) => el.classList.add("reveal"));
  if ("IntersectionObserver" in window) {
    const ro = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            ro.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => ro.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* ---------- Autoplay hero video when in view ---------- */
  const video = document.getElementById("heroVideo");
  if (video && "IntersectionObserver" in window) {
    const vo = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );
    vo.observe(video);
  }
})();
