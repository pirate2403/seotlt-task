interface FontSizeCalculatorProps {
  calculateFontCoefficient: {
    maxCoefficient: number;
    minCoefficient: number;
    maxWidth: number;
    minWidth: number;
  };
}

export class FontSizeCalculator {
  static calculateFontCoefficient(props: FontSizeCalculatorProps['calculateFontCoefficient']): number {
    const { maxCoefficient, minCoefficient, maxWidth, minWidth } = props;
    const width = window.innerWidth;
    if (width <= minWidth) {
      return minCoefficient;
    } else if (width >= maxWidth) {
      return maxCoefficient;
    } else {
      return maxCoefficient - ((maxWidth - width) / (maxWidth - minWidth)) * (maxCoefficient - minCoefficient);
    }
  }
}
