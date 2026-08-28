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
    tagline: "Saloons, banks and general stores, whittled down to birdhouse scale.",
    dimensions: "10.5\" tall x 10\" deep x 5.5\" wide",
    handPainted: false,
    extraNotes: [
      "Porch posts, bench seats and hitching posts are made from natural juniper and cedar branches — each branch is different, so yours will vary slightly from the photo."
    ],
    cover: "assets/collections-hero/hero-western.jpg",
    status: "live",
    items: [
      { files: ["western-generalstore1-front.jpg", "western-generalstore1-side.jpg", "western-generalstore1-side2.jpg"], name: "General Store", price: 100, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/8x25kwaQl2Z890O93Ebwk0f" },
      { files: ["ai-mercantile.jpg", "western-mercantile1-front.jpg", "western-mercantile1-side.jpg"], name: "Mercantile", price: 100, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/bJe8wI9MhgPY4Ky7ZAbwk0g" },
      { files: ["ai-bank.jpg", "western-bank1-front.jpg", "western-bank1-side.jpg", "western-bank1-side2.jpg"], name: "The Bank", price: 100, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/aFa7sE2jPczI90ObbMbwk0h" },
      { files: ["ai-saloon.jpg", "western-saloon1-front.jpg", "western-saloon1-side.jpg", "western-saloon1-side2.jpg"], name: "The Saloon", price: 100, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/cNi5kwf6B7foel8enYbwk0i" }
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
      { files: ["ai-oy.jpg", "adobe-oy1-front.jpg", "adobe-oy1-side.jpg"], name: "Adobe Pueblo, Orange & Yellow", price: 80, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/5kQ8wIgaFdDM0uicfQbwk0j" },
      { files: ["ai-rt.jpg", "adobe-rt1-front.jpg", "adobe-rt1-side.jpg"], name: "Adobe Pueblo, Red & Teal", price: 80, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/14AcMYf6BfLU90OcfQbwk0k" },
      { files: ["ai-yr.jpg", "adobe-yr1-front.jpg", "adobe-yr1-side.jpg"], name: "Adobe Pueblo, Yellow & Red", price: 80, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/14AdR25w1dDM4Ky7ZAbwk0l" },
      { files: ["ai-go.jpg", "adobe-go1-front.jpg"], name: "Adobe Pueblo, Green & Orange", price: 80, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/dRm00c5w18js90ObbMbwk0m" },
      { files: ["ai-ot.jpg", "adobe-ot1-front.jpg"], name: "Adobe Pueblo, Orange & Teal", price: 80, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/28E3co6A5czIcd02Fgbwk0n" },
      { files: ["ai-tr.jpg", "adobe-tr1-front.jpg"], name: "Adobe Pueblo, Teal & Red", price: 80, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/14AaEQ2jP2Z83Gugw6bwk0o" },
      { files: ["ai-yg.jpg", "adobe-yg1-front.jpg"], name: "Adobe Pueblo, Yellow & Green", price: 80, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/8x200caQlfLU1ymenYbwk0p" },
      { files: ["ai-ty.jpg", "adobe-ty1-front.jpg"], name: "Adobe Pueblo, Teal & Yellow", price: 80, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/8x25kw7E91V4cd093Ebwk0q" }
    ]
  },
  {
    id: "spanish-mission",
    name: "Spanish Mission",
    tagline: "Bell towers, cross spires and arched windows, modeled after the old mission chapels.",
    dimensions: "12.25\" tall x 10\" deep x 6.75\" wide",
    extraNotes: [
      "Made with real cedar, not substandard particle board."
    ],
    video: {
      youtubeId: "-TFIqdvF_04",
      title: "Watch a Spanish Mission Get Built",
      caption: "From raw cedar to finished chapel — see the whole build, start to finish."
    },
    cover: "assets/collections-hero/hero-spanish-mission.jpg",
    status: "live",
    items: [
      { files: ["mission-tealblue-front1.jpg", "mission-tealblue-front2.jpg", "mission-tealblue-back.jpg"], name: "Spanish Mission, Teal & Blue", price: 100, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/28EbIU6A543cel8gw6bwk0B" },
      { files: ["mission-terracottaochre-front1.jpg", "mission-terracottaochre-front2.jpg", "mission-terracottaochre-back.jpg"], name: "Spanish Mission, Terra Cotta & Ochre", price: 100, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/cNiaEQ2jP57g7WK2Fgbwk0C" },
      { files: ["mission-redblue-front1.jpg", "mission-redblue-front2.jpg"], name: "Spanish Mission, Red & Blue", price: 100, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/aFa6oA1fLbvEa4S3Jkbwk0D" },
      { files: ["mission-ochreteal-front1.jpg", "mission-ochreteal-back.jpg"], name: "Spanish Mission, Ochre & Teal", price: 100, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/6oUcMY4rXbvEcd0fs2bwk0E" },
      { files: ["mission-ochreterracotta-front1.jpg", "mission-ochreterracotta-back.jpg"], name: "Spanish Mission, Ochre & Terra Cotta", price: 100, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/eVqfZa8Id7foa4Sfs2bwk0F" }
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
    status: "live",
    items: [
      { files: ["ai-ruby-garden.jpg", "signature-1.jpg"], name: "Whimsical Cottage, Ruby", price: 90, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/cNifZae2x43ccd00x8bwk05" },
      { files: ["ai-indigo-citrus.jpg", "whimsical-bgo1-front.jpg", "whimsical-bgo1-side.jpg", "whimsical-bgo1-side2.jpg"], name: "Whimsical Cottage, Indigo & Citrus", price: 90, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/8x214g8IddDM5OC2Fgbwk02" },
      { files: ["ai-blue-red.jpg", "whimsical-br1-front.jpg", "whimsical-br1-side.jpg"], name: "Whimsical Cottage, Blue & Red", price: 90, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/6oU9AM4rX9nwel8cfQbwk06" },
      { files: ["ai-navy-red-v2.jpg", "whimsical-rbsw1-front.jpg", "whimsical-rbsw1-side.jpg", "whimsical-rbsw1-side2.jpg"], name: "Whimsical Cottage House, Navy & Red", price: 90, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/3cI28k0bH7focd0gw6bwk07" },
      { files: ["ai-forest-ochre.jpg", "whimsical-gy1-front.jpg", "whimsical-gy1-side.jpg"], name: "Whimsical Teardrop, Forest & Ochre", price: 90, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/6oU8wIaQl2Z8a4S3Jkbwk09" },
      { files: ["ai-red-lime.jpg", "whimsical-rg1-front.jpg", "whimsical-rg1-side.jpg"], name: "Whimsical Teardrop, Red & Lime Green", price: 90, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/9B6cMY2jP7fogtgbbMbwk0a" },
      { files: ["ai-orange-purple-v2.jpg", "whimsical-po1-front.jpg", "whimsical-po1-side.jpg", "whimsical-po1-side2.jpg"], name: "Whimsical Cottage House, Orange & Purple", price: 90, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/9B65kwaQl57g7WK2Fgbwk0b" },
      { files: ["ai-red-forest.jpg", "whimsical-rt1-front.jpg", "whimsical-rt1-side.jpg", "whimsical-rt1-side2.jpg"], name: "Whimsical Cottage, Red & Forest", price: 90, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/28E9AM9Mh2Z8dh4a7Ibwk0c" },
      { files: ["ai-navy-lime.jpg", "whimsical-pt1-front.jpg", "whimsical-pt1-side.jpg", "whimsical-pt1-side2.jpg"], name: "Whimsical Cottage, Burgundy & Green", price: 90, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/6oUaEQ8Id57ga4SdjUbwk0d" },
      { files: ["ai-shell-deep-forest.jpg", "whimsical-gb1-front.jpg", "whimsical-gb1-side.jpg"], name: "Whimsical Teardrop, Forest & Lime", price: 90, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/5kQ9AM8Id1V490O3Jkbwk0e" },
      { files: ["ai-green-purple.jpg", "whimsical-gp1-front.jpg", "whimsical-gp1-side.jpg"], name: "Whimsical Cottage, Green & Purple", price: 90, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/fZucMYf6B43cel8enYbwk0A" }
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
      { files: ["ai-green-teal-v2.jpg", "feeder-gt1-front.jpg", "feeder-gt1-back.jpg", "feeder-gt1-side.jpg", "feeder-gt1-side2.jpg"], name: "Tray Feeder, Green & Teal", price: 90, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/00w7sE9MhdDM4Ky5Rsbwk0t" },
      { files: ["ai-rg.jpg", "feeder-rg1-front.jpg", "feeder-rg1-side.jpg"], name: "Tray Feeder, Red & Green", price: 90, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/aFa3co6A5bvE1ym6Vwbwk0u" },
      { files: ["ai-to.jpg", "feeder-to1-front.jpg", "feeder-to1-back.jpg", "feeder-to1-side.jpg", "feeder-to1-side2.jpg"], name: "Tray Feeder, Teal & Orange", price: 90, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/eVq5kwcYt43cb8W93Ebwk0v" }
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
      { files: ["ai-purple.jpg", "carryall-purple1-front.jpg", "carryall-purple1-side.jpg"], name: "Garden Carry-All, Purple", price: 60, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/dRmdR2bUp8js7WK7ZAbwk0w" },
      { files: ["ai-teal.jpg", "carryall-teal1-front.jpg", "carryall-teal1-side.jpg"], name: "Garden Carry-All, Teal", price: 60, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/aFa7sE3nT8jsa4S5Rsbwk0x" },
      { files: ["ai-red.jpg", "carryall-red1-front.jpg", "carryall-red1-side.jpg"], name: "Garden Carry-All, Red", price: 60, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/4gMfZa1fL8jsfpcenYbwk0y" },
      { files: ["ai-yellow.jpg", "carryall-yellow1-front.jpg", "carryall-yellow1-side.jpg"], name: "Garden Carry-All, Yellow", price: 60, shipping: "Includes shipping (contiguous US only)", buyLink: "https://buy.stripe.com/eVqfZa5w1dDM2Cq1Bcbwk0z" }
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
    name: "Quail 'Nurture Your Joy' Graphic Hoodie",
    price: 46.25,
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
    price: 24.99,
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
