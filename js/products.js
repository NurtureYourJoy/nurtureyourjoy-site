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
/* Appended after the color-variance note, unless the collection sets handPainted: false. */
const HAND_PAINTED_NOTE = "Every piece is hand-painted.";

const COLLECTIONS = [
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
    post: { image: "assets/products/whimsical/whimsical-workshop.jpg", title: "Coming soon: so many colors, so little time", text: "A brand-new Whimsical line-up is taking shape in the workshop right now. Here is a peek at the color choices." },
    status: "live",
    items: [
      { files: ["whimsical-show-op.jpg"], name: "Whimsical Cottage, Orange & Purple", price: 65, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: null },
      { files: ["whimsical-show-ic.jpg"], name: "Whimsical Cottage, Indigo & Citrus", price: 65, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: null },
      { files: ["whimsical-show-bp.jpg"], name: "Whimsical Cottage, Blue & Purple", price: 65, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: null },
      { files: ["whimsical-show-mg.jpg"], name: "Whimsical Cottage, Magenta & Green", price: 65, shipping: "Plus $15 flat-rate shipping (contiguous US only)", buyLink: null }
    ]
  },
  {
    id: "bird-feeders",
    name: "Bird Feeders",
    tagline: "Hanging tray feeders with a hand-painted birdhouse centerpiece, built to match the houses.",
    dimensions: "11.25\" tall x 11\" deep x 12\" wide",
    cover: "assets/collections-hero/hero-bird-feeders.jpg",
    status: "live",
    items: [
      { files: ["ai-green-teal-v2.jpg", "feeder-gt1-front.jpg", "feeder-gt1-back.jpg", "feeder-gt1-side.jpg", "feeder-gt1-side2.jpg"], name: "Tray Feeder, Green & Teal", price: 65, shipping: "Plus $17 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/00w7sE9MhdDM4Ky5Rsbwk0t" },
      { files: ["ai-rg.jpg", "feeder-rg1-front.jpg", "feeder-rg1-side.jpg"], name: "Tray Feeder, Red & Green", price: 65, shipping: "Plus $17 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/aFa3co6A5bvE1ym6Vwbwk0u" },
      { files: ["ai-to.jpg", "feeder-to1-front.jpg", "feeder-to1-back.jpg", "feeder-to1-side.jpg", "feeder-to1-side2.jpg"], name: "Tray Feeder, Teal & Orange", price: 65, shipping: "Plus $17 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/eVq5kwcYt43cb8W93Ebwk0v" }
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
      { files: ["ai-purple.jpg", "carryall-purple1-front.jpg", "carryall-purple1-side.jpg"], name: "Garden Carry-All, Purple", price: 30, shipping: "Plus $17 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/dRmdR2bUp8js7WK7ZAbwk0w" },
      { files: ["ai-teal.jpg", "carryall-teal1-front.jpg", "carryall-teal1-side.jpg"], name: "Garden Carry-All, Teal", price: 30, shipping: "Plus $17 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/aFa7sE3nT8jsa4S5Rsbwk0x" },
      { files: ["ai-red.jpg", "carryall-red1-front.jpg", "carryall-red1-side.jpg"], name: "Garden Carry-All, Red", price: 30, shipping: "Plus $17 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/4gMfZa1fL8jsfpcenYbwk0y" },
      { files: ["ai-yellow.jpg", "carryall-yellow1-front.jpg", "carryall-yellow1-side.jpg"], name: "Garden Carry-All, Yellow", price: 30, shipping: "Plus $17 flat-rate shipping (contiguous US only)", buyLink: "https://buy.stripe.com/eVqfZa5w1dDM2Cq1Bcbwk0z" }
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
      youtubeId: "GC-T5cOfBZg",
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
