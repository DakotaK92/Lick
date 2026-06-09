import { getProductsCollection } from "./mongodb";
import { formatPrice } from "./format-price";

export const fallbackProducts = [
  {
    id: "banana-chocolate-pint",
    name: "Banana Chocolate Pint",
    description:
      "Banana ice cream with chocolate chunks and a swirl of cocoa fudge, made for spooning straight from the pint.",
    priceInCents: 899,
    image: "/assets/ice-cream/banana-chocolate.jpg",
    gallery: [
      "/assets/ice-cream/banana-chocolate.jpg",
      "/assets/ice-cream/vanillla-strawberry.jpg",
      "/assets/ice-cream/strawberry.jpg",
    ],
    category: "Pints",
  },
  {
    id: "caramel-swirl-pint",
    name: "Caramel Swirl Pint",
    description:
      "Caramel Swirl ice cream with a rich caramel ribbon and a sprinkle of sea salt, made for savoring every spoonful.",
    priceInCents: 899,
    image: "/assets/ice-cream/caramel-swirl.jpg",
    gallery: [
      "/assets/ice-cream/mango.jpg",
      "/assets/images/seasonal-icecream.jpg",
      "/assets/images/icecreamIllustration.jpg",
    ],
    category: "Pints",
    ingredients: ["Mango puree", "Sweet cream", "Cane sugar", "Vanilla"],
  },
  {
    id: "chocolate-pint",
    name: "Chocolate Pint",
    description:
      "Rich chocolate ice cream with a smooth, velvety texture and a hint of vanilla.",
    priceInCents: 899,
    image: "/assets/ice-cream/chocolate.jpg",
    gallery: [
      "/assets/ice-cream/banana-chocolate.jpg",
      "/assets/ice-cream/strawberry.jpg",
      "/assets/images/family-sharing.jpeg",
    ],
    category: "Pints",
  },
  {
    id: "coffee-pint",
    name: "Coffee Pint",
    description:
      "Smooth coffee ice cream with a rich, bold flavor and a hint of vanilla.",
    priceInCents: 899,
    image: "/assets/ice-cream/coffee.jpg",
    gallery: [
      "/assets/images/membershipCards.jpg",
      "/assets/images/family-sharing.jpeg",
      "/assets/images/icecreamPintImg1.jpg",
    ],
    category: "Pints",
  },
  {
    id: "cookie-dough-pint",
    name: "Cookie Dough Pint",
    description:
      "Creamy cookie dough ice cream with chunks of real cookie dough and a hint of vanilla.",
    priceInCents: 899,
    image: "/assets/ice-cream/cookie-dough.jpg",
    gallery: [
      "/assets/ice-cream/vanillla-strawberry.jpg",
      "/assets/ice-cream/strawberry.jpg",
      "/assets/images/seasonal-icecream.jpg",
    ],
    category: "Pints",
  },
  {
    id: "cookies-cream-pint",
    name: "Cookies & Cream Pint",
    description:
      "A classic creamy vanilla scoop pack made for floats, pies, and easy desserts.",
    priceInCents: 899,
    image: "/assets/ice-cream/cookies-cream.jpg",
    gallery: [
      "/assets/images/seasonal-icecream.jpg",
      "/assets/ice-cream/vanilla.jpg",
      "/assets/images/icecreamIllustration.jpg",
    ],
    category: "Pints",
  },
  {
    id: "mango-pint",
    name: "Mango Pint",
    description:
      "A tropical mango ice cream with a smooth, velvety texture and a hint of vanilla.",
    priceInCents: 899,
    image: "/assets/ice-cream/mango.jpg",
    gallery: [
      "/assets/images/icecreamImg1.png",
      "/assets/images/icecreamPintImg1.jpg",
      "/assets/images/family-sharing.jpeg",
    ],
    category: "Pints",
  },
  {
    id: "mint-chocolate-chip-pint",
    name: "Mint Chocolate Chip Pint",
    description:
      "Refreshingly cool mint ice cream with rich chocolate chips and a hint of vanilla.",
    priceInCents: 899,
    image: "/assets/ice-cream/mint-chocolatechip.jpg",
    gallery: [
      "/assets/images/seasonal-icecream.jpg",
      "/assets/ice-cream/vanilla.jpg",
      "/assets/ice-cream/vanillla-strawberry.jpg",
    ],
    category: "Pints",
  },
  {
    id: "strawberry-pint",
    name: "Strawberry Pint",
    description:
      "A sweet strawberry ice cream with a smooth, velvety texture and a hint of vanilla.",
    priceInCents: 899,
    image: "/assets/ice-cream/strawberry.jpg",
    gallery: [
      "/assets/images/icecreamImg1.png",
      "/assets/ice-cream/cookies-cream.jpg",
      "/assets/images/family-sharing.jpeg",
    ],
    category: "Pints",
  },
  {
    id: "vanilla-pint",
    name: "Vanilla Pint",
    description:
      "A classic creamy vanilla ice cream with a smooth, velvety texture and a hint of vanilla.",
    priceInCents: 899,
    image: "/assets/ice-cream/vanilla.jpg",
    gallery: [
      "/assets/images/family-sharing.jpeg",
      "/assets/ice-cream/vanillla-strawberry.jpg",
      "/assets/images/icecreamPintImg1.jpg",
    ],
    category: "Pints",
  },
  {
    id: "vanilla-strawberry-pint",
    name: "Vanilla Strawberry Pint",
    description:
      "A delightful blend of creamy vanilla and sweet strawberry ice cream.",
    priceInCents: 899,
    image: "/assets/ice-cream/vanillla-strawberry.jpg",
    gallery: [
      "/assets/images/membershipCards.jpg",
      "/assets/images/family-sharing.jpeg",
      "/assets/images/seasonal-icecream.jpg",
    ],
    category: "Pints",
  },
  {
    id: "vanilla-bean-scoop-pack",
    name: "Vanilla Bean Scoop Pack",
    description:
      "A classic creamy vanilla scoop pack made for floats, pies, and easy desserts.",
    priceInCents: 1199,
    image: "/assets/ice-cream/chocolateFudge-popEdit.png",
    gallery: [
      "/assets/ice-cream/chocolateFudge-popEdit.png",
      "/assets/ice-cream/vanilla.jpg",
      "/assets/images/icecreamPintImg1.jpg",
    ],
    category: "Popsicles",
  },
  {
    id: "seasonal-flight-box",
    name: "Seasonal Flight Box",
    description:
      "Four mini tasting cups featuring rotating seasonal flavors from the Lick freezer.",
    priceInCents: 1899,
    image: "/assets/images/seasonal-icecream.jpg",
    gallery: [
      "/assets/images/seasonal-icecream.jpg",
      "/assets/images/icecreamImg1.png",
      "/assets/ice-cream/vanillla-strawberry.jpg",
    ],
    category: "Popsicles",
  },
  {
    id: "seasonal-flight-box",
    name: "Seasonal Flight Box",
    description:
      "Four mini tasting cups featuring rotating seasonal flavors from the Lick freezer.",
    priceInCents: 1899,
    image: "/assets/images/seasonal-icecream.jpg",
    gallery: [
      "/assets/images/seasonal-icecream.jpg",
      "/assets/images/icecreamImg1.png",
      "/assets/ice-cream/vanillla-strawberry.jpg",
    ],
    category: "Merch",
  },
];

export { formatPrice };

export async function getStoreProducts() {
  try {
    const collection = await getProductsCollection();

    if (!collection) {
      return fallbackProducts;
    }

    const products = await collection
      .find({ active: { $ne: false } })
      .sort({ category: 1, name: 1 })
      .toArray();

    if (!products.length) {
      return fallbackProducts;
    }

    return products.map((product) => ({
      id: product.slug || product.id || product._id.toString(),
      name: product.name,
      description: product.description,
      longDescription: product.longDescription,
      priceInCents: product.priceInCents,
      image: product.image,
      gallery: product.gallery || [product.image],
      category: product.category || "Shop",
      ingredients: product.ingredients || [],
    }));
  } catch {
    return fallbackProducts;
  }
}

export async function getStoreProduct(productId) {
  const products = await getStoreProducts();

  return products.find((product) => product.id === productId);
}
