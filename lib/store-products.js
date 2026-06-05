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
    priceInCents: 949,
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
    id: "strawberries-cream-scoop-pack",
    name: "Strawberries & Cream Scoop Pack",
    description:
      "Fresh strawberry churn with sweet cream ribbons, packed for a night in.",
    priceInCents: 1299,
    image: "/assets/ice-cream/banana-chocolate.jpg",
    gallery: [
      "/assets/ice-cream/banana-chocolate.jpg",
      "/assets/ice-cream/strawberry.jpg",
      "/assets/images/family-sharing.jpeg",
    ],
    category: "Scoop Packs",
  },
  {
    id: "lick-rewards-starter-kit",
    name: "Lick Rewards Starter Kit",
    description:
      "A playful merch bundle with a reusable pint tote and member card.",
    priceInCents: 2499,
    image: "/assets/images/membershipCards.jpg",
    gallery: [
      "/assets/images/membershipCards.jpg",
      "/assets/images/family-sharing.jpeg",
      "/assets/images/icecreamPintImg1.jpg",
    ],
    category: "Merch",
  },
  {
    id: "strawberry-cream-pop-box",
    name: "Strawberry Cream Pop Box",
    description:
      "Creamy strawberry popsicles made for sunny afternoons and quick freezer grabs.",
    priceInCents: 999,
    image: "/assets/ice-cream/vanillla-strawberry.jpg",
    gallery: [
      "/assets/ice-cream/vanillla-strawberry.jpg",
      "/assets/ice-cream/strawberry.jpg",
      "/assets/images/seasonal-icecream.jpg",
    ],
    category: "Popsicles",
  },
  {
    id: "blueberry-lemonade-pop-box",
    name: "Blueberry Lemonade Pop Box",
    description:
      "Bright blueberry lemonade pops with a tart finish and a soft berry swirl.",
    priceInCents: 999,
    image: "/assets/images/seasonal-icecream.jpg",
    gallery: [
      "/assets/images/seasonal-icecream.jpg",
      "/assets/ice-cream/vanilla.jpg",
      "/assets/images/icecreamIllustration.jpg",
    ],
    category: "Popsicles",
  },
  {
    id: "confetti-cake-pop-box",
    name: "Confetti Cake Pop Box",
    description:
      "A frozen cake-pop style treat with vanilla cream and colorful sprinkles.",
    priceInCents: 1099,
    image: "/assets/images/icecreamImg1.png",
    gallery: [
      "/assets/images/icecreamImg1.png",
      "/assets/images/icecreamPintImg1.jpg",
      "/assets/images/family-sharing.jpeg",
    ],
    category: "Popsicles",
  },
  {
    id: "blueberry-lemon-crisp-pint",
    name: "Blueberry Lemon Crisp Pint",
    description:
      "Blueberry ice cream with lemon cookie crumble and a bright citrus swirl.",
    priceInCents: 949,
    image: "/assets/images/seasonal-icecream.jpg",
    gallery: [
      "/assets/images/seasonal-icecream.jpg",
      "/assets/ice-cream/vanilla.jpg",
      "/assets/ice-cream/vanillla-strawberry.jpg",
    ],
    category: "Pints",
  },
  {
    id: "cookies-cream-party-pack",
    name: "Cookies & Cream Party Pack",
    description:
      "A shareable scoop pack loaded with chocolate cookie pieces and vanilla cream.",
    priceInCents: 1599,
    image: "/assets/images/icecreamImg1.png",
    gallery: [
      "/assets/images/icecreamImg1.png",
      "/assets/ice-cream/cookies-cream.jpg",
      "/assets/images/family-sharing.jpeg",
    ],
    category: "Scoop Packs",
  },
  {
    id: "family-sundae-kit",
    name: "Family Sundae Kit",
    description:
      "Everything you need for a table full of cones, toppings, and happy faces.",
    priceInCents: 2199,
    image: "/assets/images/family-sharing.jpeg",
    gallery: [
      "/assets/images/family-sharing.jpeg",
      "/assets/ice-cream/vanillla-strawberry.jpg",
      "/assets/images/icecreamPintImg1.jpg",
    ],
    category: "Kits",
  },
  {
    id: "lick-pint-tote",
    name: "Lick Pint Tote",
    description:
      "A reusable freezer tote made for market runs, pint pickups, and weekend drops.",
    priceInCents: 1799,
    image: "/assets/images/membershipCards.jpg",
    gallery: [
      "/assets/images/membershipCards.jpg",
      "/assets/images/family-sharing.jpeg",
      "/assets/images/seasonal-icecream.jpg",
    ],
    category: "Merch",
  },
  {
    id: "vanilla-bean-scoop-pack",
    name: "Vanilla Bean Scoop Pack",
    description:
      "A classic creamy vanilla scoop pack made for floats, pies, and easy desserts.",
    priceInCents: 1199,
    image: "/assets/images/icecreamIllustration.jpg",
    gallery: [
      "/assets/images/icecreamIllustration.jpg",
      "/assets/ice-cream/vanilla.jpg",
      "/assets/images/icecreamPintImg1.jpg",
    ],
    category: "Scoop Packs",
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
    category: "Kits",
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
