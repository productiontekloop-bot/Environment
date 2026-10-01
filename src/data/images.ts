export interface ImageArtwork {
  id: string;
  title: string;
  artist: string;
  description: string;
  price?: string;
  imageUrl: string;
  productUrl: string;
  isLarge?: boolean;
  width?: number;  // Optional custom width (in meters). Overrides global config.
  height?: number; // Optional custom height (in meters). Overrides global config.
  size?: string;   // Optional custom artwork size (e.g. "24in x 36in")
}

/**
 * GALLERY_IMAGES
 * To customize the dimensions of any specific image, add properties:
 *    width: [number],
 *    height: [number]
 * inside the image object below. E.g.:
 *    width: 4.5,
 *    height: 3.0
 */
export const GALLERY_IMAGES: ImageArtwork[] = [
  // --- NORTH WALL (6 Normal Artworks) ---
  {
    id: "2",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "2",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "3",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "4",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "5",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "6",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "7",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "8",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "9",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "10",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "11",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "12",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "13",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "14",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "15",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "15",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "16",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "17",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "18",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "19",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "20",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "21",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "22",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "23",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
   {
    id: "24",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
   {
    id: "25",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
   {
    id: "26",
    title: "Transcendence, 2026, Oil on canvas ",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,800",
    imageUrl: "/images/0001.jpeg",
    productUrl: "#",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  }
  
];

// NOTE: To use your local images later:
// 1. Upload your images to the /public/images/ folder named art1.jpg, art2.jpg, etc.
// 2. Change the fields above (or replace the list) to point to `/images/art${id}.jpg`
