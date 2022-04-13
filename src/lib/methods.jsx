const methods = {};

/**
 * This method will be take a object that contained by two
 * properties,and return the discounted price of the product.
 * @param {object}
 * @returns {number}
 * */
methods.getDicountedPrice = ({ price, discount }) => (price - (Number(price) * Number(discount)) / 100);

export default methods;
