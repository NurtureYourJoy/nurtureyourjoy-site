/* ==========================================================================
   NURTURE YOUR JOY — product & collection data
   --------------------------------------------------------------------------
   HOW TO ADD OR EDIT PIECES
   1. Drop photos into assets/products/<collection-folder>/ — one item can
      have several views, just list them all in "files" (first is the cover).
   2. Add a block below with the filenames, display name, price and, if it
      applies, a shipping note.
   3. Once you have a Stripe Payment Link for a piece, paste the URL into
      "buyLink". Until then it's null and the Buy button sends an email
      inquiry instead, so the site is always fully functional.
   ========================================================================== */

/* Notes appended to every collection's description, in this order. */
const STANDARD_NOTES = [
  "Finished with a marine-grade sealant, built to last for years to come.",
  "Colors may vary slightly from the photos shown.",
  "Please allow 2 weeks for shipping and handling."
];
/* Last line under every collection (raw HTML). */
const SHOW_NOTE = 'Or come see it in person at our <a href="craft-shows.html">next show</a>.';
/* Appended after the color-variance note, unless the collection sets handPainted: false. */
const HAND_PAINTED_NOTE = "Every piece is hand-painted.";

const COLLECTIONS = [
  {
    id: "cedar-boxes",
    name: "Cedar Boxes",
    tagline: "Locally handcrafted keepsake boxes, each one cut from a real cedar log.",
    dimensions: "approximately 3\" deep x 3\" tall x 3\" wide; exact size varies with each log",
    standardNotes: false,
    extraNotes: [
      "No two boxes are alike. Each one is shaped by the cedar log it came from, so the height and width vary, and the grain and color are all one of a kind.",
      "You can't pick a specific box. Each order is a surprise, and we'll choose a beautiful one and send it to you.",
      "These make great gifts.",
      "Please allow 2 weeks for shipping and handling."
    ],
    cover: "assets/collections-hero/hero-cedar-boxes.jpg",
    status: "live",
    items: [
      {
        files: ["cedar-boxes-display1.jpg", "cedar-boxes-display2.jpg"],
        name: "Cedar Keepsake Box", price: 25, shipping: "Plus $8 flat-rate shipping (contiguous US only)",
        blurb: "Each keepsake box has a little drawer with a wooden pull and measures approximately 3\" deep, 3\" tall and 3\" wide. Because every cedar log is different, the exact size and shape vary slightly, and you'll receive the box we choose for you. Just as no two trees are alike, there will never be another box like yours anywhere in the world. It's a truly unique keepsake, hard to find in a world of mass production.",
        buyLink: "https://buy.stripe.com/bJe8wI8Id7foa4S1Bcbwk0Z"
      }
    ]
  },
  {
    id: "western",
    name: "The Western Collection",
    tagline: "Saloons, sheriffs and general stores, whittled down to birdhouse scale.",
    dimensions: "10.5\" tall x 10\" deep x 5.5\" wide",
    handPainted: false,
    extraNotes: [
      "Porch posts, bench seats and hitching posts are made from natural juniper and cedar branches — each branch is different, so yours will vary slightly from the photo."
    ],
    cover: "assets/collections-hero/hero-western.jpg",
    status: "live",
    items: [
      { files: ["western-generalstore2-front.jpg", "western-generalstore2-front2.jpg", "western-generalstore2-side.jpg"], name: "General Store", price: 65, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/8x25kwaQl2Z890O93Ebwk0f" },
      { files: ["western-saloon2-front.jpg", "western-saloon2-front2.jpg", "western-saloon2-side.jpg"], name: "The Saloon", price: 65, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/cNi5kwf6B7foel8enYbwk0i" },
      { files: ["western-sheriff-front.jpg", "western-sheriff-front2.jpg", "western-sheriff-side.jpg"], name: "Sheriff", price: 65, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/7sYcMYcYtbvEfpc2Fgbwk0G" },
      { files: ["western-jail-front.jpg", "western-jail-front2.jpg", "western-jail-side.jpg"], name: "Jail", price: 65, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/5kQ28k5w19nwcd07ZAbwk0H" },
      { files: ["western-hotel-front.jpg"], name: "Hotel", price: 65, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/bJe9AM4rXeHQ4KydjUbwk0I" }
    ]
  },
  {
    id: "spanish-mission",
    name: "Spanish Mission",
    tagline: "Bell towers, cross spires and arched windows, modeled after the old Spanish missions of the Southwest.",
    dimensions: "12.25\" tall x 10\" deep x 6.75\" wide",
    extraNotes: [
      "Made with real cedar, not substandard particle board."
    ],
    video: {
      youtubeId: "rzEfE3Qv92g",
      title: "Watch a Spanish Mission Get Built",
      caption: "From raw cedar to finished birdhouse — see the whole build, start to finish."
    },
    cover: "assets/collections-hero/hero-spanish-mission.jpg",
    status: "live",
    items: [
      { files: ["mission-tealblue-front1.jpg", "mission-tealblue-front2.jpg", "mission-tealblue-back.jpg"], name: "Spanish Mission, Teal & Blue", price: 80, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/28EbIU6A543cel8gw6bwk0B" },
      { files: ["mission-terracottaochre-front1.jpg", "mission-terracottaochre-front2.jpg", "mission-terracottaochre-back.jpg"], name: "Spanish Mission, Terra Cotta & Ochre", price: 80, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/cNiaEQ2jP57g7WK2Fgbwk0C" },
      { files: ["mission-redblue-front1.jpg", "mission-redblue-front2.jpg"], name: "Spanish Mission, Red & Blue", price: 80, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/aFa6oA1fLbvEa4S3Jkbwk0D" },
      { files: ["mission-ochreteal-front1.jpg", "mission-ochreteal-back.jpg"], name: "Spanish Mission, Ochre & Teal", price: 80, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/6oUcMY4rXbvEcd0fs2bwk0E" },
      { files: ["mission-ochreterracotta-front1.jpg", "mission-ochreterracotta-back.jpg"], name: "Spanish Mission, Ochre & Terra Cotta", price: 80, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/eVqfZa8Id7foa4Sfs2bwk0F" }
    ]
  },
  {
    id: "whimsical",
    name: "Whimsical",
    tagline: "A little fantasy for the flower bed, curved and painted by hand.",
    dimensions: "10.5\" tall x 9\" deep x 5.5\" wide",
    extraNotes: [
      "You may not live in a fairytale house but your birds can!"
    ],
    cover: "assets/collections-hero/hero-whimsical.jpg",
    video: {
      youtubeId: "ADvxWVesYXI",
      title: "The Tiny Details Nobody Notices",
      caption: "Window trim and tiny flower planters for a Whimsical birdhouse, a small part of the build but a lot of steps."
    },
    status: "live",
    items: [
      { files: ["wh-mlg1.jpg", "wh-mlg2.jpg"], name: "Whimsical Cottage, Magenta & Lime Green", price: 65, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/eVq7sEe2x43c5OC5Rsbwk0U" },
      { files: ["wh-pt1.jpg", "wh-pt2.jpg"], name: "Whimsical Cottage, Purple & Teal", price: 65, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/8x2bIUf6B43c2Cq6Vwbwk0V" },
      { files: ["wh-bt1.jpg", "wh-bt2.jpg"], name: "Whimsical Cottage, Blue & Teal", price: 65, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/7sY5kw7E9gPY7WKdjUbwk0W" },
      { files: ["wh-blg1.jpg", "wh-blg2.jpg"], name: "Whimsical Teardrop, Blue & Lime Green", price: 65, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/8x2aEQ2jP6bkcd05Rsbwk0X" },
      { files: ["wh-op1.jpg"], name: "Whimsical Cottage, Orange & Purple", price: 65, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/9B63coe2x2Z86SG4Nobwk0Y" },
      { files: ["photo-coming-soon.jpg"], name: "Whimsical Cottage, Blue & Red", price: 65, shipping: "Plus $15 flat-rate shipping (contiguous US only)", comingSoon: true },
      { files: ["photo-coming-soon.jpg"], name: "Whimsical Cottage, Blue & Natural", price: 65, shipping: "Plus $15 flat-rate shipping (contiguous US only)", comingSoon: true },
      { files: ["photo-coming-soon.jpg"], name: "Whimsical Cottage, Burgundy & Natural", price: 65, shipping: "Plus $15 flat-rate shipping (contiguous US only)", comingSoon: true }
    ]
  },
  {
    id: "adobe",
    name: "Adobe",
    tagline: "Stepped pueblo silhouettes with hand-set viga posts, straight from the high desert.",
    dimensions: "10.5\" tall x 9\" deep x 5.5\" wide",
    cover: "assets/collections-hero/hero-adobe.jpg",
    status: "live",
    items: [
      { files: ["adobe-show-oy.jpg"], name: "Adobe Pueblo, Orange & Yellow", price: 50, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/5kQ8wIgaFdDM0uicfQbwk0j" },
      { files: ["adobe-rt1-front.jpg", "adobe-rt1-side.jpg"], name: "Adobe Pueblo, Red & Teal", price: 50, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: null, soldOut: true },
      { files: ["adobe-yr1-front.jpg", "adobe-yr1-side.jpg"], name: "Adobe Pueblo, Yellow & Red", price: 50, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: null, soldOut: true },
      { files: ["adobe-go1-front.jpg"], name: "Adobe Pueblo, Green & Orange", price: 50, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: null, soldOut: true },
      { files: ["adobe-ot1-front.jpg"], name: "Adobe Pueblo, Orange & Teal", price: 50, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: null, soldOut: true },
      { files: ["adobe-tr1-front.jpg"], name: "Adobe Pueblo, Teal & Red", price: 50, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: null, soldOut: true },
      { files: ["adobe-show-yg.jpg"], name: "Adobe Pueblo, Yellow & Green", price: 50, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/8x200caQlfLU1ymenYbwk0p" },
      { files: ["adobe-ty1-front.jpg"], name: "Adobe Pueblo, Teal & Yellow", price: 50, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: null, soldOut: true }
    ]
  },
  {
    id: "bird-feeders",
    name: "Bird Feeders",
    tagline: "Hanging tray feeders topped with a hand-painted Whimsical birdhouse, in four color combinations.",
    dimensions: "11.25\" tall x 11\" deep x 12\" wide",
    video: {
      youtubeId: "cEPc1EXvzBk",
      title: "Birds at our tray feeder",
      caption: "Blue Jays, towhees and more, filmed at a hand-built tray feeder in the same style, in the Northern Arizona high desert."
    },
    cover: "assets/collections-hero/hero-bird-feeders.jpg",
    status: "live",
    items: [
      { files: ["feeder-whimsical-mt1.jpg", "feeder-whimsical-mt2.jpg"], blurb: "A hanging tray feeder topped with a hand-painted Whimsical birdhouse. Watch the birds eat at a feeder in this same style, just in different colors: <a href=\"https://www.youtube.com/watch?v=cEPc1EXvzBk\" target=\"_blank\" rel=\"noopener\">see the video</a>.", name: "Whimsical Tray Feeder, Magenta & Teal", price: 65, shipping: "Plus $17 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/fZu7sE9MhgPYel8fs2bwk0R" },
      { files: ["feeder-whimsical-bt1.jpg", "feeder-whimsical-bt2.jpg"], blurb: "A hanging tray feeder topped with a hand-painted Whimsical birdhouse. Watch the birds eat at a feeder in this same style, just in different colors: <a href=\"https://www.youtube.com/watch?v=cEPc1EXvzBk\" target=\"_blank\" rel=\"noopener\">see the video</a>.", name: "Whimsical Tray Feeder, Blue & Teal", price: 65, shipping: "Plus $17 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/dRm8wIbUp0R07WKbbMbwk0Q" },
      /* Stripe links already made for the two coming-soon colors: Blue & Natural https://buy.stripe.com/28E14gbUp57g7WK6Vwbwk0S , Burgundy & Natural https://buy.stripe.com/7sY9AMcYt57ga4Sgw6bwk0T */
      { files: ["photo-coming-soon.jpg"], name: "Whimsical Tray Feeder, Blue & Natural", price: 65, shipping: "Plus $17 flat-rate shipping (contiguous US only)", comingSoon: true },
      { files: ["photo-coming-soon.jpg"], name: "Whimsical Tray Feeder, Burgundy & Natural", price: 65, shipping: "Plus $17 flat-rate shipping (contiguous US only)", comingSoon: true }
    ]
  },
  {
    id: "garden-carry-alls",
    name: "Garden Carry-Alls",
    tagline: "Handled totes for hauling tools, cut flowers and garden finds, finished with a real license plate.",
    dimensions: "12\" tall x 12.5\" deep x 5.5\" wide",
    cover: "assets/collections-hero/hero-garden-carry-alls.jpg",
    status: "live",
    items: [
      {
        files: ["carryalls-dustpans-group.jpg", "ai-purple.jpg", "ai-teal.jpg", "ai-red.jpg", "ai-yellow.jpg"],
        name: "Garden Carry-All", price: 30, shipping: "Plus $17 flat-rate shipping (contiguous US only)",
        blurb: "A sturdy hand-painted tote with a rustic branch handle and a real Arizona license plate on the front. Perfect for tools, cut flowers and garden finds, and a great gift for the gardener in your life.",
        optionLabel: "Choose your color",
        options: [
          { label: "Purple", buyLink: "https://buy.stripe.com/dRmdR2bUp8js7WK7ZAbwk0w" },
          { label: "Teal", buyLink: "https://buy.stripe.com/aFa7sE3nT8jsa4S5Rsbwk0x" },
          { label: "Red", buyLink: "https://buy.stripe.com/4gMfZa1fL8jsfpcenYbwk0y" },
          { label: "Yellow", buyLink: "https://buy.stripe.com/eVqfZa5w1dDM2Cq1Bcbwk0z" },
          { label: "Blue", buyLink: "https://buy.stripe.com/cNiaEQ1fL9nw4Ky2Fgbwk0P" }
        ]
      },
      {
        files: ["carryalls-dustpans-group.jpg"],
        name: "Arizona License Plate Dust Pan", price: 15, shipping: "Plus $8 flat-rate shipping (contiguous US only)",
        blurb: "A hand-painted dust pan made with a real Arizona license plate. It's handy in the shop, the garage or the garden, and makes a great gift.",
        optionLabel: "Choose your color",
        options: [
          { label: "Purple", buyLink: "https://buy.stripe.com/28E9AM3nT7fo5OC93Ebwk0K" },
          { label: "Teal", buyLink: "https://buy.stripe.com/00w00c3nTarA90OcfQbwk0L" },
          { label: "Red", buyLink: "https://buy.stripe.com/aFa7sEaQl6bkcd04Nobwk0N" },
          { label: "Yellow", buyLink: "https://buy.stripe.com/3cI9AM0bH8jsa4SbbMbwk0M" },
          { label: "Blue", buyLink: "https://buy.stripe.com/9B64gs0bH43c0uicfQbwk0O" }
        ]
      }
    ]
  },
  {
    id: "birdhouse-kit",
    name: "The Birdhouse Kit",
    tagline: "Paint it. Build it. Make it yours. A creative project for everyone, ages 10 to 110.",
    standardNotes: false,
    extraNotes: [
      "What's in the box: a solid cedar birdhouse kit, all the hardware you need, a 12-color paint set, 2 paint brushes, and a step-by-step assembly video.",
      "Ordering more than one item? Email us and we'll send you a combined shipping quote.",
      "Please allow 2 weeks for shipping and handling."
    ],
    video: {
      youtubeId: "4BCoJHyGFF4",
      title: "Birdhouse Kit Assembly Instructions",
      caption: "Follow along, step by step. Scan the QR code in the box to watch it any time."
    },
    cover: "assets/collections-hero/hero-birdhouse-kit.jpg",
    status: "live",
    items: [
      { files: ["kit-photo.jpg"], name: "Birdhouse Kit", price: 20, shipping: "Plus $13 flat-rate shipping per kit (contiguous US only)", buyLink: "https://buy.stripe.com/9B6aEQ0bH9nw6SG4Nobwk0J" }
    ]
  }
];

const CONTACT_EMAIL = "nurtureyourjoy2026@gmail.com";

/* ==========================================================================
   MERCH — Printify Pop-Up Store items
   --------------------------------------------------------------------------
   Photos are hosted by Printify, so "image" is a full URL rather than a
   local file. "url" is the product's page on the Printify store — that's
   where the actual checkout happens, so clicking "Shop Now" leaves the site.
   ========================================================================== */
const MERCH_ITEMS = [
  {
    name: "\"Nurture Your Joy\" Graphic T-Shirt",
    price: 26.99,
    image: "https://images-api.printify.com/mockup/6aafde113dffc550ef05c094/101820/98445/nurture-your-joy-graphic-t-shirt.jpg",
    url: "https://nurture-your-joy.printify.me/product/32182303"
  },
  {
    name: "Quail 'Nurture Your Joy' Graphic Hoodie",
    price: 37.99,
    image: "https://images-api.printify.com/mockup/6a918898d86146cef500f2ac/42229/98424/quail-nurture-your-joy-graphic-hoodie.jpg",
    url: "https://nurture-your-joy.printify.me/product/31393159"
  },
  {
    name: "White Classic Dad Cap, Embroidered Bird Accent",
    price: 35.60,
    image: "https://images-api.printify.com/mockup/6a918484fdca556d3103c8f2/105379/102307/white-classic-dad-cap-with-minimal-embroidered-bird-accent-casual-baseball-hat.jpg",
    url: "https://nurture-your-joy.printify.me/product/31392897"
  },
  {
    name: "T-Shirt",
    price: 26.77,
    image: "https://images-api.printify.com/mockup/6a918551fdca556d3103c9bf/78963/98445/t-shirt.jpg",
    url: "https://nurture-your-joy.printify.me/product/31392970"
  },
  {
    name: "Nurture Your Joy Quail T-Shirt",
    price: 23.00,
    image: "https://images-api.printify.com/mockup/6a91823a7366aa756f0e4877/78883/98445/nurture-your-joy-quail-t-shirt.jpg",
    url: "https://nurture-your-joy.printify.me/product/31392814"
  },
  {
    name: "Nurture Your Joy T-Shirt — Quail Graphic Comfort Tee",
    price: 23.06,
    image: "https://images-api.printify.com/mockup/6a917e617366aa756f0e4519/102354/98445/nurture-your-joy-t-shirt-quail-graphic-comfort-tee.jpg",
    url: "https://nurture-your-joy.printify.me/product/31392722"
  }
];
