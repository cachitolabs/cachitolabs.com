// data/guideRegistry.ts
import { guide1Data } from './guides/guide-1';
import { guide2Data } from './guides/guide-2';

export const guideRegistry: Record<string, any> = {
  "guide-1": guide1Data,
  "guide-2": guide2Data,
};

// Helper to get all guides for the guides list page
export const getAllGuides = () => Object.values(guideRegistry);