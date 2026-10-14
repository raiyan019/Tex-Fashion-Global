// Every image lives in /public, so these paths are served as-is.
// Drop a file at the given path and it appears — no code changes needed.
// If a file is missing, <Img> shows a neutral placeholder instead of a broken image.
// Update `alt` to describe the photo you actually use.
export const images = {
  heroMain: {
    src: "/images/home/hero-main.jpg",
    ratio: "4 / 5",
    alt: "Finished garments on a rail from a Tex Fashion Global collection",
  },
  heroDetail: {
    src: "/images/home/hero-detail.jpg",
    ratio: "1 / 1",
    alt: "Close detail of fabric and stitching",
  },
  introFabric: {
    src: "/images/home/intro-fabric.jpg",
    ratio: "4 / 5",
    alt: "Rolls and swatches of textile material",
  },
  introHands: {
    src: "/images/home/intro-hands.jpg",
    ratio: "1 / 1",
    alt: "Hands guiding fabric through an industrial sewing machine",
  },
  categoryKids: {
    src: "/images/home/category-kids.jpg",
    ratio: "3 / 4",
    alt: "Kids apparel",
  },
  categoryLadies: {
    src: "/images/home/category-ladies.jpg",
    ratio: "3 / 4",
    alt: "Ladies apparel",
  },
  categoryMen: {
    src: "/images/home/category-men.jpg",
    ratio: "3 / 4",
    alt: "Mens apparel",
  },
  processFloor: {
    src: "/images/home/process-floor.jpg",
    ratio: "4 / 5",
    alt: "Sewing line on a garment production floor",
  },
  qualityInspection: {
    src: "/images/home/quality-inspection.jpg",
    ratio: "4 / 5",
    alt: "Inspector checking the seams and finish of a garment",
  },
};

// Logo files live in /public/images. Use .svg or .png, then update the extension here.
// `onDark` is used on the dark footer; if that file is missing, the text wordmark is shown.
// One logo file, used in the navbar and footer. Put it in /public/images.
export const logoSrc = "/images/logo.png";
