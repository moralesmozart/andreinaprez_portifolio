/** Screenshots exported from the 2023 Canva portfolio (`public/portfolio/slide-NN.png`). */
export const PORTFOLIO_SLIDE_COUNT = 48;

export function portfolioSlideSrc(index: number): string {
  if (index < 1 || index > PORTFOLIO_SLIDE_COUNT) {
    throw new RangeError(`Slide index must be 1–${PORTFOLIO_SLIDE_COUNT}`);
  }
  return `/portfolio/slide-${String(index).padStart(2, "0")}.png`;
}
