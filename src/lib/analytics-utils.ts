import { Analytics } from '@vercel/analytics/react';
import mixpanel from 'mixpanel-browser';

// Initialize Mixpanel
if (process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) {
  mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN);
}

export const trackPageView = (pageName: string) => {
  if (process.env.NODE_ENV === 'production') {
    mixpanel.track('Page View', { page: pageName });
  }
};

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (process.env.NODE_ENV === 'production') {
    mixpanel.track(eventName, properties);
  }
};

export const trackUser = (userId: string, traits?: Record<string, any>) => {
  if (process.env.NODE_ENV === 'production') {
    mixpanel.identify(userId);
    if (traits) {
      mixpanel.people.set(traits);
    }
  }
};

export const trackPurchase = (
  orderId: string,
  amount: number,
  products: Array<{ id: string; name: string; price: number; quantity: number }>
) => {
  if (process.env.NODE_ENV === 'production') {
    mixpanel.track('Purchase', {
      orderId,
      amount,
      products,
      timestamp: new Date().toISOString(),
    });
  }
};

export const trackAddToCart = (
  productId: string,
  productName: string,
  price: number,
  quantity: number = 1
) => {
  if (process.env.NODE_ENV === 'production') {
    mixpanel.track('Add to Cart', {
      productId,
      productName,
      price,
      quantity,
      timestamp: new Date().toISOString(),
    });
  }
};

export const trackSearch = (query: string, resultsCount: number) => {
  if (process.env.NODE_ENV === 'production') {
    mixpanel.track('Search', {
      query,
      resultsCount,
      timestamp: new Date().toISOString(),
    });
  }
};

export const AnalyticsWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
}; 