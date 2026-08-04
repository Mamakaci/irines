import heroInterview from './images/hero-interview.webp';
import iconPainting from './images/icon-painting.webp';
import restoration from './images/restoration.webp';
import order from './images/order.webp';
import individual from './images/individual.webp';

export const heroImage = heroInterview;

export const artworkImages = {
  iconPainting,
  iconRestoration: restoration,
  murals: order,
  commissions: individual
} as const;

export const practiceImages = {
  'icon-painting': iconPainting,
  'icon-restoration': restoration,
  'custom-art': order,
  'commissioned-paintings': individual
} as const;
