# Lick

Lick is a playful ice cream brand website built with Next.js. The project showcases featured flavors, brand storytelling, rewards messaging, and a `Where to Buy` experience with a lightweight Google Maps-style locator.

![Banner](public/assets/Lick-Banner.png)

## Technologies Used

- `Next.js 15` with the App Router
- `React 19`
- `Tailwind CSS`
- `Next/Image` and `Next/Link` for optimized images and routing
- `Radix UI` for accessible UI primitives like the mobile sheet menu
- `Lucide React` and `React Icons` for iconography
- `MongoDB` for optional product data storage
- `Stripe Checkout` for payment sessions
- `ESLint` for code quality

## What I Built

- A responsive homepage with branded hero, featured flavor cards, and call-to-action sections
- Active navigation states so users can tell which page they are on
- Dedicated pages for products, history, news, and where to buy
- Polished card layouts with images, buttons, and hover feedback
- A starter location finder with Google Maps embeds and directions links
- A starter store page with Stripe Checkout buttons
- MongoDB product loading with local fallback products

## What I Learned

- Building sections from data arrays makes it much easier to scale cards, buttons, and page links
- Small UI details like spacing, rounded image containers, and active nav states make the site feel much more complete
- `Next/Image` needs the correct object reference and an `alt` prop to work properly
- A lightweight Google Maps embed is a good first step before committing to a full map API integration
- Breaking the site into focused routes helps turn a homepage concept into a more believable product experience
- Stripe can handle checkout while MongoDB stores the product catalog and future order records

## Store Setup

The store works with local fallback products by default. To connect real services, create a local `.env.local` file using `.env.example` as a guide:

```bash
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB=lick
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

The MongoDB `products` collection can use documents shaped like this:

```json
{
  "slug": "confetti-funfetti-pint",
  "name": "Confetti Funfetti Pint",
  "description": "Birthday-cake ice cream with rainbow crumbs.",
  "priceInCents": 899,
  "image": "/assets/images/icecreamPintImg1.jpg",
  "category": "Pints",
  "active": true
}
```

Stripe Checkout is handled by the `/api/checkout` route. The current version creates payment sessions, then sends customers to `/store/success` or `/store/cancel`.

## Project Direction

Some strong next improvements for the project would be:

- adding real store data instead of placeholder locations
- connecting news and flavors to a CMS or local content model
- adding a fuller map experience with selectable locations or "near me" support
- expanding the rewards flow into a real signup or loyalty feature
- adding a Stripe webhook to save completed orders in MongoDB
