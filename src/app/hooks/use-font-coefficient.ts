import { FontSizeCalculator } from '@/shared/lib';
import { useEffect } from 'react';

const COEFFICIENT_PROPS = {
  maxCoefficient: 1,
  minCoefficient: 0.7,
  maxWidth: 1280,
  minWidth: 480,
};

export function useFontCoefficient(): void {
  const root = document.documentElement;

  const updateFontCoefficient = () => {
    root.style.setProperty(
      '--font-coefficient',
      FontSizeCalculator.calculateFontCoefficient(COEFFICIENT_PROPS).toString(),
    );
  };

  useEffect(() => {
    updateFontCoefficient();
    window.addEventListener('resize', updateFontCoefficient);
    return () => window.removeEventListener('resize', updateFontCoefficient);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
