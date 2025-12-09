# Accez AI - AI Customer Service Platform

A modern, responsive website built with Next.js 14, TypeScript, and Tailwind CSS, inspired by Gabster.ai. This platform showcases an AI-powered customer service solution.

## Features

- **Modern Design**: Beautiful gradient backgrounds, animations, and responsive layout
- **Hero Section**: Eye-catching landing section with value proposition and statistics
- **Features Section**: Showcase of 6 key features with hover effects
- **Pricing Plans**: Three pricing tiers with promotional discounts
- **FAQ Section**: Accordion-style FAQs with SEO-optimized JSON-LD structured data
- **Analytics Integration**: Google Analytics, Google Tag Manager, and PostHog
- **SEO Optimized**: Meta tags, sitemap, robots.txt, and structured data
- **Performance**: Built with Next.js 14 App Router for optimal performance

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Analytics**: Google Analytics, Google Tag Manager, PostHog
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd accez-new
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file from the example:
```bash
cp .env.local.example .env.local
```

4. Add your analytics IDs to `.env.local`:
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxxxxxxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## Project Structure

```
accez-new/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── manifest.ts          # PWA manifest
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.txt           # SEO robots file
├── components/
│   ├── Hero.tsx             # Hero section with animations
│   ├── Features.tsx         # Features showcase
│   ├── Pricing.tsx          # Pricing plans
│   ├── FAQ.tsx              # FAQ with structured data
│   ├── CTA.tsx              # Call-to-action section
│   ├── Footer.tsx           # Footer component
│   └── Analytics.tsx        # Analytics scripts
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
```

## Customization

### Change Colors

Edit [tailwind.config.ts](tailwind.config.ts) to customize the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

### Update Content

- **Hero**: Edit [components/Hero.tsx](components/Hero.tsx)
- **Pricing**: Modify pricing tiers in [components/Pricing.tsx](components/Pricing.tsx)
- **FAQ**: Update questions/answers in [components/FAQ.tsx](components/FAQ.tsx)
- **Features**: Change features in [components/Features.tsx](components/Features.tsx)

### Add Pages

Create new pages in the `app` directory:

```bash
app/
├── about/
│   └── page.tsx
└── contact/
    └── page.tsx
```

## SEO Optimization

The site includes:

- Meta tags in [app/layout.tsx](app/layout.tsx)
- JSON-LD structured data for FAQs
- Dynamic sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Open Graph tags for social sharing

## Analytics Setup

### Google Analytics

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Copy your Measurement ID (G-XXXXXXXXXX)
3. Add it to `.env.local`

### Google Tag Manager

1. Create a container at [tagmanager.google.com](https://tagmanager.google.com)
2. Copy your Container ID (GTM-XXXXXXX)
3. Add it to `.env.local`

### PostHog

1. Sign up at [posthog.com](https://posthog.com)
2. Copy your Project API Key
3. Add it to `.env.local`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Railway
- Render

## Performance

- Uses Next.js 14 App Router for automatic code splitting
- Optimized images with next/image (when added)
- CSS-in-JS with Tailwind for minimal CSS
- Lazy loading components
- Optimized fonts with next/font

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Support

For questions or issues, please open an issue on GitHub.

## Acknowledgments

- Design inspired by [Gabster.ai](https://gabster.ai/)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
