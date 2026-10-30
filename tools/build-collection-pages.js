/* Generates one static, crawlable page per collection from js/products.js.
   Run from the site folder:  node tools/build-collection-pages.js
   Re-run any time products.js changes, then commit the generated .html files. */
const fs = require("fs");
const vm = require("vm");
const ROOT = __dirname + "/..";
const SITE = "https://nurtureyourjoy.net";

const ctx = {}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(ROOT + "/js/products.js", "utf8") +
  ";this.C=COLLECTIONS;this.N=STANDARD_NOTES;this.H=HAND_PAINTED_NOTE;", ctx);
const COLLECTIONS = ctx.C, STD = ctx.N, HAND = ctx.H;

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* slug + hand-written search copy per collection */
const SEO = {
  "western": {
    slug: "western-birdhouses",
    title: "Handmade Western Birdhouses: Saloon, Sheriff, Jail & General Store | Nurture Your Joy",
    desc: "Handmade Western birdhouses shaped like an Old West saloon, sheriff's office, jail, hotel and general store. Cedar, with juniper-branch porch posts. $65 each, made in Arizona.",
    h1: "Western Birdhouses",
    intro: "Old West storefronts at birdhouse scale. Each Western birdhouse is built by hand in Williams, Arizona, with porch posts, bench seats and hitching posts cut from natural juniper and cedar branches, so no two are exactly alike."
  },
  "adobe": {
    slug: "adobe-birdhouses",
    title: "Adobe Pueblo Birdhouses, Handmade Southwestern Birdhouses | Nurture Your Joy",
    desc: "Handmade adobe pueblo birdhouses with stepped silhouettes and hand-set viga posts, hand-painted in Southwest colors. $50 each, built in Williams, Arizona.",
    h1: "Adobe Pueblo Birdhouses",
    intro: "Stepped pueblo silhouettes with hand-set viga posts, inspired by the adobe architecture of the high desert Southwest. Each one is hand-built from cedar and hand-painted in its own color combination."
  },
  "spanish-mission": {
    slug: "spanish-mission-birdhouses",
    title: "Spanish Mission Birdhouses: Handmade Cedar Bell Tower Birdhouses | Nurture Your Joy",
    desc: "Handmade Spanish Mission birdhouses in real cedar with bell towers, cross spires and arched windows. Watch one get built from raw cedar. $80 each, made in Arizona.",
    h1: "Spanish Mission Birdhouses",
    intro: "Bell towers, cross spires and arched windows, modeled after the old Spanish missions of the Southwest. Built from real cedar and hand-painted, each Spanish Mission birdhouse is made one at a time."
  },
  "whimsical": {
    slug: "whimsical-birdhouses",
    title: "Whimsical Cottage & Teardrop Birdhouses, Handmade Fairytale Birdhouses | Nurture Your Joy",
    desc: "Handmade whimsical cottage and teardrop birdhouses, curved and hand-painted in bold colors. A little fairytale for your garden. $65 each, made in Arizona.",
    h1: "Whimsical Birdhouses",
    intro: "A little fantasy for the flower bed. These cottage and teardrop birdhouses are curved and painted by hand, each in its own colors. You may not live in a fairytale house, but your birds can."
  },
  "bird-feeders": {
    slug: "bird-feeders",
    title: "Handmade Hanging Tray Bird Feeders with Birdhouse Centerpiece | Nurture Your Joy",
    desc: "Handmade hanging tray bird feeders with a hand-painted birdhouse centerpiece, built to match our birdhouses. $65 each, made in Arizona.",
    h1: "Handmade Bird Feeders",
    intro: "Hanging tray feeders topped with a hand-painted birdhouse centerpiece, built to match the houses. These are the same feeders you see in our Northern Arizona backyard bird videos."
  },
  "garden-carry-alls": {
    slug: "garden-carry-alls",
    title: "Handmade Garden Carry-All Totes & Arizona License Plate Dust Pans | Nurture Your Joy",
    desc: "Handmade wooden garden carry-all totes ($30) and hand-painted Arizona license plate dust pans ($15), in five colors. Great gifts, made in Arizona.",
    h1: "Garden Carry-Alls & Dust Pans",
    intro: "Handled totes for hauling garden tools, cut flowers and garden finds, plus matching dust pans, each finished with a real Arizona license plate. Sturdy, hand-painted and made to live outdoors. They make great gifts."
  },
  "cedar-boxes": {
    slug: "cedar-boxes",
    title: "Handmade Cedar Keepsake Boxes, Each One Cut from a Real Cedar Log | Nurture Your Joy",
    desc: "Locally handcrafted cedar bandsaw boxes, each cut from a real cedar log with a little drawer. No two are alike. $25 each, made in Arizona. A great gift.",
    h1: "Cedar Boxes",
    intro: "Locally handcrafted keepsakes, each one cut from a real cedar log and fitted with a little drawer. Every box is different, so you get the one we pick for you."
  },
  "birdhouse-kit": {
    slug: "birdhouse-kit",
    title: "DIY Birdhouse Kit with Paints: Solid Cedar, Ages 10 and Up | Nurture Your Joy",
    desc: "A DIY cedar birdhouse kit with hardware, a 12-color paint set, two brushes and a step-by-step assembly video. A creative project for ages 10 to 110. $20.",
    h1: "The Birdhouse Kit",
    intro: "Paint it. Build it. Make it yours. This solid cedar birdhouse kit comes with everything you need and a step-by-step video, so it works for a weekend family project, a classroom or a gift."
  }
};

