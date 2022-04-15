const productsData = [
  {
    title: 'Product title will be showed',
    price: 800,
    discount: 15,
    ratings: 3,
    images: ['/default/product-300x300.png', 'https://www.startech.com.bd/image/cache/catalog/laptop/razer/blade-15-advanced-model/blade-15-advanced-model-01-228x228.jpg'],
    path: '/',
    statusText: 'New',
    statusType: 'news'
  },
  {
    title: 'Product title will be showed',
    price: 500,
    discount: 12,
    ratings: 4,
    images: ['/default/product-300x300.png', 'https://www.startech.com.bd/image/cache/catalog/laptop/razer/blade-15-advanced-model/blade-15-advanced-model-01-228x228.jpg'],
    path: '/',
    statusText: 'Hot',
    statusType: 'hots'
  },
  {
    title: 'Product title will be showed',
    price: 500,
    discount: null,
    ratings: 4,
    images: ['/default/product-300x300.png', 'https://www.startech.com.bd/image/cache/catalog/laptop/razer/blade-15-advanced-model/blade-15-advanced-model-01-228x228.jpg'],
    path: '/',
    statusText: 'Offer',
    statusType: 'offers'
  },
  {
    title: 'Product title will be showed',
    price: 300,
    discount: 10,
    ratings: 5,
    images: ['/default/product-300x300.png', 'https://www.startech.com.bd/image/cache/catalog/combo/kraken-x-headset-and-deathadder-essential/kraken-x-headset-and-deathadder-essential-228x228.jpg'],
    path: '/',
    statusText: null,
    statusType: null
  }
];

export default {

  topProducts: [...productsData, ...productsData],
  products: [...productsData, ...productsData, ...productsData.slice(0, 2)]

};
