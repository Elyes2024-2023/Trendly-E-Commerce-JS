import { Metadata } from 'next';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  noIndex?: boolean;
}

export const generateMetadata = ({
  title,
  description,
  keywords,
  ogImage,
  ogUrl,
  noIndex = false,
}: SeoProps): Metadata => {
  const siteTitle = 'Trendly - AI-Powered eCommerce';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultImage = '/images/og-image.jpg';
  const defaultUrl = 'https://trendly.com';

  return {
    title: fullTitle,
    description,
    keywords: keywords || 'ecommerce, AI, shopping, community, trends, fashion',
    openGraph: {
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage || defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      url: ogUrl || defaultUrl,
      siteName: siteTitle,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage || defaultImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    alternates: {
      canonical: ogUrl || defaultUrl,
    },
  };
}; 