const collectionsHtml = fs.readFileSync(ROOT + "/collections.html", "utf8");
const headerHtml = collectionsHtml.match(/<header class="site-header">[\s\S]*?<\/header>/)[0];
const footerHtml = collectionsHtml.match(/<footer class="site-footer">[\s\S]*?<\/footer>/)[0];
const gtag = collectionsHtml.match(/<!-- Google tag[\s\S]*?<\/script>\s*<script>[\s\S]*?<\/script>/)[0];

/* point footer collection links at the new pages */
let footer = footerHtml;
Object.keys(SEO).forEach(id => {
  footer = footer.split('collections.html#coll-' + id + '"').join(SEO[id].slug + '.html"');
});

const imgPath = (c, f) => "assets/products/" + c.id + "/" + f.replace(/\.jpe?g$/i, ".webp");
const imgAbs = (c, f) => SITE + "/assets/products/" + c.id + "/" + f;
const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const optHref = (c, item, o) => o.buyLink || ("mailto:nurtureyourjoy2026@gmail.com?subject=" + encodeURIComponent("Order inquiry: " + item.name + " (" + o.label + ")") +
  "&body=" + encodeURIComponent("Hi Wendy,\n\nI'd love to order the \"" + item.name + "\" in " + o.label + " from the " + c.name + " collection.\n\nPlease let me know availability and next steps.\n\nThank you!"));
const optHtml = (c, item) => !(item.options && item.options.length) ? "" :
  `<label class="opt-wrap"><span class="opt-label">${esc(item.optionLabel || "Choose an option")}</span><select class="opt-select" aria-label="${esc(item.optionLabel || "Choose an option")}"><option value="" selected disabled>Select&hellip;</option>` +
  item.options.map(o => `<option value="${esc(o.label)}" data-href="${esc(optHref(c, item, o))}" data-buy="${o.buyLink ? 1 : 0}">${esc(o.label)}</option>`).join("") +
  `</select></label><div class="opt-msg" role="alert"></div>`;

