import { lazy } from 'react';

export const AboutPage = lazy(() => new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => resolve(import('./About')), 500)
}));