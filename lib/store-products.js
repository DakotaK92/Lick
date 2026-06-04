import { getProductsCollection } from "./mongodb";
import { formatPrice } from "./format-price";

export const fallbackProducts = [
  {
    id: "confetti-funfetti-pint",
    name: "Confetti Funfetti Pint",
    description:
      "Birthday-cake ice cream with rainbow crumbs and a vanilla frosting swirl.",
    priceInCents: 899,
    image: "/assets/images/icecreamPintImg1.jpg",
    category: "Pints",
  },
  {
    id: "strawberries-cream-scoop-pack",
    name: "Strawberries & Cream Scoop Pack",
    description:
      "Fresh strawberry churn with sweet cream ribbons, packed for a night in.",
    priceInCents: 1299,
    image: "/assets/images/icecreamImg2.jpg",
    category: "Scoop Packs",
  },
  {
    id: "lick-rewards-starter-kit",
    name: "Lick Rewards Starter Kit",
    description:
      "A playful merch bundle with a reusable pint tote and member card.",
    priceInCents: 2499,
    image: "/assets/images/membershipCards.jpg",
    category: "Merch",
  },
  {
    id: "strawberry-cream-pop-box",
    name: "Strawberry Cream Pop Box",
    description:
      "Creamy strawberry popsicles made for sunny afternoons and quick freezer grabs.",
    priceInCents: 999,
    image: "/assets/images/icecreamImg2.jpg",
    category: "Popsicles",
  },
  {
    id: "blueberry-lemonade-pop-box",
    name: "Blueberry Lemonade Pop Box",
    description:
      "Bright blueberry lemonade pops with a tart finish and a soft berry swirl.",
    priceInCents: 999,
    image: "/assets/images/seasonal-icecream.jpg",
    category: "Popsicles",
  },
  {
    id: "confetti-cake-pop-box",
    name: "Confetti Cake Pop Box",
    description:
      "A frozen cake-pop style treat with vanilla cream and colorful sprinkles.",
    priceInCents: 1099,
    image: "/assets/images/icecreamImg1.png",
    category: "Popsicles",
  },
  {
    id: "blueberry-lemon-crisp-pint",
    name: "Blueberry Lemon Crisp Pint",
    description:
      "Blueberry ice cream with lemon cookie crumble and a bright citrus swirl.",
    priceInCents: 949,
    image: "/assets/images/seasonal-icecream.jpg",
    category: "Pints",
  },
  {
    id: "cookies-cream-party-pack",
    name: "Cookies & Cream Party Pack",
    description:
      "A shareable scoop pack loaded with chocolate cookie pieces and vanilla cream.",
    priceInCents: 1599,
    image: "/assets/images/icecreamImg1.png",
    category: "Scoop Packs",
  },
  {
    id: "family-sundae-kit",
    name: "Family Sundae Kit",
    description:
      "Everything you need for a table full of cones, toppings, and happy faces.",
    priceInCents: 2199,
    image: "/assets/images/family-sharing.jpeg",
    category: "Kits",
  },
  {
    id: "lick-pint-tote",
    name: "Lick Pint Tote",
    description:
      "A reusable freezer tote made for market runs, pint pickups, and weekend drops.",
    priceInCents: 1799,
    image: "/assets/images/membershipCards.jpg",
    category: "Merch",
  },
  {
    id: "vanilla-bean-scoop-pack",
    name: "Vanilla Bean Scoop Pack",
    description:
      "A classic creamy vanilla scoop pack made for floats, pies, and easy desserts.",
    priceInCents: 1199,
    image: "/assets/images/icecreamIllustration.jpg",
    category: "Scoop Packs",
  },
  {
    id: "seasonal-flight-box",
    name: "Seasonal Flight Box",
    description:
      "Four mini tasting cups featuring rotating seasonal flavors from the Lick freezer.",
    priceInCents: 1899,
    image: "/assets/images/seasonal-icecream.jpg",
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
      priceInCents: product.priceInCents,
      image: product.image,
      category: product.category || "Shop",
    }));
  } catch {
    return fallbackProducts;
  }
}

export async function getStoreProduct(productId) {
  const products = await getStoreProducts();

  return products.find((product) => product.id === productId);
}
