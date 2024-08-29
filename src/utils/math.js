/**
 * Calculate discounted price
 */
export const calcDiscountPrice = (price, discount) => {
  return price - (Number(price) * Number(discount)) / 100;
};