COLLECTIONS.forEach(c => {
  const s = SEO[c.id];
  if (!s) return;
  const url = SITE + "/" + s.slug + ".html";

  /* notes, same rules as main.js */
  const base = (c.standardNotes !== false) ? STD.slice() : [];
  if (c.standardNotes !== false && c.handPainted !== false) base.splice(base.length - 1, 0, HAND);
  const notes = (c.extraNotes || []).concat(base);

  const pieces = c.items.map(item => {
    const files = item.files;
    const id = slugify(item.name);
    const label = item.name + (/birdhouse|feeder|carry|kit/i.test(item.name) ? "" : /^(bird-feeders|garden-carry-alls|birdhouse-kit|cedar-boxes)$/.test(c.id) ? "" : " birdhouse");
    return `
      <div class="piece${item.soldOut ? " is-sold" : ""}${item.comingSoon ? " is-soon" : ""}" id="${id}"${files.length > 1 ? ` data-files="${files.map(f => imgPath(c, f)).join("|")}"` : ""}>
        <div class="frame"><img loading="lazy" decoding="async" src="${imgPath(c, files[0])}" alt="${esc(label)}, handmade ${esc(c.name)} collection, Nurture Your Joy">${item.soldOut ? '<span class="sold-badge">Sold out<br><small>More coming soon</small></span>' : ""}</div>${files.length > 1 ? `
        <div class="thumbs">${files.map((f, i) => `<button class="thumb${i === 0 ? " is-active" : ""}" data-i="${i}" aria-label="View ${i + 1}"><img loading="lazy" decoding="async" width="90" height="90" src="${imgPath(c, f).replace(/\/([^\/]+)$/, "/thumbs/$1")}" alt=""></button>`).join("")}</div>` : ""}
        <div class="info"><h3 style="font-size:1.25rem;margin:0 0 6px;">${esc(item.name)}</h3>
          <div class="price">$${item.price.toFixed(0)}</div>
          ${item.blurb ? `<p class="blurb">${esc(item.blurb)}</p>` : ""}
          ${item.shipping ? `<div class="ship-note">${esc(item.shipping)}</div>` : ""}
          ${optHtml(c, item)}
          ${item.comingSoon ? `<div class="actions"><a class="btn btn-small btn-ghost" href="mailto:nurtureyourjoy2026@gmail.com?subject=${encodeURIComponent("Notify me: " + item.name)}">Notify Me</a></div>` : ""}
          ${item.soldOut || item.comingSoon ? "" : `<div class="actions"><a class="btn btn-small${item.options ? " needs-choice" : ""}" href="${item.options ? "#" : (item.buyLink || ("mailto:nurtureyourjoy2026@gmail.com?subject=" + encodeURIComponent("Order inquiry: " + item.name)))}">${item.options || item.buyLink ? "Buy Now" : "Inquire to Order"}</a></div>`}
        </div>
      </div>`;
  }).join("");

  const shipAmt = (it) => { const m = /\$(\d+)/.exec(it.shipping || ""); return m ? Number(m[1]) : null; };
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/" },
          { "@type": "ListItem", "position": 2, "name": "Collections", "item": SITE + "/collections.html" },
          { "@type": "ListItem", "position": 3, "name": s.h1, "item": url }
        ]
      },
      ...c.items.map(it => ({
        "@type": "Product",
        "name": it.name + (/^(bird-feeders|garden-carry-alls|birdhouse-kit|cedar-boxes)$/.test(c.id) ? "" : " Birdhouse"),
        "image": it.files.map(f => imgAbs(c, f)),
        "description": s.desc,
        "brand": { "@type": "Brand", "name": "Nurture Your Joy" },
        "offers": {
          "@type": "Offer",
          "url": url + "#" + slugify(it.name),
          "priceCurrency": "USD",
          "price": it.price.toFixed(2),
          "availability": it.soldOut ? "https://schema.org/OutOfStock" : it.comingSoon ? "https://schema.org/PreOrder" : "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          ...(shipAmt(it) !== null ? {
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": { "@type": "MonetaryAmount", "value": shipAmt(it).toFixed(2), "currency": "USD" },
              "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "US" }
            }
          } : {})
        }
      }))
    ]
  };

  const video = c.video && c.video.youtubeId ? `
  <div class="coll-video">
    <div class="video-frame"><iframe src="https://www.youtube.com/embed/${c.video.youtubeId}" title="${esc(c.video.title || c.name)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe></div>
    <div class="video-caption"><h3>${esc(c.video.title || "")}</h3><p>${esc(c.video.caption || "")}</p></div>
  </div>` : "";

  const post = c.post ? `
  <div class="coll-post"><img loading="lazy" decoding="async" src="${c.post.image.replace(/\.jpe?g$/i, ".webp")}" alt="${esc(c.post.title)}">
    <div class="coll-post-text"><h3>${esc(c.post.title)}</h3><p>${esc(c.post.text)}</p></div></div>` : "";

  const others = Object.keys(SEO).filter(k => k !== c.id).map(k =>
    `<a href="${SEO[k].slug}.html">${esc(SEO[k].h1)}</a>`).join(" &middot; ");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(s.title)}</title>
<meta name="description" content="${esc(s.desc)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="icon" href="assets/brand/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Jost:wght@300;400;500;600&family=Alex+Brush&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
<meta property="og:title" content="${esc(s.title)}">
<meta property="og:description" content="${esc(s.desc)}">
<meta property="og:image" content="${SITE}/${c.cover}">
<meta property="og:url" content="${url}">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
${gtag}
<script type="application/ld+json">
${JSON.stringify(ld, null, 2)}
</script>
</head>
<body class="no-hero">

${headerHtml}

<section class="section collection-section" style="padding-top:150px;padding-bottom:0;">
  <div class="wrap">
    <div class="section-head">
      <div class="txt">
        <div class="eyebrow"><a href="collections.html" style="color:inherit;">All Collections</a></div>
        <h1 class="section-title">${esc(s.h1)}</h1>
        <p class="lede">${esc(s.intro)}</p>
        ${c.dimensions ? `<p class="dims">Approx. dimensions: ${esc(c.dimensions)}</p>` : ""}
        ${notes.length ? `<ul class="notes">${notes.map(n => `<li>${esc(n)}</li>`).join("")}</ul>` : ""}
      </div>
    </div>
  </div>
  ${video}
  <div class="gallery">${pieces}
  </div>
  ${post}
</section>

<section class="section section--alt">
  <div class="wrap">
    <div class="section-head center">
      <h2 class="section-title">More from Nurture Your Joy</h2>
      <p class="lede" style="margin:0 auto;">${others}</p>
      <p style="margin-top:18px;">Find us in person at Arizona craft shows and markets. See the <a href="craft-shows.html">show schedule</a>.</p>
    </div>
  </div>
</section>

${footer}

<script src="js/products.js"></script>
<script src="js/main.js"></script>
</body>
</html>
`;
  fs.writeFileSync(ROOT + "/" + s.slug + ".html", html);
  console.log("wrote", s.slug + ".html", c.items.length, "items");
});

/* sitemap */
const pages = [
  ["", "1.0", "weekly"], ["collections.html", "0.9", "weekly"],
  ...Object.values(SEO).map(v => [v.slug + ".html", "0.8", "weekly"]),
  ["story.html", "0.6", "monthly"], ["bird-cam.html", "0.6", "monthly"],
  ["craft-shows.html", "0.6", "monthly"], ["merch.html", "0.5", "monthly"], ["contact.html", "0.5", "monthly"]
];
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(ROOT + "/sitemap.xml",
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  pages.map(p => `  <url>\n    <loc>${SITE}/${p[0]}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p[2]}</changefreq>\n    <priority>${p[1]}</priority>\n  </url>`).join("\n") +
  "\n</urlset>\n");
console.log("wrote sitemap.xml");
