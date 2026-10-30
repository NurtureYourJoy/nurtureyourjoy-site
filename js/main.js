(function(){
  "use strict";

  /* ---------- helpers ---------- */
  function el(tag, cls, html){
    const e = document.createElement(tag);
    if(cls) e.className = cls;
    if(html !== undefined) e.innerHTML = html;
    return e;
  }
  function fmtPrice(p){
    if(p === null || p === undefined || p === "") return null;
    return typeof p === "number" ? "$" + p.toFixed(0) : p;
  }
  function buyHref(collectionName, item){
    if(item.buyLink) return item.buyLink;
    const subject = encodeURIComponent("Order inquiry: " + item.name);
    const body = encodeURIComponent(
      "Hi Wendy,\n\nI'd love to order the \"" + item.name + "\" from the " + collectionName +
      " collection.\n\nPlease let me know availability, price, and next steps.\n\nThank you!"
    );
    return "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;
  }

  /* ---------- color / option dropdown (one listing, several buy links) ---------- */
  function optHref(collectionName, item, opt){
    if(opt.buyLink) return opt.buyLink;
    const subject = encodeURIComponent("Order inquiry: " + item.name + " (" + opt.label + ")");
    const body = encodeURIComponent(
      "Hi Wendy,\n\nI'd love to order the \"" + item.name + "\" in " + opt.label + " from the " + collectionName +
      " collection.\n\nPlease let me know availability and next steps.\n\nThank you!"
    );
    return "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;
  }
  function optionsHtml(collectionName, item){
    if(!item.options || !item.options.length) return "";
    const label = item.optionLabel || "Choose an option";
    return '<label class="opt-wrap"><span class="opt-label">' + label + '</span>' +
      '<select class="opt-select" aria-label="' + label + '"><option value="" selected disabled>Select&hellip;</option>' +
      item.options.map(function(o){
        const href = optHref(collectionName, item, o);
        return '<option value="' + o.label.replace(/"/g, "&quot;") + '" data-href="' + href.replace(/"/g, "&quot;") + '" data-buy="' + (o.buyLink ? "1" : "0") + '">' + o.label + "</option>";
      }).join("") + "</select></label>";
  }
  document.addEventListener("change", function(e){
    const sel = e.target.closest && e.target.closest(".opt-select");
    if(!sel) return;
    const piece = sel.closest(".piece");
    const btn = piece && piece.querySelector(".actions .btn");
    const opt = sel.options[sel.selectedIndex];
    if(!btn || !opt || !opt.dataset.href) return;
    btn.href = opt.dataset.href;
    btn.textContent = opt.dataset.buy === "1" ? "Buy Now" : "Inquire to Order";
    btn.classList.remove("needs-choice");
    const msg = piece.querySelector(".opt-msg"); if(msg) msg.textContent = "";
  });
  document.addEventListener("click", function(e){
    const btn = e.target.closest && e.target.closest(".btn.needs-choice");
    if(!btn) return;
    e.preventDefault();
    const piece = btn.closest(".piece");
    const msg = piece && piece.querySelector(".opt-msg");
    if(msg) msg.textContent = "Please choose an option first.";
    const sel = piece && piece.querySelector(".opt-select"); if(sel) sel.focus();
  });

  /* ---------- header scroll state ---------- */
  const header = document.querySelector(".site-header");
  function onScroll(){
    if(window.scrollY > 40) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive:true });
  onScroll();

  /* ---------- mobile nav ---------- */
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  if(navToggle){
    navToggle.addEventListener("click", function(){
      mainNav.classList.toggle("is-open");
    });
    mainNav.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click", function(){ mainNav.classList.remove("is-open"); });
    });
  }

  /* ---------- hero ready state (fires entrance animation) ---------- */
  const hero = document.querySelector(".hero");
  if(hero){
    requestAnimationFrame(function(){
      setTimeout(function(){ hero.classList.add("is-ready"); }, 120);
    });
  }

  /* ---------- reveal on scroll ---------- */
  const revealTargets = document.querySelectorAll("[data-reveal]");
  if("IntersectionObserver" in window){
    const io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold:0.14, rootMargin:"0px 0px -40px 0px" });
    revealTargets.forEach(function(t){ io.observe(t); });
  } else {
    revealTargets.forEach(function(t){ t.classList.add("in"); });
  }

  /* ---------- lightbox (supports multiple views per piece) ---------- */
  const lightbox = el("div", "lightbox");
  lightbox.innerHTML =
    '<span class="close">Close</span>' +
    '<button class="lb-nav lb-prev" aria-label="Previous view">&#8249;</button>' +
    '<img alt="">' +
    '<button class="lb-nav lb-next" aria-label="Next view">&#8250;</button>' +
    '<div class="lb-count"></div>';
  document.body.appendChild(lightbox);
  const lightboxImg = lightbox.querySelector("img");
  const lbCount = lightbox.querySelector(".lb-count");
  const lbPrev = lightbox.querySelector(".lb-prev");
  const lbNext = lightbox.querySelector(".lb-next");
  let lbFiles = [];
  let lbIndex = 0;
  let lbAlt = "";

  function renderLightbox(){
    lightboxImg.src = lbFiles[lbIndex];
    lightboxImg.alt = lbAlt;
    const multi = lbFiles.length > 1;
    lbPrev.style.display = multi ? "" : "none";
    lbNext.style.display = multi ? "" : "none";
    lbCount.style.display = multi ? "" : "none";
    lbCount.textContent = multi ? (lbIndex + 1) + " / " + lbFiles.length : "";
  }
  function openLightbox(files, index, alt){
    lbFiles = files; lbIndex = index || 0; lbAlt = alt || "";
    renderLightbox();
    lightbox.classList.add("is-open");
  }
  function closeLightbox(){ lightbox.classList.remove("is-open"); lightboxImg.src = ""; }
  function lbStep(dir){
    if(!lbFiles.length) return;
    lbIndex = (lbIndex + dir + lbFiles.length) % lbFiles.length;
    renderLightbox();
  }
  lightbox.addEventListener("click", function(e){
    if(e.target === lightbox || e.target.classList.contains("close")) closeLightbox();
  });
  lbPrev.addEventListener("click", function(e){ e.stopPropagation(); lbStep(-1); });
  lbNext.addEventListener("click", function(e){ e.stopPropagation(); lbStep(1); });
  document.addEventListener("keydown", function(e){
    if(!lightbox.classList.contains("is-open")) return;
    if(e.key === "Escape") closeLightbox();
    if(e.key === "ArrowLeft") lbStep(-1);
    if(e.key === "ArrowRight") lbStep(1);
  });

  const COLL_PAGES = {"western":"western-birdhouses.html","adobe":"adobe-birdhouses.html","spanish-mission":"spanish-mission-birdhouses.html","whimsical":"whimsical-birdhouses.html","bird-feeders":"bird-feeders.html","garden-carry-alls":"garden-carry-alls.html","cedar-boxes":"cedar-boxes.html","birdhouse-kit":"birdhouse-kit.html"};
  /* ---------- render: collections overview grid ---------- */
  const collGrid = document.querySelector("[data-collections-grid]");
  if(collGrid){
    COLLECTIONS.forEach(function(c){
      const card = el("div", "coll-card" + (c.status === "coming" ? " is-coming" : ""));
      if(c.cover){
        const img = el("img");
        img.src = c.cover.replace(/\.jpe?g$/i, ".webp"); img.alt = c.name; img.loading = "lazy";
        card.appendChild(img);
      }
      card.appendChild(el("div", "veil"));
      const body = el("div", "body");
      body.innerHTML =
        (c.status === "coming" ? '<span class="soon">Coming soon</span>' : "") +
        "<h3>" + c.name + "</h3>" +
        "<p>" + c.tagline + "</p>" +
        '<a href="' + (COLL_PAGES[c.id] || ('#coll-' + c.id)) + '">' + (c.status === "coming" ? "Get notified" : "View collection") + "</a>";
      card.appendChild(body);
      collGrid.appendChild(card);
    });
  }

  /* ---------- render: each collection detail section ---------- */
  const sectionsHost = document.querySelector("[data-collection-sections]");
  if(sectionsHost){
    COLLECTIONS.forEach(function(c, idx){
      const section = el("section", "section collection-section" + (idx % 2 === 1 ? " section--alt" : ""));
      section.id = "coll-" + c.id;

      const head = el("div", "section-head");
      const dimsLine = c.dimensions ? '<p class="dims">Approx. dimensions: ' + c.dimensions + "</p>" : "";
      const baseNotes = (c.standardNotes !== false && typeof STANDARD_NOTES !== "undefined") ? STANDARD_NOTES.slice() : [];
      if (c.standardNotes !== false && c.handPainted !== false && typeof HAND_PAINTED_NOTE !== "undefined") {
        baseNotes.splice(baseNotes.length - 1, 0, HAND_PAINTED_NOTE);
      }
      const allNotes = (c.extraNotes || []).concat(baseNotes);
      const notesLines = allNotes.length
        ? '<ul class="notes">' + allNotes.map(function(n){ return "<li>" + n + "</li>"; }).join("") + "</ul>"
        : "";
      head.innerHTML =
        '<div class="txt"><div class="eyebrow">Collection ' + String(idx+1).padStart(2,"0") + "</div>" +
        "<h2 class=\"section-title\">" + c.name + "</h2>" +
        '<p class="lede">' + c.tagline + "</p>" +
        dimsLine + notesLines + "</div>";
      section.appendChild(head);

      if(c.video && c.video.youtubeId){
        const videoBlock = el("div", "coll-video");
        videoBlock.innerHTML =
          '<div class="video-frame"><iframe src="https://www.youtube.com/embed/' + c.video.youtubeId + '" title="' +
          (c.video.title || c.name + " build video") +
          '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe></div>' +
          '<div class="video-caption">' +
          (c.video.title ? "<h3>" + c.video.title + "</h3>" : "") +
          (c.video.caption ? "<p>" + c.video.caption + "</p>" : "") +
          "</div>";
        section.appendChild(videoBlock);
      }

      if(c.status === "live" && c.items.length){
        const gallery = el("div", "gallery");
        c.items.forEach(function(item){
          const piece = el("div", "piece");
          const price = fmtPrice(item.price);
          const files = (item.files && item.files.length ? item.files : [item.file]).map(function(f){
            return "assets/products/" + c.id + "/" + f.replace(/\.jpe?g$/i, ".webp");
          });
          const altText = item.name + (/^(western|adobe|spanish-mission|whimsical)$/.test(c.id) ? " birdhouse, " : ", ") + c.name + " collection";
          const shipNote = item.shipping ? '<div class="ship-note">' + item.shipping + "</div>" : "";
          const thumbs = files.length > 1
            ? '<div class="thumbs">' + files.map(function(f, i){
                return '<button class="thumb' + (i === 0 ? " is-active" : "") + '" data-i="' + i + '" aria-label="View ' + (i+1) + '"><img loading="lazy" decoding="async" width="90" height="90" src="' + f.replace(/\/([^\/]+)$/, "/thumbs/$1") + '" alt=""></button>';
              }).join("") + "</div>"
            : "";
          if(item.soldOut) piece.classList.add("is-sold");
          if(item.comingSoon) piece.classList.add("is-soon");
          piece.innerHTML =
            '<div class="frame"><img loading="lazy" decoding="async" src="' + files[0] + '" alt="' + altText + '">' +
            (item.soldOut ? '<span class="sold-badge">Sold out<br><small>More coming soon</small></span>' : "") + '</div>' +
            thumbs +
            '<div class="info"><h4>' + item.name + "</h4>" +
            (item.blurb ? '<p class="blurb">' + item.blurb + "</p>" : "") +
            '<div class="price' + (price ? "" : " tbd") + '">' + (price || "Price on request") + "</div>" +
            shipNote +
            optionsHtml(c.name, item) + (item.options ? '<div class="opt-msg" role="alert"></div>' : "") +
            (item.comingSoon ? '<div class="actions"><a class="btn btn-small btn-ghost" href="mailto:' + CONTACT_EMAIL + "?subject=" + encodeURIComponent("Notify me: " + item.name) + '">Notify Me</a></div>' : "") +
            (item.soldOut || item.comingSoon ? "" : '<div class="actions"><a class="btn btn-small' + (item.options ? " needs-choice" : "") + '" href="' + (item.options ? "#" : buyHref(c.name, item)) + '">' +
            (item.options ? "Buy Now" : (item.buyLink ? "Buy Now" : "Inquire to Order")) + "</a></div>") + "</div>";
          gallery.appendChild(piece);

          const frameImg = piece.querySelector(".frame img");
          let activeIndex = 0;
          frameImg.addEventListener("click", function(){
            if(!item.comingSoon) openLightbox(files, activeIndex, altText);
          });
          piece.querySelectorAll(".thumb").forEach(function(btn){
            btn.addEventListener("click", function(){
              activeIndex = parseInt(btn.dataset.i, 10);
              frameImg.src = files[activeIndex];
              piece.querySelectorAll(".thumb").forEach(function(t){ t.classList.remove("is-active"); });
              btn.classList.add("is-active");
            });
          });
        });
        section.appendChild(gallery);
        if(c.post){
          const post = el("div", "coll-post");
          post.innerHTML = '<img loading="lazy" decoding="async" src="' + c.post.image.replace(/\.jpe?g$/i, ".webp") + '" alt="' + c.post.title + '">' +
            '<div class="coll-post-text"><h3>' + c.post.title + '</h3><p>' + c.post.text + '</p></div>';
          section.appendChild(post);
        }
      } else {
        const panel = el("div", "coming-panel");
        panel.innerHTML =
          "<h3>New photos on the way</h3>" +
          "<p>" + c.name + " pieces are being photographed now. Reach out and we'll let you know the moment they're ready to order.</p>" +
          '<a class="btn btn-ghost btn-small" href="mailto:' + CONTACT_EMAIL + "?subject=" + encodeURIComponent(c.name + " — notify me") + '">Notify Me</a>';
        section.appendChild(panel);
      }

      sectionsHost.appendChild(section);
    });
  }

  /* ---------- static collection pages: photo thumbnails + lightbox ---------- */
  document.querySelectorAll(".piece[data-files]").forEach(function(piece){
    const files = piece.dataset.files.split("|");
    const frameImg = piece.querySelector(".frame img");
    const altText = frameImg ? frameImg.alt : "";
    let activeIndex = 0;
    if(frameImg) frameImg.addEventListener("click", function(){ if(!piece.classList.contains("is-sold")) openLightbox(files, activeIndex, altText); });
    piece.querySelectorAll(".thumb").forEach(function(btn){
      btn.addEventListener("click", function(){
        activeIndex = parseInt(btn.dataset.i, 10);
        frameImg.src = files[activeIndex];
        piece.querySelectorAll(".thumb").forEach(function(t){ t.classList.remove("is-active"); });
        btn.classList.add("is-active");
      });
    });
  });

  /* ---------- render: merch grid ---------- */
  const merchGrid = document.querySelector("[data-merch-grid]");
  if(merchGrid && typeof MERCH_ITEMS !== "undefined"){
    MERCH_ITEMS.forEach(function(m){
      const card = el("div", "merch-card");
      card.innerHTML =
        '<a class="merch-frame" href="' + m.url + '" target="_blank" rel="noopener"><img loading="lazy" src="' + m.image + '" alt="' + m.name + '"></a>' +
        '<div class="merch-info"><h4>' + m.name + "</h4>" +
        '<div class="price">$' + m.price.toFixed(2) + "</div>" +
        '<div class="actions"><a class="btn btn-small" href="' + m.url + '" target="_blank" rel="noopener">Shop Now</a></div></div>';
      merchGrid.appendChild(card);
    });
  }

  /* ---------- year in footer ---------- */
  const yearEl = document.querySelector("[data-year]");
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- analytics: track Buy Now / Inquire clicks (Stripe checkout is off-site) ---------- */
  document.addEventListener("click", function(e){
    const a = e.target.closest && e.target.closest("a[href]");
    if(!a || typeof gtag !== "function") return;
    const href = a.getAttribute("href") || "";
    const label = (a.closest(".piece") && a.closest(".piece").querySelector("h3,h4,.name")) ;
    const item = (label ? label.textContent : (a.getAttribute("aria-label") || document.title)).trim().slice(0,100);
    if(href.indexOf("buy.stripe.com") > -1){
      gtag("event", "buy_now_click", {item_name: item, page_title: document.title, link_url: href});
    } else if(href.indexOf("mailto:") === 0 && /inquire/i.test(a.textContent)){
      gtag("event", "inquire_click", {item_name: item, page_title: document.title});
    }
  });

})();
