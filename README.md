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
- `ESLint` for code quality

## What I Built

- A responsive homepage with branded hero, featured flavor cards, and call-to-action sections
- Active navigation states so users can tell which page they are on
- Dedicated pages for products, history, news, and where to buy
- Polished card layouts with images, buttons, and hover feedback
- A starter location finder with Google Maps embeds and directions links

## What I Learned

- Building sections from data arrays makes it much easier to scale cards, buttons, and page links
- Small UI details like spacing, rounded image containers, and active nav states make the site feel much more complete
- `Next/Image` needs the correct object reference and an `alt` prop to work properly
- A lightweight Google Maps embed is a good first step before committing to a full map API integration
- Breaking the site into focused routes helps turn a homepage concept into a more believable product experience

## Project Direction

Some strong next improvements for the project would be:

- adding real store data instead of placeholder locations
- connecting news and flavors to a CMS or local content model
- adding a fuller map experience with selectable locations or "near me" support
- expanding the rewards flow into a real signup or loyalty feature
