'use client';

import { useSyncExternalStore } from 'react';

export function useMedia(query: string, fallback = false) {
  return useSyncExternalStore(
    (cb) => {
      if (typeof window === 'undefined') return () => {};
      const mql = window.matchMedia(query);
      mql.addEventListener('change', cb);
      return () => mql.removeEventListener('change', cb);
    },
    () => (typeof window !== 'undefined' ? window.matchMedia(query).matches : fallback),
    () => fallback,
  );
}

/** True on devices with a precise pointer (mouse / trackpad) — gates hover-only effects */
export const useFinePointer = () => useMedia('(hover: hover) and (pointer: fine)');
export const useReducedMotionPref = () => useMedia('(prefers-reduced-motion: reduce)');
export const useDesktop = () => useMedia('(min-width: 1024px)');
